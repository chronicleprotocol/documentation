---
sidebar_position: 3
---
![Dynamic YAML Badge](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fchronicleprotocol.github.io%2Fcharts%2Findex.yaml&query=%24.entries.feed%5B0%5D.version&label=Latest%20Chart&color=green)


# Upgrading a Validator

In order to upgrade a validator to the latest version, we will need to run a couple helm commands.

## TL;DR

```
ssh <SERVER_IP>
su - <FEED_USERNAME>
export FEED_NAME=my-feed
helm repo update
helm upgrade $FEED_NAME -n $FEED_NAME -f $HOME/$FEED_NAME/generated-values.yaml chronicle/feed
```

:::caution
Please use the correct `FEED_USERNAME`, and `FEED_NAME` according to your installation
:::

## Helm Upgrade Process

First, ssh on to your server:

```
ssh <SERVER_IP>
```

Once you're on the host, make sure your you switch to the \`user\` that the feeds were installed with

Eg; assuming your user name is `feed-user` :

```
$ su - feed-user
feed-user@my_feed_host:~$ 
```


Verify that your user can view the k3s cluster resources (eg below assuming the feed is named is `my-feed`:

```
export FEED_NAME=my-feed
```

```
helm list -n $FEED_NAME
NAME     NAMESPACE    	REVISION	UPDATED                                	STATUS  	CHART     	APP VERSION
my-feed	 my-feed	10      	2023-10-12 08:22:16.725518367 +0000 UTC	deployed	feed-0.2.6	2.0.0  
```

If `kubectl/helm` commands fail, please ensure you have `$KUBECONFIG` set correctly. Take a look [here](quickstart#kubectl--helm-commands-fail) for more detail

### Update helm repo

We need to fetch the latest helm chart from the registry:

```
helm repo update
```

### Run  helm upgrade

Now we can update to the latest version.

The latest chart version is:

![Dynamic YAML Badge](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fchronicleprotocol.github.io%2Fcharts%2Findex.yaml&query=%24.entries.feed%5B0%5D.version&label=Latest%20Chart&color=green)

using this version, we can upgrade our validator:

:::danger

Please ensure you ping the helm release to the lastest semver ChartVersion of the feed chart. eg `0.2.7`
The charts released are production ready, and tested thoroughly
:::

```
helm upgrade $FEED_NAME -n $FEED_NAME -f $FEED_NAME/generated-values.yaml chronicle/feed --version 0.2.7
```

You should see output like this:

```
Release "my-feed" has been upgraded. Happy Helming!
NAME: my-feed
LAST DEPLOYED: Thu Oct 12 08:21:03 2023
NAMESPACE: my-feed
STATUS: deployed
REVISION: 9
NOTES:
1. Get the application URL by running these commands:
  kubectl get pods -n my-feed
```

#### Verify the helm release and version

Verify the chart version has changed and matches what the latest feed version:

```
helm list -n $FEED_NAME 
NAME     NAMESPACE    	REVISION	UPDATED                                	STATUS  	CHART     	APP VERSION
my-feed	 my-feed	11      	2023-10-12 08:41:27.609764776 +0000 UTC	deployed	feed-0.2.7	2.0.0     
```

#### Verify the new pods are running:

```
kubectl get pods -n $FEED_NAME
```

#### Double check the pod logs:

```
kubectl logs -n $FEED_NAME deployments/ghost
```

```
kubectl logs -n $FEED_NAME deployments/musig
```
```
kubectl logs -n $FEED_NAME deployments/tor-proxy
```
and you're done!

:::warning
If you encounter any issues please refer to the [Trouble Shooting](https://docs.chroniclelabs.org/validators/quickstart#trouble-shooting) steps
:::