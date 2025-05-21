# Running a challenger in kubernetes

<div class="artifacthub-widget" data-url="https://artifacthub.io/packages/helm/chronicle/challenger" data-theme="dark" data-header="true" data-stars="true" data-responsive="true"><blockquote><p lang="en" dir="ltr"><b>challenger</b>: A Helm chart for deploying the OpPoke Challenger Bot (go and rust) in Kubernetes</p>&mdash; Open in <a href="https://artifacthub.io/packages/helm/chronicle/challenger">Artifact Hub</a></blockquote></div><script async src="https://artifacthub.io/artifacthub-widget.js"></script>

---

You can run a Chronicle Challenger Bot to help secure the price messages our validators emit. A Challenger searches for opPoked events for ScribeOptimistic contract. It Verifies poke schnorr signature and challenges it, if it's invalid.

#### Repos:
Challenger Implementations:
- [chronicleprotocol/challenger](https://github.com/chronicleprotocol/challenger)
- [chronicleprotocol/challenger-rs](https://github.com/chronicleprotocol/challenger-rs)

Challenger helm chart:
- [challenger helm chart](https://github.com/chronicleprotocol/charts/blob/main/charts/challenger/)

## Requirements
- A Kubernetes cluster (Managed cluster like EKS, GKE, AKS, or something like K3s, K0s, kind, etc.)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [helm](https://helm.sh/)
- Foundry [cast](https://book.getfoundry.sh/cast/)
- 5 minutes of your time


## Create a new EOA/Wallet

First, create an Ethereum key. Using Foundry's `cast` can be done like this:

```
cast wallet new -p .
Enter secret:
Created new encrypted keystore file: /path/to/dir/59b09efc-752f-48a3-a2e3-01e172936ef7
Address: 0x985CFfB504fCDcBe3676a0f5E7E9B52F27be3989
```

## Prep the kubernetes secret

Take note of the encryption password you used when creating the keystore, as it will be needed for this next step:


```
kubectl create secret generic my-eth-keys \
--from-file=ethKeyStore=/path/to/dir/59b09efc-752f-48a3-a2e3-01e172936ef7 \
--from-literal=ethFrom=0x985CFfB504fCDcBe3676a0f5E7E9B52F27be3989 \
--from-literal=ethPass=<PASSWORD>
```

You will now have a kuberenetes secret called `my-eth-keys`. this secret will have `ethKeyStore`, `ethFrom` and `ethPass` that will be referenced when installing the challenger helm chart.

## Installing the Challenger

The challenger has two different implemantations that can be run, in Go and Rust. Challengers all need a valid ethereum rpc node, and optionally a flashbots/mev protected rpc for submitting transactions to a private mempool.


You can view the [default values](https://github.com/chronicleprotocol/charts/blob/main/charts/challenger/values.yaml) to see what the helm chart expects.

Examples of minimal values needed can be viewed [here](https://github.com/chronicleprotocol/charts/tree/main/charts/challenger/ci)

You will want to create a values file containg your challenger bot's config like this:

#### file: values.yaml

```
# -- [REQUIRED] can be `go` ro `rs`, default `go`
implementation: rs

# -- [REQUIRED]: you need a valid ethereum rpc node
ethRpcUrl: "https://my-eth-rpc-node:8551"

# -- [OPTIONAL]: provide an MEV rpc endpoint for private txs 
flashbotsRpcUrl: "https://rpc.flashbots.net/fast"

# -- Provide a list of oracle contract addresses to monitor.
  # Chronicle_ETH_USD_3
  - 0x46ef0071b1E2fF6B42d36e5A177EA43Ae5917f4E
  # Chronicle_FOO_BAR_1
  - 0x1234.......

# -- Reference the k8s secret/s containing your eoa keystore, and passphrase 
ethConfig:
  ethKeys:
    existingSecret: "my-eth-keys"
    key: "ethKeyStore"
  ethPass:
    existingSecret: "my-eth-keys"
    key: "ethPass"
  # -- OR you can supply only ETH private key:
  # ethPrivateKey:
  #   existingSecret: "eth-private-key"
  #   key: "ethPrivateKey"
```

We can now install the challenger bot:

Add the chronicle helm chart repo:

```
helm repo add chronicle https://chronicleprotocol.github.io/charts/

```

update the help repos:

```
helm repo update
```

Finally, install the challenger:

```
helm install my-challenger -f path/to/values.yaml chronicle/challenger --version 0.1.0
```

Verify that the challenger is running without errors:

```
kubectl get pods
```
Then get the logs for the challenger pod:

```
kubectl logs rs-challenger-6645776c5-c4mpg
[2025-05-20T11:14:27Z INFO  challenger] Using RPC URL: "http://my-eth:8554"
[2025-05-20T11:14:27Z DEBUG challenger::wallet] Using Keystore file from `"/keystore/keystore.json"` and password from file
[2025-05-20T11:14:27Z INFO  challenger] Using 0x0833fc5f5944a307fa210535fbd355763b8cad47 for signing transactions.
[2025-05-20T11:14:27Z INFO  challenger] Starting Prometheus metrics collector on port: 9090
[2025-05-20T11:14:27Z DEBUG scribe::event_processor] ScribeEventsProcessor[0x46ef0071b1e2ff6b42d36e5a177ea43ae5917f4e] Starting new contract handler
[2025-05-20T11:14:27Z INFO  challenger] Starting events poller
[2025-05-20T11:14:27Z INFO  scribe::events_poller] Poller: Starting polling events from RPC...
[2025-05-20T11:14:27Z INFO  challenger] Starting metrics collector
[2025-05-20T11:14:28Z DEBUG scribe::event_processor] ScribeEventsProcessor[0x46ef0071b1e2ff6b42d36e5a177ea43ae5917f4e] Challenge period fetched: 600
```