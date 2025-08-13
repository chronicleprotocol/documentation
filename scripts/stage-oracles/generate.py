header = """---
sidebar_position: 2
description: Chronicle Protocol Testnet Addresses.
keywords: [testnet, Chronicle, addresses]
---

# Testnet Addresses

You can find the Oracles' smart contract addresses using the [Chronicle Dashboard](https://chroniclelabs.org/dashboard), by selecting "Testnets" above the blockchain list.

Alternatively, you can also find here the addresses organized by chains:
"""

table_header = """
<details>
<summary> Smart Contract Addresses on **$chain** </summary>

| Contract Name              | Contract Address on $chain
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |"""

row = """| $name    | [$address]($etherscan/address/$address)"""

table_footer = '</details>'

from string import Template
from pathlib import Path
import os, re, json

data = {}
with open('tmp/chronicles/deployments/chains.json') as json_data:
    o = json.load(json_data)
    for chain in o['chains']:
        # We may get a chain from chains.json which does not have any contracts
        # deployed. We do not want a section for these
        if not os.path.exists(f"tmp/chronicles/deployments/stage/{chain['name']}"):
            continue
        data[chain['name']] = {}
        data[chain['name']]['info'] = chain

for path in Path("tmp/chronicles/deployments/stage").glob("**/*.json"):
    filename = os.path.split(str(path))[1]
    contract = re.search("Chronicle_|SelfKisser", str(filename))
    if contract is not None:
        with open(str(path)) as json_data:
            o = json.load(json_data)
            if 'oracles' not in data[o['chain']]:
                data[o['chain']]['oracles'] = []
            if 'selfkisser' not in data[o['chain']]:
                data[o['chain']]['selfkisser'] = []

            if o['contract'] == 'SelfKisser':
                data[o['chain']]['selfkisser'] = o
            else:
                data[o['chain']]['oracles'].append(o)

print(header)
for key in data:
    if not data[key]['info']['mainnet']:
        chain = data[key]['info']['niceName']
        # Template header output
        th = Template(table_header)
        print(th.substitute(chain=chain))
        etherscan = data[key]['info']['explorers'][0]['url']
        # Force SelfKisser contract to top of output
        if 'selfkisser' in data[key] and len(data[key]['selfkisser']) > 0:
            kisser = data[key]['selfkisser']
            tr = Template(row)
            print(tr.substitute(address=kisser['address'], name=kisser['name'], etherscan=etherscan))
        # Now, print all the oracles
        if 'oracles' in data[key] and len(data[key]['oracles']) > 0:
            for oracle in data[key]['oracles']:
                tr = Template(row)
                print(tr.substitute(address=oracle['address'], name=oracle['name'], etherscan=etherscan))
        # Template footer
        print(table_footer)
