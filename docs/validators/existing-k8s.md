---
sidebar_position: 2
description: Deploying a Chronicle validator into an existing kubernetes cluster.
keywords: [K8s, kubernetes cluster]
---

# Existing K8s

Deploying the validator into an existing kubernetes cluster.

### Helm Chart details:

![Dynamic YAML Badge](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fchronicleprotocol.github.io%2Fcharts%2Findex.yaml&query=%24.entries.validator%5B0%5D.version&label=Validator%20ChartVersion&color=green)

<div class="artifacthub-widget" data-url="https://artifacthub.io/packages/helm/chronicle/validator" data-theme="light" data-header="true" data-stars="true" data-responsive="true"><blockquote><p lang="en" dir="ltr"><b>validator</b>: A Helm chart for deploying Chronicle Validator on Kubernetes</p>&mdash; Open in <a href="https://artifacthub.io/packages/helm/chronicle/validator">Artifact Hub</a></blockquote></div><script async src="https://artifacthub.io/artifacthub-widget.js"></script>

## Notable changes include:

- `musig` is now embedded in the `ghost` deployment, and all `.Values.musig` can be removed from the values.yaml file
- Please remove `.Values.ghost.env.CFG_WEB_URL` from your values, as this will be dynamically referenced in the [Ghost deployment spec](https://github.com/chronicleprotocol/charts/blob/main/charts/validator/templates/deployment.yaml#L87-L91).
- Starting from Chart Version 0.3.6, tor is deployed using the `tor-controller` operator, which installs some [custom resource definitions](https://github.com/chronicleprotocol/charts/blob/main/charts/validator/crds/tor-controller.yaml). The controller will create a new onion key, which will be persisted as a secret. Please delete your previous secrets containing the tor keys, as they won't be needed. Retrieve the Ghost onion address using `kubectl get onion -n <namespace>` and notify the Chronicle team of your ETH address and the new Ghost onion address.

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
* [chronicleprotocol/keeman](https://github.com/chronicleprotocol/keeman)

### Keeman
Keeman is a tool we created, which is used to help create an ethereum keystore. Alternative tools can be used such as [`cast`](https://book.getfoundry.sh/)

Obtain the keeman binary:

```
wget https://github.com/chronicleprotocol/keeman/releases/download/v0.5.0/keeman_0.5.0_linux_amd64.tar.gz -O - | tar -xz
```

Generate a seed with keeman, eg:

```bash
SEED_PHRASE=$(./keeman generate -b 256 | tail)
```

Derive ETH address and keystore with keeman, using your seed phrase (ignore this step if you are using an existing ETH keystore):

```bash
echo $SEED_PHRASE | ./keeman derive -f eth > ethkeystore.json
2023/08/30 14:28:07 m/44'/60'/0'/0/0
2023/08/30 14:28:07 0x3FE0e49b5dAa14F4dDc60E296270cedD702cE76C
```

Take note of the Eth address printed to stderr We will need that in a bit


```bash
export ETH_FROM_ADDRESS='0x3FE0e49b5dAa14F4dDc60E296270cedD702cE76C'
```

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
ghost:
  logLevel: info
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
```

Then install the helm release using this values file:

```bash
helm install my-feed-name -f path/to/values.yaml chronicle/validator --namespace my-feed-namespace --version 0.3.9
```

You can do a [dry-run](https://helm.sh/docs/chart\_template\_guide/debugging/) by passing `--debug` and `--dry-run` to the helm command. This is useful if you want to inspect the resources before deploying them to the cluster

#### View all resources created in the namespace
```bash
kubectl  get pods,deployment,service,secrets,onion -n my-feed-namespace

NAME                                   READY   STATUS    RESTARTS   AGE
pod/ghost-tor-daemon-b77466d7f-flnm7   1/1     Running   0          4m28s
pod/ghost-77b46586d5-fdcgm             1/1     Running   0          4m29s

NAME                               READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/ghost-tor-daemon   1/1     1            1           4m28s
deployment.apps/ghost              1/1     1            1           4m30s

NAME                            TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)                                        AGE
service/ghost-tor-svc           ClusterIP      10.43.197.59   <none>           8888/TCP                                       4m28s
service/ghost-tor-metrics-svc   ClusterIP      10.43.85.148   <none>           9035/TCP                                       4m28s
service/ghost                   LoadBalancer   10.43.21.41    1.2.3.4          8000:31359/TCP,9100:32481/TCP,8080:30963/TCP   4m30s

NAME                                TYPE                                           DATA   AGE
secret/somesecretname-eth-k         Opaque                                         3      5m2s
secret/ghost-tor-auth               tor.k8s.torproject.org/authorized-clients-v3   0      4m29s
secret/ghost-tor-secret             tor.k8s.torproject.org/onion-v3                5      4m29s
secret/sh.helm.release.v1.demo.v1   helm.sh/release.v1                             1      4m30s

NAME                                        HOSTNAME                                                         AGE
onionservice.tor.k8s.torproject.org/ghost   areallylongonaddressescreatedformebythetorcontrollercrd.onion    4m30s
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
