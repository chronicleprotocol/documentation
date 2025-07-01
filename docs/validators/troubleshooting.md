---
sidebar_position: 4
description: General Troubleshooting guide for Chronicle validators.
keywords: [kubectl, helm, Troubleshooting]
---

# Troubleshooting

General Troubleshooting guide

### Kubectl / helm commands fail

If you receive an error as shown below when trying to invoke `kubectl` or `helm` commands, it is most likely caused by the `KUBECONFIG` variable not being set.

```bash
WARN[0000] Unable to read /etc/rancher/k3s/k3s.yaml, please start server with --write-kubeconfig-mode to modify kube config permissions
error: error loading config file "/etc/rancher/k3s/k3s.yaml": open /etc/rancher/k3s/k3s.yaml: permission denied
```

The installation script attempts to create `$HOME/.kube/config`  and sets this in the `$HOME/.bashrc`

You may need to log out and log back in, to create a new shell terminal session which will contain the correct KUBECONFIG variable, or run `source ~/.bashrc` to reload you shell config, or manually set it with `export KUBECONFIG=~/.kube/config`

NOTE: It is **not** advisable to run kubectl and helm commands as root (or `sudo kubectl ...` or `sudo helm ...`.

The user-provided configs are sufficient for interacting with the k3s cluster and its resources.

Make sure that you `$KUBECONFIG` is set to a file that is accessible by your system user with the correct permissions.

You can view the functions responsible for setting kubeconfig [here](https://github.com/chronicleprotocol/scripts/blob/main/feeds/k3s-install/install.sh#L144-L149)

### $KUBECONFIG file has expired

With the K3s installation, the `kubeconfig` can "expire" causing issues authenticating with the kubeapi.

eg response would be like this:
```
kubectl get secret chronicle-feed-eth-keys -n chronicle-feed -o jsonpath="{.data.ethFrom}" | base64 --decode
E1002 15:13:49.343237 2375376 memcache.go:265] couldn't get current server API group list: the server has asked for the client to provide credentials
E1002 15:13:49.345241 2375376 memcache.go:265] couldn't get current server API group list: the server has asked for the client to provide credentials
E1002 15:13:49.349349 2375376 memcache.go:265] couldn't get current server API group list: the server has asked for the client to provide credentials
E1002 15:13:49.351739 2375376 memcache.go:265] couldn't get current server API group list: the server has asked for the client to provide credentials
E1002 15:13:49.353627 2375376 memcache.go:265] couldn't get current server API group list: the server has asked for the client to provide credentials
error: You must be logged in to the server (the server has asked for the client to provide credentials)
```
> This happens because we are interacting with the k3s cluster as a non-root user (best practice), and we are getting our `kubeconfig` file rancher at `/etc/rancher/k3s/k3s.yaml`. The `client-certificate-data` gets refreshed from time to time, in which case you will need to create a new kubeconfig file (normally once a year).

To fix this, run the following commands:

```
# as your validator user (eg demo-user)

rm $KUBECONFIG
sudo cp /etc/rancher/k3s/k3s.yaml $KUBECONFIG
sudo chown $USER $KUBECONFIG
```
You should be able to authenticate with the cluster and proceed with `kubectl` and `helm` commands.

### Debug Bundle

If you need further debugging, please retrieve the container logs, and some base info and provide it to the chronicle team for assistance:

:::tip
Make sure that you set `FEED_NAME` to match your feed in question, and run these commands from the correct user so that `$HOME/$FEED_NAME/generated-values.yaml` resolves to the correct file.
:::

```
export FEED_NAME=<CHANGE_ME>
cd /tmp
kubectl logs deployment/ghost -n $FEED_NAME > ghost.log
kubectl logs deployment/ghost-vao -n $FEED_NAME > ghost.log
kubectl get pods,deployment,service,secrets,onion --all-namespaces > kbom.txt
helm list --all-namespaces > all-helm-releases.log
tar czf chronicle-debug.tar.gz ghost.log tor-proxy.log all-helm-releases.log kbom.txt $HOME/$FEED_NAME/generated-values.yaml
```

The above commands will get logs for each of the pods running, the state of the services, as well as the generated-values.yaml for your feed, and bundle it into a tarball `chronicle-debug.tar.gz` (Please change the values / paths accordingly)
