---
sidebar_position: 1
description: Running a Chronicle validator using k3s.
keywords: [k3s, Chronicle validator]
---


# Quickstart

:::info

Chronicle operates a distributed network of validators run by reputable projects in the space, including MakerDAO/Sky, Etherscan, Gnosis, Bitcoin Suisse, and others. This structure reinforces both security and decentralization, setting Chronicle apart from other oracle solutions.

**Note: Running a validator is a permissioned process.** This documentation is intended for projects that have already been approved to run a validator.
:::

A single script installation from baremetal to running validator, using k3s.

### Helm Chart details:

![Dynamic YAML Badge](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fchronicleprotocol.github.io%2Fcharts%2Findex.yaml&query=%24.entries.validator%5B0%5D.version&label=Validator%20ChartVersion&color=green)

<div class="artifacthub-widget" data-url="https://artifacthub.io/packages/helm/chronicle/validator" data-theme="light" data-header="true" data-stars="true" data-responsive="true"><blockquote><p lang="en" dir="ltr"><b>validator</b>: A Helm chart for deploying Chronicle Validator on Kubernetes</p>&mdash; Open in <a href="https://artifacthub.io/packages/helm/chronicle/validator">Artifact Hub</a></blockquote></div><script async src="https://artifacthub.io/artifacthub-widget.js"></script>

<br/>


This documentation covers how to run a validator as part of the Chronicle Protocol oracle network. Running a validator is a great way to contribute to the network.

Oracles are used to bring real-world data to smart contracts. By running a validator, you are helping to make smart contracts more powerful and versatile.

This will run a complete end-to-end installation required for running a Chronicle Validator.

It will attempt to install:

