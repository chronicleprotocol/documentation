---
sidebar_position: 1
---

# Quickstart

This installation will run a complete end-to-end installation required for Chronicle Feeds.

It will attempt to install:

* [k3s](https://docs.k3s.io/installation)
* [Helm v3](https://helm.sh/docs/intro/install/)
* [chronicleprotocol/keeman](https://github.com/chronicleprotocol/keeman) - needed to generate your feeds `.onion` address and keys
* Generate `generated-values.yaml` needed to install the [`chronicle/feed`](https://github.com/chronicleprotocol/charts/tree/main/charts/feed) helm chart

## Requirements:

* Ubuntu 22.04 / Ubuntu 23.04
* 2Gb RAM
* 20Gb storage
* Server needs to be deployed into a public subnet (ie have a public IP)
* [​](https://docs.k3s.io/installation/requirements#inbound-rules-for-k3s-server-nodes)At **LEAST** ports the following ports must be accessible from the internet:

| Protocol | Port | Description |
|----------|------|----------------|
| TCP     | 6443  | K3s supervisor and Kubernetes API Server |
| TCP     | 8000  | chronicle/ghost |
| TCP     | 8001  | chronicle/musig |
| UDP     | 8472  | Required for Flannel VXLAN |
| TCP     | 10250 | Kubelet metrics |
| SSH     | 22    | SSH access to the host |

:::caution
This installation process assumes you have a fresh bare-bones ubuntu instance/VPS. If you need simple VPS hosting, we suggest using a provider like [Digital Ocean](https://digitalocean.com/), and spinning up a droplet, or [AWS EC2](https://aws.amazon.com/pm/ec2/) instance provided its in a public subnet. [Linode](https://www.vultr.com/), [Vultr](https://www.vultr.com/), [OVH](https://www.ovhcloud.com/en/) etc are also great providers.
:::

```ssh user@<myhostip>```

***

## Installing using `install.sh`

The script is interactive and will prompt you for some required information

### Before you start:

You will need to provide the following:

* a feed name (eg `my-feed`)
* the path to your ETH `keystore` file (eg `/path/to/keys/keystore.json` needs to exist on the server)
* the path to your keystore password file (eg `/path/to/password.txt` needs to exist on the server. An empty password file is still needed if wallet is not encrypted. eg `touch password.txt`)
* the corresponding ETH from address (eg `0x123....`)
* An Ethereum Mainnet RPC endpoint (including protocol, eg https://my-eth-rpc.domain.com

:::tip
Managed RPC providers can become costly if they are heavily utilized. We recommend that you use spin up your own dedicated ETH node for cost management.
:::

There are alternative RPC providers that you can use as well which aim to be as decentralized as possible:

- [https://www.nodies.app](https://www.nodies.app/)
- [https://drpc.org](https://drpc.org/)
- [https://ankr.com](https://ankr.com)


#### Some DIY approaches:

- [https://dappnode.com/](https://dappnode.com/)
- [ethpandaops/ethereum](https://github.com/ethpandaops/ethereum-helm-charts/tree/master/charts/ethereum-node) (helm chart, requires beacon)
- [chronicle/ethereum](https://github.com/chronicleprotocol/charts/tree/main/charts/ethereum) (helm chart, requires [beacon](https://github.com/chronicleprotocol/charts/tree/main/charts/beacons))

* this list is not exhaustive, and Chronicle is in no way affiliated with any managed providers, these are just suggestions.

You can provide these variables with `.env` as well Take a look at the `.env` section. The installer will create kubernetes secrets that are used in the helm release and feed services.

### Retrieve the installation script and make it executable

```bash
cd /tmp
wget https://raw.githubusercontent.com/chronicleprotocol/scripts/main/feeds/k3s-install/install.sh 
chmod a+x install.sh
```

This script **must not** be run as root. A user with `sudo` permissions is required. If you execute the script as `root` , you will be prompted if the script should attempt to create a user for you. Follow the prompts if you require a new user.

```bash
root@local:/tmp# ./install.sh 
[INFO]:..........running preflight checks.........
[ERROR]: This script should not be run as root!
Would you like to create a new user to run this script? (y/n)
```

When a user is added to the `sudo` group, it usually needs to log out and log back in for the group changes to take effect.

To resolve this, you can either:

1. Log out and log back in with the new user and then run the script again.
2. Or, you can switch to the new user using `su - <username>` after creating the user, which simulates a login and should recognize the new group assignment.

However, if you are already doing this and still facing the issue, it might be due to the `sudo` command requiring a password and there is no password set for the new user.

### Execute the script

```bash
ubuntu@local:/tmp$ ./install.sh
```

Complete output from the installer should look something like below (some bloat has been omitted for brevity/legibility)\


```bash
ubuntu@local:/tmp$ ./install.sh 
[INFO]:..........running preflight checks.........
[INFO]:..........gather input variables.........
>> Enter feed name (eg: chronicle-feed):
demo
>> Enter your ETH Address (eg: 0x3a...):
0x0000000111112222233333444444555556666677
>> Enter the path to your ETH keystore (eg: /path/to/keystore.json):
/tmp/keystore.json
>> Enter the path to your ETH password file (eg: /path/to/password.txt):
/tmp/password.txt
>> Obtaining the Node External IP...
>> Node External IP is 64.46.13.31
>> Enter your ETH rpc endpoint (eg: https://eth.llamarpc.com):
https://eth.llamarpc.com
[INFO]:..........installing dependencies.........
[INFO]:..........Updating package lists for upgrades and new package installations.........
Get:1 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]
.
.
.                                                                                                                                                                                                                                                                                                                                                                       
Reading package lists... Done
[INFO]:..........Installing jq.........
Reading package lists... Done
.
.
.
[SUCCESS]: jq is now installed !!!
[INFO]:..........Installing helm.........
Downloading https://get.helm.sh/helm-v3.12.3-linux-amd64.tar.gz
.
.
.
[SUCCESS]: helm is now installed !!!
[INFO]:..........Installing k3s.........
[INFO]  Finding release for channel stable
[INFO]  Using v1.27.6+k3s1 as release
.
.
.
[INFO]  systemd: Starting k3s
[SUCCESS]: k3s is now installed !!!
[INFO]:..........Installing keeman.........
--2023-09-27 12:07:22--  https://github.com/chronicleprotocol/keeman/releases/download/v0.4.1/keeman_0.4.1_linux_amd64.tar.gz
.
.
.
[SUCCESS]: keeman is now installed !!!
[INFO]:..........gather input variables.........
[INFO]:..........installing k8s chronicle stack..........
[INFO]:..........create namespace demo..........
namespace/demo created
[INFO]:..........create secret with ETH keys..........
secret/demo-eth-keys created
-----------------------------------------------------------------------------------------------------
This is your Feed address:
0x0000000111112222233333444444555556666677
-----------------------------------------------------------------------------------------------------
[INFO]:..........create secret with TOR keys..........
2023/09/27 12:07:26 entropy bit size: 4 * 32 = 128
**[REDACTED OUTPUT]**
2023/09/27 12:07:26 m/44'/60'/0'/0/0
secret/demo-tor-keys created
-----------------------------------------------------------------------------------------------------
This is your .onion address:
myuniquetoronionaddress.onion
-----------------------------------------------------------------------------------------------------
[INFO]:..........generate helm values file..........
You need to install the helm chart with the following command:
-------------------------------------------------------------------------------------------------------------------------------
|   helm install "demo" -f "/home/ubuntu/demo/generated-values.yaml"  chronicle/feed --namespace "demo"       |
-------------------------------------------------------------------------------------------------------------------------------
[INFO]:..........create helm release..........
"chronicle" has been added to your repositories
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "chronicle" chart repository
Update Complete. ⎈Happy Helming!⎈
[INFO]: First attempt at installing feed: demo in namespace: demo.
NAME: demo
LAST DEPLOYED: Wed Sep 27 12:07:29 2023
NAMESPACE: demo
STATUS: deployed
REVISION: 1
NOTES:
1. Get the application URL by running these commands:
  kubectl get pods -n demo
[SUCCESS]: setup complete!
```

The installation script will print out your feeds `.onion` address. Please provide this address to Chronicle so it can be whitelisted to receive WEB\_API traffic.

:::tip
The install script can be run multiple times with the same values. It will attempt to run `helm upgrade <feedname> -n <feedname> chronicle/feed` on your feed release, with any updated input variables. **Note**: it will delete secrets in an existing namespace, and recreate them as, secrets are generally immutable
:::

### Verify that the helm release has been successful:

#### Verify pods are running:

```bash
kubectl get pods -n demo
NAME                         READY   STATUS    RESTARTS   AGE
musig-77949f8d-lf6pr         1/1     Running   0          29s
ghost-fd4689bf7-ffnk9        1/1     Running   0          29s
tor-proxy-55864975f9-2tshw   1/1     Running   0          29s
```

#### View pod logs:

```bash
kubectl logs -n demo deployment/ghost
kubectl logs -n demo deployment/musig
kubectl logs -n demo deployment/tor-proxy
```

#### Verify that the services are created, and show the correct External IP

```bash
kubectl get svc -n demo
NAME         TYPE           CLUSTER-IP     EXTERNAL-IP     PORT(S)                         AGE
tor-proxy    ClusterIP      10.43.235.27   <none>          9050/TCP                        2m
musig        LoadBalancer   10.43.201.18   64.46.13.31    8001:30317/TCP,8080:31473/TCP   2m
ghost        LoadBalancer   10.43.115.5    64.46.13.31    8000:31745/TCP                  2m

```

Make sure that the `EXTERNAL-IP` shown for the `musig` and `ghost` services, matches your server's IP address.

#### You can view the eth secrets, and tor secrets for the newly installed feed as shown:

```bash
kubectl get secrets -n demo
NAME                              TYPE                             DATA   AGE
demo-eth-keys                  Opaque                           3      3m
demo-tor-keys                  Opaque                           3      3m
```

### Install with \`.env\`

The script will look for a `.env` file in the same directory level as `install.sh`. This file can be used to populate the required input values:

```bash
cat .env
# -- Name of the feed (will create a director and helm release based off this name)
# -- NB: this name must be unique across all feeds, and name must be lowercase.
FEED_NAME=myfeedname

# -- ETH address related to ETHPASS and ETH_KEYSTORE
ETH_FROM=0x1234567890123456789012345678901234567890
ETH_PASSWORD=/root/password.txt
ETH_KEYSTORE=/root/keystore.json

# -- HTTP rpc endpoint for ETH mainnet - NB include the protocol (http/https)
ETH_RPC_URL='https://my-eth-rpc.com'

# -- Public IP address of the server (needed for lib2p networking)
# the installer script will attempt to resolve this for you, if you have issues, try setting it manually below to an IP address that will resolve to your server
# NODE_EXT_IP='127.0.0.1'

# -- override the default (warning) logLevel by setting this to one of `debug, info, warning, error`
#LOG_LEVEL=debug
```

If the script fails to find any of these values, it will prompt you for them when running the script.

***

## Installing via helm (manually)

Make sure the `chronicle` helm repository has been added:

```bash
ubuntu@local:/tmp$ helm repo list
NAME     	URL                                        
chronicle	https://chronicleprotocol.github.io/charts/

helm upgrade <feed> -f /home/chronicle/<feed>/generated-values.yaml -n <feed> chronicle/feed
```

Add the helm repo if needed:

```bash
helm repo add chronicle https://chronicleprotocol.github.io/charts/
helm repo update
```

the installer will create `generated-values.yaml` which contains the configuration needed to deploy the helm feed. you can inspect the file, located in the `$HOME/<feed>`directory. Or you can create your own values.yaml file populated with config as show below:

```
ghost:
  logLevel: "debug"
  ethConfig:
    ethFrom:
      existingSecret: 'demo-eth-keys'
      key: "ethFrom"
    ethKeys:
      existingSecret: 'demo-eth-keys'
      key: "ethKeyStore"
    ethPass:
      existingSecret: 'demo-eth-keys'
      key: "ethPass"

  env:
    normal:
      CFG_LIBP2P_EXTERNAL_ADDR: '/ip4/64.46.13.31'

  ethRpcUrl: "https://eth.llamarpc.com"
  ethChainId: 1

  rpcUrl: "https://eth.llamarpc.com"
  chainId: 1

musig:
  logLevel: "debug"
  ethConfig:
    ethFrom:
      existingSecret: 'demo-eth-keys'
      key: "ethFrom"
    ethKeys:
      existingSecret: 'demo-eth-keys'
      key: "ethKeyStore"
    ethPass:
      existingSecret: 'demo-eth-keys'
      key: "ethPass"

  env:
    normal:
      CFG_LIBP2P_EXTERNAL_ADDR: "/ip4/64.46.13.31"
      CFG_WEB_URL: "myuniquetoronionaddress.onion"

  ethRpcUrl: "https://eth.llamarpc.com"
  ethChainId: 1

tor-proxy:
  torConfig:
    existingSecret: 'demo-tor-keys'
```

You can view all values available for the [feed chart](https://github.com/chronicleprotocol/charts/blob/main/charts/feed/README.md#values), however the values provided with the installer are enough to get you going.

A useful value to add is `.Values.{ghost,musig}.logLevel`as show above. setting `logLevel: debug`will provide more verbose logging and can help you identify issues with the services. Its advised to run the default values (`warning`) once you have your feed stable. Acceptable values are `debug, info, warning, error`

With a valid `values.yaml` file created, you should be able to install a feed:

```bash
helm install my-feed-name \
  --namespace my-feed-namespace \
  --create-namespace \
  -f path/to/values.yaml \
 chronicle/feed
```

or to upgrade an existing helm release:

```bash
helm upgrade my-feed-name \
  --namespace my-feed-namespace \
  -f path/to/values.yaml \
 chronicle/feed
```

:::tip
you can perform a `dry-run` by passing `--debug --dry-run` to the `helm install`` `` ``/ ``helm upgrade`command. This will show you all resources that will be created or modified, and can be useful for catching issues before deploying.
:::

## Trouble shooting

### Kubectl / helm commands fail

If you receive an error as show below when trying to invoke `kubectl` or `helm` commands, it is most likely caused by the `KUBECONFIG` variable not being set.

```bash
WARN[0000] Unable to read /etc/rancher/k3s/k3s.yaml, please start server with --write-kubeconfig-mode to modify kube config permissions
error: error loading config file "/etc/rancher/k3s/k3s.yaml": open /etc/rancher/k3s/k3s.yaml: permission denied
```

The installation script attempts to create `$HOME/.kube/config`  and sets this in the `$HOME/.bashrc`

You made need to log out and log back in, to create a new shell terminal session which will contain the correct KUBECONFIG variable, or run `source ~/.bashrc` to reload you shell config, or manually set it with `export KUBECONFIG=~/.kube/config`

NOTE: It is **not** advisable to run kubectl and helm commands as root (or `sudo kubectl ...` or `sudo helm ...`.

The user provided configs are sufficient enough, and interacting with the k3s cluster and its resources.

Make sure that you `$KUBECONFIG` is set to a file that is accessible by your system user with the correct permissions.

You can view the functions responsible for setting kubeconfig [here](https://github.com/chronicleprotocol/scripts/blob/main/feeds/k3s-install/install.sh#L144-L149)

### Debug Bundle

If you need further debugging, please retrieve the container logs, and some base info and provide it to the chronicle team for assistance:

:::tip
Make sure that you set `FEED_NAME` to match your feed in question, and run these commands from the correct user so that `$HOME/$FEED_NAME/generated-values.yaml` resolves to the correct file.
:::

```
export FEED_NAME=<CHANGE_ME>
cd /tmp
kubectl logs deployment/ghost -n $FEED_NAME > ghost.log
kubectl logs deployment/musig -n $FEED_NAME > musig.log
kubectl logs deployment/tor-proxy -n $FEED_NAME > tor-proxy.log
kubectl exec -ti deployments/tor-proxy -n $FEED_NAME -- cat /usr/local/etc/tor/torrc > torrc
kubectl get svc -n --all-namespaces > services.log
kubectl get pods --all-namespaces > all-pods.log
helm list --all-namespaces > all-helm-releases.log
tar czf feed-debug.tar.gz torrc ghost.log musig.log tor-proxy.log services.log all-helm-releases.log all-pods.log $HOME/$FEED_NAME/generated-values.yaml
```

The above commands will get logs for each of the pods running, the state of the services, as well as the generated-values.yaml for your feed, and bundle it into a tarball `feed-debug.tar.gz` (Please change the values / paths accordingly)
