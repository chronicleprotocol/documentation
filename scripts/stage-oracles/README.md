# Generate testnet docs

The scripts in this folder will automatically update [docs/Developers/testnet.md](docs/Developers/testnet.md) from the `chronicles` repo. 

Simply run

```bash
🦄 ./scripts/stage-oracles/generate

Cloning into 'tmp/chronicles'...
remote: Enumerating objects: 19785, done.
remote: Counting objects: 100% (1273/1273), done.
remote: Compressing objects: 100% (343/343), done.
remote: Total 19785 (delta 1108), reused 931 (delta 930), pack-reused 18512 (from 4)
Receiving objects: 100% (19785/19785), 3.60 MiB | 1.14 MiB/s, done.
Resolving deltas: 100% (16882/16882), done.
On branch YOUR-BRANCH
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   docs/Developers/testnet.md
```

and the above file will be modified. Create a PR and push.