* [k3s](https://docs.k3s.io/installation)
* [Helm v3](https://helm.sh/docs/intro/install/)
* Generate `generated-values.yaml` needed to install the [`chronicle/validator`](https://github.com/chronicleprotocol/charts/tree/main/charts/validator) helm chart
* A tor daemon will be deployed using a [tor-controller](https://github.com/chronicleprotocol/charts/blob/main/charts/validator/crds/tor-controller.yaml), which install some custom resource definitions. This is a requirement for the `WEB_API` transport layer which sends validator messages over tor networks. 


## Requirements:

* Ubuntu 22.04 / Ubuntu 23.04 / Ubuntu 24.04
* 2Gb RAM
* 20Gb storage
* Server needs to be deployed into a public subnet (ie have a public IP)
* [​](https://docs.k3s.io/installation/requirements#inbound-rules-for-k3s-server-nodes)At **LEAST** ports the following ports must be accessible from the internet:

| Protocol | Port | Description |
|----------|------|----------------|
| TCP     | 6443  | K3s supervisor and Kubernetes API Server |
| TCP     | 8000  | chronicle/ghost |
| TCP     | 8001  | chronicle/ghost-vao |
| UDP     | 8472  | Required for Flannel VXLAN |

* Optional ports that need to be open:

| Protocol | Port | Description |
|----------|------|----------------|
| TCP     | 10250 | Kubelet metrics |
| SSH     | 22    | SSH access to the host |

:::caution
This installation process assumes you have a fresh bare-bones ubuntu instance/VPS. If you need simple VPS hosting, we suggest using a provider like [Digital Ocean](https://digitalocean.com/), and spinning up a droplet, or [AWS EC2](https://aws.amazon.com/pm/ec2/) instance provided its in a public subnet. [Linode](https://www.vultr.com/), [Vultr](https://www.vultr.com/), [OVH](https://www.ovhcloud.com/en/) etc are also great providers.
:::

***

## Deploy using `install.sh`

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

- [https://drpc.org](https://drpc.org/)
- [https://www.nodies.app](https://www.nodies.app)
- [https://www.grove.city](https://www.grove.city)
- [https://blastapi.io](https://blastapi.io)
- [https://ankr.com](https://ankr.com)
- [https://www.dwellir.com/](https://www.dwellir.com/)z


#### Some DIY approaches:

- [https://dappnode.com/](https://dappnode.com/)
- [ethpandaops/ethereum](https://github.com/ethpandaops/ethereum-helm-charts/tree/master/charts/ethereum-node) (helm chart, requires beacon)
- [chronicle/ethereum](https://github.com/chronicleprotocol/charts/tree/main/charts/ethereum) (helm chart, requires [beacon](https://github.com/chronicleprotocol/charts/tree/main/charts/beacons))

* this list is not exhaustive, and Chronicle is in no way affiliated with any managed providers, these are just suggestions.

You can provide these variables with `.env` as well Take a look at the `.env` section. The installer will create kubernetes secrets that are used in the helm release and feed services.

### Retrieve the installation script and make it executable

First, ssh to the server:

```ssh 
user@<myhostip>
```

Download the install bash script:

```bash
cd /tmp
wget -N https://raw.githubusercontent.com/chronicleprotocol/scripts/main/feeds/k3s-install/install.sh 
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
su - <username>
ubuntu@local:/tmp$ ./install.sh
```

Complete output from the installer should look something like below (some bloat has been omitted for brevity/legibility):

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
.
.
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
[INFO]:..........generate helm values file..........
You need to install the helm chart with the following command:
-------------------------------------------------------------------------------------------------------------------------------
|   helm install "demo" -f "/home/ubuntu/demo/generated-values.yaml"  chronicle/validator --namespace "demo"       |
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

Once the installation is completed, you can retrieve your tor onion address using this command:

```bash
kubectl get onion -n $NAME_SPACE
```
where `$NAME_SPACE` is the namespace where you deployed your validator in.

> Please provide the `ETH_FROM` and `TOR onion` address to the Chronicle team so it can be whitelisted to receive `WEB_API` traffic.

:::tip
The install script can be run multiple times with the same values. It will attempt to run `helm upgrade <feedname> -n <feedname> chronicle/validator` on your feed release, with any updated input variables. **Note**: it will delete secrets in an existing namespace, and recreate them as, secrets are generally immutable
:::

### Verify that the helm release has been successful:

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
service/ghost                                  LoadBalancer        10.43.181.34         64.46.13.31          8000:31501/TCP,8080:30746/TCP        2m
service/ghost-metrics                          ClusterIP           10.43.21.230         <none>               9090/TCP                             2m
service/ghost-metrics-vao                      ClusterIP           10.43.23.37          <none>               9090/TCP                             2m
service/ghost-socks-tor-svc                    ClusterIP           10.43.87.120         <none>               9050/TCP                             2m
service/ghost-tor-metrics-svc                  ClusterIP           10.43.142.233        <none>               9035/TCP                             2m
service/ghost-tor-svc                          ClusterIP           10.43.194.155        <none>               8888/TCP                             2m
service/ghost-vao                              LoadBalancer        10.43.1.126          64.46.13.31          8001:31468/TCP                       2m

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

Make sure that the `EXTERNAL-IP` shown for the `ghost` service, matches your server's IP address.

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
helm repo add chronicle https://chronicleprotocol.github.io/charts/
helm repo update
```

```bash
export $VALIDATOR_NAME
ubuntu@local:/tmp$ helm repo list
NAME     	URL                                        
chronicle	https://chronicleprotocol.github.io/charts/

helm install $VALIDATOR_NAME -f /home/chronicle/$VALIDATOR_NAME/generated-values.yaml -n $VALIDATOR_NAME chronicle/validator --version 0.4.3
```

the installer will create `generated-values.yaml` which contains the configuration needed to deploy the helm feed. you can inspect the file, located in the `$HOME/$VALIDATOR_NAME`directory. Or you can create your own `values.yaml` file populated with config as show below:

```bash
global:
  logLevel: "debug"

ghost:
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
  rpcUrl: "https://eth.llamarpc.com"

vao:
  env:
    normal:
      CFG_LIBP2P_EXTERNAL_ADDR: '/ip4/64.46.13.31'

```

You can view all values available for the [validator chart](https://github.com/chronicleprotocol/charts/blob/main/charts/validator/README.md#values), however the values provided with the installer are enough to get you going.

A useful value to add is `.Values.global.logLevel`as show above. setting `logLevel: debug`will provide more verbose logging and can help you identify issues with the services. Its advised to run the default values (`warning`) once you have your feed stable. Acceptable values are `debug, info, warning, error`

With a valid `values.yaml` file created, you should be able to install a feed:

```bash
helm install $VALIDATOR_NAME \
  --namespace $VALIDATOR_NAME \
  --create-namespace \
  -f path/to/values.yaml \
 chronicle/validator \
 --version 0.4.3
```

or to upgrade an existing helm release:

```bash
helm upgrade $VALIDATOR_NAME \
  --namespace $VALIDATOR_NAME \
  -f path/to/values.yaml \
 chronicle/validator \
 --version 0.4.3
```

:::tip
you can perform a `dry-run` by passing `--debug --dry-run` to the `helm install`` `` ``/ ``helm upgrade`command. This will show you all resources that will be created or modified, and can be useful for catching issues before deploying.
:::

:::warning
If you encounter any issues please refer to the [Trouble Shooting](troubleshooting) docs
:::