---
sidebar_position: 3
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

### Debug Bundle

If you need further debugging, please retrieve the container logs, and some base info and provide it to the chronicle team for assistance:

:::tip
Make sure that you set `FEED_NAME` to match your feed in question, and run these commands from the correct user so that `$HOME/$FEED_NAME/generated-values.yaml` resolves to the correct file.
:::

```
export FEED_NAME=<CHANGE_ME>
cd /tmp
kubectl logs deployment/ghost -n $FEED_NAME > ghost.log
kubectl logs deployment.apps/ghost-tor-daemon -n $FEED_NAME > tor-proxy.log
kubectl get pods,deployment,service,secrets,onion --all-namespaces > kbom.txt
helm list --all-namespaces > all-helm-releases.log
tar czf chronicle-debug.tar.gz ghost.log tor-proxy.log all-helm-releases.log kbom.txt $HOME/$FEED_NAME/generated-values.yaml
```

The above commands will get logs for each of the pods running, the state of the services, as well as the generated-values.yaml for your feed, and bundle it into a tarball `chronicle-debug.tar.gz` (Please change the values / paths accordingly)
