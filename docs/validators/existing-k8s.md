---
sidebar_position: 3
description: Deploying a Chronicle validator into an existing kubernetes cluster.
keywords: [K8s, kubernetes cluster]
---

# Existing K8s

:::info

Chronicle operates a distributed network of validators run by reputable projects in the space, including MakerDAO/Sky, Etherscan, Gnosis, Bitcoin Suisse, and others. This structure reinforces both security and decentralization, setting Chronicle apart from other oracle solutions.

**Note: Running a validator is a permissioned process.** This documentation is intended for projects that have already been approved to run a validator.
:::

Deploying the validator into an existing kubernetes cluster.

### Helm Chart details:

Validator chart version: **0.8.2** (app version `0.81.0`)

Operators must install exactly this version, not the latest version published to the Helm repository.

## Notable changes include:

:::info
**Upgrading to chart `0.8.2`**: no values changes are needed. A values file that works with chart `0.6.x` works unchanged with `0.8.2`, and the upgrade moves both the `ghost` and `ghost-vao` deployments to `ghcr.io/chronicleprotocol/ghost:0.81.0`. If your values file sets an image tag (`global.image.tag`, `ghost.image.tag` or `vao.image.tag`), remove it, even if it is empty: a pinned tag keeps the release on the image you pinned, and an empty `global.image.tag` makes the chart use `ghost:0.81.0` without the pinned digest.

Chart `0.7.0` added an optional startup probe, off by default. Enable it with `global.startup.enabled: true` if the liveness probe restarts your validator while it is still starting. The default budget is 30 checks, 10 seconds apart (5 minutes).

Chart `0.8.0` added `ghost.enabled`, `vao.enabled`, `vao.rpcUrl` and `vao.ethConfig`. Leave them unset unless the Chronicle team asks you to change them: both deployments keep running, and the `ghost-vao` deployment keeps using `ghost.rpcUrl` and `ghost.ethConfig`.

App `0.81.0` has no built-in fallback configuration. At start it reads the on-chain config registry through your Ethereum RPC (`ghost.rpcUrl`) and downloads its configuration from public IPFS gateways over HTTPS, so both must be reachable from the node. If you load your own configuration with `-c ipfs://...`, the URL must end with `?checksum=0x<keccak256 of the file>`. Some metrics changed: `musig_session_count` is now `chronicle_musig_session_count` without the `coordinator` label, `musig_session_suppressed_total` is now `chronicle_musig_session_rejected_total` with different `reason` values, `musig_session_limit` was removed, and the WASM module memory gauges (`chronicle_wasm_module_mallocs`, `_max_alloc`, `_total_alloc` and `_uptime_seconds`) were replaced by new `chronicle_wasm_module_*` metrics. Update any alerts and dashboards built on them.
:::

:::warning
**Do not use `--reuse-values`.** When upgrading an existing release, always pass your values file with `-f`. `--reuse-values` keeps the defaults of the chart you are upgrading from, and with chart `0.8.x` Helm then reports a successful upgrade while it deletes both validator deployments and their services. If that happened, run `helm rollback <release> -n <namespace>` straight away to return to the previous revision. If your Services use cloud load balancers, the recreated Services can come back with new external addresses, so update `CFG_LIBP2P_EXTERNAL_ADDR`, or the DNS record it points to, to match.
:::

:::warning
**Upgrading from a chart older than `0.6.0`**: As of ChartVersion `0.6.0`, the `tor-controller` and its associated CRDs have been removed from the chart. The chart upgrade will automatically remove tor-related pods, services, and secrets that were previously managed by Helm. After upgrading, remove any remaining tor resources manually:

```bash
# Remove the onionservice resource (if present)
kubectl delete onionservice ghost -n $FEED_NAME --ignore-not-found

# If the tor-controller namespace was deployed, remove it
kubectl delete namespace tor-controller-system --ignore-not-found

# Remove all CRD's IF NOT USED BY OTHER APPS
kubectl delete -f https://raw.githubusercontent.com/chronicleprotocol/charts/validator-0.3.24/charts/validator/crds/tor-controller.yaml --ignore-not-found
```
:::

Sample config:

```yaml
global:
  logLevel: "warn"

ghost:
  ethConfig:
    ethFrom:
      existingSecret: '<somesecret>'
      key: "ethFrom"
    ethKeys:
      existingSecret: '<somesecret>'
      key: "ethKeyStore"
    ethPass:
      existingSecret: '<somesecret>'
      key: "ethPass"

  ethRpcUrl: "https://MY_L1_RPC_URL"

  rpcUrl: "https://MY_L1_RPC_URL"

  env:
    normal:
      CFG_LIBP2P_EXTERNAL_ADDR: '/ip4/1.2.3.4' # public/reachable ip address of node. If DNS hostname set to `/dns/my.validator.com`

vao:
  env:
    normal:
      CFG_LIBP2P_EXTERNAL_ADDR: '/ip4/1.2.3.4' # public/reachable ip address of node. If DNS hostname set to `/dns/my.validator.com`
```
<br/>

### Requirements

