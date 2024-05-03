---
sidebar_position: 2
---
# Existing K8s
![Dynamic YAML Badge](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fchronicleprotocol.github.io%2Fcharts%2Findex.yaml&query=%24.entries.validator%5B0%5D.version&label=Validator%20ChartVersion&color=green)

Helm Chart details:
<div class="artifacthub-widget" data-url="https://artifacthub.io/packages/helm/validator/validator" data-theme="light" data-header="true" data-stars="true" data-responsive="true"><blockquote><p lang="en" dir="ltr"><b>validator</b>: A Helm chart for deploying Chronicle Validator on Kubernetes</p>&mdash; Open in <a href="https://artifacthub.io/packages/helm/validator/validator">Artifact Hub</a></blockquote></div><script async src="https://artifacthub.io/artifacthub-widget.js"></script>

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

Obtain the keeman binary:

```
wget https://github.com/chronicleprotocol/keeman/releases/download/v0.4.1/keeman_0.4.1_linux_amd64.tar.gz -O - | tar -xz
```


Generate a seed with keeman, eg:


```bash
SEED_PHRASE=$(./keeman generate -b 256 | tail)
```

Derive onion address and tor public/secret keys with keeman, using your seed phrase:


```bash
echo $SEED_PHRASE | ./keeman derive -f onion > torkeys.json
2023/08/30 13:02:33 m/44'/60'/0'/0/0
2023/08/30 13:02:33 0x3FE0e49b5dAa14F4dDc60E296270cedD702cE76C

```

Derive ETH address and keystore with keeman, using your seed phrase (ignore this step if you are using an existing ETH keystore):


```bash
echo $SEED_PHRASE | ./keeman derive -f eth > ethkeystore.json
2023/08/30 14:28:07 m/44'/60'/0'/0/0
2023/08/30 14:28:07 0x3FE0e49b5dAa14F4dDc60E296270cedD702cE76C

```

Take note of the Eth address printed to stderr, and your TOR hostname provided in torkeys.json :point\_up: . We will need that in a bit


```bash
export ETH_FROM_ADDRESS='0x3FE0e49b5dAa14F4dDc60E296270cedD702cE76C'
jq -r '.hostname' < torkeys.json)
somerealyuniqueandlongaddressforyourfeed.onion

```

#### Create Namespace

We advise running a feed in its own dedicated namespace:


```bash
kubectl create ns my-feed-namespace
```

#### Prep Secrets

Ghost / Musig share the ETH credentials We can create secrets that will be used by both pods in the feed as below:


```bash
kubectl create secret generic somesecretname-eth-keys \
  --from-file=ethKeyStore=ethkeystore.json \
  --from-literal=ethFrom=${ETH_FROM_ADDRESS} \
  --from-literal=ethPass="" \
  --namespace my-feed-namespace
```


```bash
kubectl create secret generic somesecretname-tor-keys \
  --from-literal=hostname=$(cat torkeys.json | jq -r '.hostname') \
  --from-literal=hs_ed25519_public_key=$(cat torkeys.json | jq -r '.public_key') \
  --from-literal=hs_ed25519_secret_key=$(cat torkeys.json | jq -r '.secret_key') \
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

  env:
    normal:
      # please place your nodes actual public ip addresse here
      CFG_LIBP2P_EXTERNAL_ADDR: '/ip4/1.2.3.4'

  # default RPC client (target chain, eth mainnet or sepolia eg)
  rpcUrl: "https://my.eth.rpc"

  env:
    normal:
      # please place your nodes actual public ip addresse here
      CFG_LIBP2P_EXTERNAL_ADDR: "/ip4/${NODE_EXT_IP}"
      # please configure this with your feeds onion address
      CFG_WEB_URL: "somerealyuniqueandlongaddressforyourfeed.onion"

tor-proxy:
    torConfig:
      existingSecret: 'somesecretname-tor-keys'

```

Then install the helm release using this values file:


```bash
helm install my-feed-name -f path/to/values.yaml chronicle/validator --namespace my-feed-namespace --version 0.3.1
```

You can do a [dry-run](https://helm.sh/docs/chart\_template\_guide/debugging/) by passing `--debug` and `--dry-run` to the helm command. This is useful if you want to inspect the resources before deploying them to the cluster


```bash
kubectl get pods
NAME                         READY   STATUS    RESTARTS   AGE
musig-76dbf9bb9f-r48g9       1/1     Running   0          4m36s
ghost-559c8dbc45-s464f       1/1     Running   0          4m36s
tor-proxy-6b8987454f-rhm59   1/1     Running   0          4m36s

```

You can view the logs the pods to verify no errors:


```bash
kubectl logs deployments/ghost          
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
