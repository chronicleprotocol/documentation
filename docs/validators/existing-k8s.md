---
sidebar_position: 2
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

![Dynamic YAML Badge](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fchronicleprotocol.github.io%2Fcharts%2Findex.yaml&query=%24.entries.validator%5B0%5D.version&label=Validator%20ChartVersion&color=green)

<div class="artifacthub-widget" data-url="https://artifacthub.io/packages/helm/chronicle/validator" data-theme="light" data-header="true" data-stars="true" data-responsive="true"><blockquote><p lang="en" dir="ltr"><b>validator</b>: A Helm chart for deploying Chronicle Validator on Kubernetes</p>&mdash; Open in <a href="https://artifacthub.io/packages/helm/chronicle/validator">Artifact Hub</a></blockquote></div><script async src="https://artifacthub.io/artifacthub-widget.js"></script>

## Notable changes include:
- Starting from Chart Version 0.3.6, tor is deployed using the `tor-controller` operator, which installs some [custom resource definitions](https://github.com/chronicleprotocol/charts/blob/main/charts/validator/crds/tor-controller.yaml). The controller will create a new onion key, which will be persisted as a secret. Please delete your previous secrets containing the tor keys, as they won't be needed. Retrieve the Ghost onion address using `kubectl get onion -n <namespace>` and notify the Chronicle team of your ETH address and the new Ghost onion address.

:::warning
The validator `ChartVersion: 0.4.4` introduces a new pod and service, named `vao`. This Service will expose its service via `LoadBalancer` on port __8001__. Please make sure this port is open!
Please make sure you update your `values.yaml` or `generated_values.yaml` to include `.Values.vao`.

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
:::
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

Please look at the script [here](https://github.com/chronicleprotocol/scripts/blob/main/feeds/keystore-generator.sh), which will help you do this


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

  # ethereum RPC client (should always be ETH mainnet)
  ethRpcUrl: "https://my.eth.rpc"
  # default RPC client (target chain, eth mainnet or sepolia eg)
  rpcUrl: "https://my.eth.rpc"

  env:
    normal:
      # please place your nodes actual public ip address here
      CFG_LIBP2P_EXTERNAL_ADDR: '/ip4/1.2.3.4'
      # if using a LoadBalancer that has DNS:
      # CFG_LIBP2P_EXTERNL_ADDR" '/dns/my.hostname.xyz`
vao:
  env:
    normal:
      # please place your nodes actual public ip address here
      CFG_LIBP2P_EXTERNAL_ADDR: '/ip4/1.2.3.4'
      # if using a LoadBalancer that has DNS:
      # CFG_LIBP2P_EXTERNL_ADDR" '/dns/my.hostname.xyz`
```

Then install the helm release using this values file:

```bash
helm install my-feed-name -f path/to/values.yaml chronicle/validator --namespace my-feed-namespace --version 0.4.4
```

You can do a [dry-run](https://helm.sh/docs/chart\_template\_guide/debugging/) by passing `--debug` and `--dry-run` to the helm command. This is useful if you want to inspect the resources before deploying them to the cluster

#### View all resources created in the namespace

```bash
kubectl  get pods,deployment,service,secrets,onion -n demo
NAME                                                    READY   STATUS             RESTARTS        AGE
pod/ghost-688b6864b5-w92sd                              1/1     Running            0               2m
pod/ghost-socks-tor-daemon-549c447f9c-75c26             1/1     Running            0               2m
pod/ghost-tor-daemon-c648899bb-67rnd                    1/1     Running            0               2m
pod/ghost-vao-f568684d9-74nb5                           1/1     Running            0               2m

NAME                                                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/ghost                                   1/1     1            1           2m
deployment.apps/ghost-socks-tor-daemon                  1/1     1            1           2m
deployment.apps/ghost-tor-daemon                        1/1     1            1           2m
deployment.apps/ghost-vao                               1/1     1            1           2m

NAME                                           TYPE                CLUSTER-IP           EXTERNAL-IP          PORT(S)                              AGE
service/ghost                                  LoadBalancer        10.43.181.34         192.168.10.27        8000:31501/TCP,8080:30746/TCP        2m
service/ghost-metrics                          ClusterIP           10.43.21.230         <none>               9090/TCP                             2m
service/ghost-metrics-vao                      ClusterIP           10.43.23.37          <none>               9090/TCP                             2m
service/ghost-socks-tor-svc                    ClusterIP           10.43.87.120         <none>               9050/TCP                             2m
service/ghost-tor-metrics-svc                  ClusterIP           10.43.142.233        <none>               9035/TCP                             2m
service/ghost-tor-svc                          ClusterIP           10.43.194.155        <none>               8888/TCP                             2m
service/ghost-vao                              LoadBalancer        10.43.1.126          192.168.10.27        8001:31468/TCP                       2m

NAME                                           TYPE                                           DATA   AGE
secret/ghost-eth-keys                          Opaque                                         3      2m
secret/ghost-socks-tor-secret                  tor.k8s.torproject.org/control-password        1      2m
secret/ghost-tor-auth                          tor.k8s.torproject.org/authorized-clients-v3   0      2m
secret/ghost-tor-secret                        tor.k8s.torproject.org/onion-v3                5      2m
secret/sh.helm.release.v1.ghost.v1             helm.sh/release.v1                             1      2m


NAME                                              HOSTNAME                      AGE
onionservice.tor.k8s.torproject.org/ghost         mylongtoronionaddress.onion   28m
```

#### View pod logs:

```bash
kubectl logs -n demo deployment/ghost
kubectl logs -n demo deployment/ghost-vao
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
time="2023-08-30T13:47:15Z" level=info msg="SOCKS5 proxy" address="tor-proxy:9050" tag=CONFIG_WEB_API
time="2023-08-30T13:47:16Z" level=debug msg=Call duration=861.851113ms method=eth_call name="https://eth.public-rpc.com" tag=RPCSPLITTER
time="2023-08-30T13:47:16Z" level=info msg=Consumer address="[scubbed].onion:8888" tag=CONFIG_WEB_API
time="2023-08-30T13:47:16Z" level=info msg=Consumer address="[scrubbed].onion:8888" tag=CONFIG_WEB_API

```

:::warning
If you encounter any issues please refer to the [Trouble Shooting](troubleshooting) docs
:::