* Kubernetes Cluster +v1.24
  * Validated on the following flavors:
    * [k3s](https://docs.k3s.io/installation)
    * [AWS EKS](https://aws.amazon.com/eks/)
    * Other stable versions of kubernetes should work
* Whitelisted Feed address
* [Helm v3](https://helm.sh/docs/intro/install/)
* [Kubectl](https://kubernetes.io/docs/tasks/tools/)

#### EOA Keys

You will need to generate a new encrypted keystore with Ethereum address matching a specific first byte identifier.

Please look at the script [here](https://github.com/chronicleprotocol/scripts/blob/47ad1617ae4a13195ee331fd25619a359a80f5b7/feeds/keystore-generator.sh), which will help you do this


#### Create Namespace

We advise running a feed in its own dedicated namespace:

```bash
kubectl create ns my-feed-namespace
```

#### Prep Secrets

We can create secrets that will be used by the validator pod in the feed as below:

```bash
kubectl create secret generic somesecretname-eth-keys \
  --from-file=ethKeyStore=ethkeystore.json \
  --from-literal=ethFrom=${ETH_FROM_ADDRESS} \
  --from-literal=ethPass="" \
  --namespace my-feed-namespace
```

### Installation

Add Chronicle helm chart repository:


```bash
helm repo add chronicle https://chronicleprotocol.github.io/charts/
```

Update your helm repository:

```bash
helm repo update chronicle
```

Create a values.yaml file as shown below, with the reference to the secrets created in the previous steps:

```bash
global:
  logLevel: info
ghost:
  ethConfig:
    ethFrom:
      existingSecret: 'somesecretname-eth-keys'
      key: "ethFrom"
    ethKeys:
      existingSecret: 'somesecretname-eth-keys'
      key: "ethKeyStore"
    ethPass:
      existingSecret: 'somesecretname-eth-keys'
      key: "ethPass"

  # not read by the chart, you can keep or remove it
  ethRpcUrl: "https://my.eth.rpc"
  # Ethereum mainnet RPC: the validator reads its config registry on Ethereum mainnet through this URL
  rpcUrl: "https://my.eth.rpc"

  env:
    normal:
      # please place your nodes actual public ip address here
      CFG_LIBP2P_EXTERNAL_ADDR: '/ip4/1.2.3.4'
      # if using a LoadBalancer that has DNS:
      # CFG_LIBP2P_EXTERNAL_ADDR: '/dns/my.hostname.xyz'
vao:
  env:
    normal:
      # please place your nodes actual public ip address here
      CFG_LIBP2P_EXTERNAL_ADDR: '/ip4/1.2.3.4'
      # if using a LoadBalancer that has DNS:
      # CFG_LIBP2P_EXTERNAL_ADDR: '/dns/my.hostname.xyz'
```

Then install the helm release using this values file:

```bash
helm install my-feed-name -f path/to/values.yaml chronicle/validator --namespace my-feed-namespace --version 0.8.2
```

You can do a [dry-run](https://helm.sh/docs/chart\_template\_guide/debugging/) by passing `--debug` and `--dry-run` to the helm command. This is useful if you want to inspect the resources before deploying them to the cluster

#### View all resources created in the namespace

```bash
kubectl get pods,deployment,service,secrets -n my-feed-namespace
NAME                                   READY   STATUS    RESTARTS   AGE
pod/ghost-5c4cfb47bf-wvsvf             1/1     Running   0          14s
pod/ghost-vao-79d77454c7-l5qch         1/1     Running   0          14s

NAME                              READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/ghost             1/1     1            1           14s
deployment.apps/ghost-vao         1/1     1            1           14s

NAME                            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)             AGE
service/ghost                   ClusterIP   10.43.109.192   <none>        8000/TCP,8080/TCP   14s
service/ghost-vao               ClusterIP   10.43.44.21     <none>        8001/TCP            14s
service/kubernetes              ClusterIP   10.43.0.1       <none>        443/TCP             287d

NAME                                        TYPE                 DATA   AGE
secret/somesecretname-eth-keys              Opaque               3      30s
secret/sh.helm.release.v1.my-validator.v1   helm.sh/release.v1   1      14s
```

#### View pod logs:

```bash
kubectl logs -n my-feed-namespace deployment/ghost
kubectl logs -n my-feed-namespace deployment/ghost-vao
```

You can view the logs the pods to verify no errors:

```bash
kubectl logs deployments/ghost --namespace my-feed-namespace        
time="2023-08-30T13:47:15Z" level=info msg="Ethereum Key" address=0x3fe0e49b5daa14f4ddc60e296270cedd702ce76c name=default tag=CONFIG_ETHEREUM
time="2023-08-30T13:47:15Z" level=info msg="Ethereum Client" name=default tag=CONFIG_ETHEREUM url="https://eth.public-rpc.com"
time="2023-08-30T13:47:15Z" level=info msg="Ethereum Client" name=ethereum tag=CONFIG_ETHEREUM url="https://eth.public-rpc.com"
time="2023-08-30T13:47:15Z" level=info msg=Feed address=0x0....................................... tag=LIBP2P
time="2023-08-30T13:47:15Z" level=info msg=Feed address=0x5....................................... tag=LIBP2P
time="2023-08-30T13:47:15Z" level=info msg=Feed address=0x7....................................... tag=LIBP2P
time="2023-08-30T13:47:15Z" level=info msg=Feed address=0xc....................................... tag=LIBP2P
time="2023-08-30T13:47:15Z" level=info msg=Feed address=0x....................................... tag=LIBP2P
time="2023-08-30T13:47:15Z" level=info msg=Bootstrap address=/dns/spire-bootstrap1.domain.com/tcp/8000/p2p/12D111222333aaaaabbbbbccccdddddeee tag=LIBP2P
time="2023-08-30T13:47:16Z" level=debug msg=Call duration=861.851113ms method=eth_call name="https://eth.public-rpc.com" tag=RPCSPLITTER

```

:::warning
If you encounter any issues please refer to the [Trouble Shooting](troubleshooting) docs
:::
