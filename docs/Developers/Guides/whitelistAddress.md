---
sidebar_position: 1
description: Whitelisting yourself on Testnet and getting read access to contracts.
keywords: [whitelist, testnet, read access]
---
# Getting Read Access to Contracts

Our contracts are read-protected by a whitelist, meaning you won't be able to read them on-chain without your address being added to the whitelist.

:::info

On Testnet, the [SelfKisser contract](https://github.com/chronicleprotocol/self-kisser) allows users to whitelist themselves, whimsically termed 'kiss' themselves.

On Mainnet, to get access to production  Oracles, please open a ticket on [Discord](https://discord.com/invite/CjgvJ9EspJ) via the 🆘｜support channel. 


:::

# Whitelisting Yourself on Testnet and Reading from Smart Contracts
## Option 1: Using the CLI with `cast`

### Whitelisting Using the CLI

[Cast](https://book.getfoundry.sh/reference/cast/cast) is a command-line interface (CLI) tool developed by the Foundry team to streamline interactions with Ethereum and other EVM-based chains. Whether you're making smart contract calls, sending transactions, or retrieving chain data, Cast can help you with that.

```bash
$ cast send 0x0dcc19657007713483a5ca76e6a7bbe5f56ea37d "selfKiss(address)()" <oracle address you want you use> --rpc-url $rpc
```
This will whitelist the address that sends the request.
Alternatively, when you want to whitelist a different address than the one sending the request, you can use: 

```bash
$ cast send 0x0dcc19657007713483a5ca76e6a7bbe5f56ea37d "selfKiss(address, address)()" <oracle address you want you use> <contract address to be whitelisted> --rpc-url $rpc
```

`0x0dcc19657007713483a5ca76e6a7bbe5f56ea37d` is the SelfKisser contract address.

If you need an Oracle address for quick testing, you can use: `Chronicle_ETH_USD_3: 0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603`, or find a specific Oracle address using the [Chronicle Dashboard](https://chroniclelabs.org/dashboard).

You can then verify your whitelist status by running:
```bash
$ cast call <oracle address> "tolled(address)(bool)" <your address> --rpc-url $rpc
```

A response of `true` confirms your whitelisted status.

### Reading from Smart Contracts using the CLI 
Once you are whitelisted, interacting with the oracle is easy. The `read()` function returns a uint value representing the data you are trying to get:

```bash
$ cast call 0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660 "read()(uint)" --rpc-url $rpc
```

Response:
`1656870000000000045440`


## Option 2: Using Etherscan
### Whitelisting Using Etherscan

If you do not want to use the CLI, you can whitelist yourself directly on Etherscan.

1. Navigate to the SelfKisser contract address on Etherscan: [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://sepolia.etherscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d#code)

2. Click on the `Contract` tab and then on `Write Contract`

3. You'll have to hit the `Connect to Web3` button to connect your wallet.

<div style={{textAlign: 'center'}}>
<img
    src="/img/guides/connect.png"
    alt="Example of Connect to Web3 button"
    width="500"
/>
</div>

4. Scroll down to the `selfKiss()` function and enter the Oracle address you wish to interact with in the oracle (address) field. Then, click `Write`.
You will see that there are two `selfKiss()` functions (overloads). One of them takes two parameters (oracle (address), who (address)), and the other only one parameter (oracle (address)).

    - When you want to whitelist your own address (msg.sender), you can use `selfKiss(address oracle)`.
   - In contrast, when you need to specify a different address to perform the whitelist on, you should use `selfKiss(address oracle, address who)`.


:::tip

Make sure you have enough native tokens of the network where you want to use the Oracle to cover the gas for your request.

Make sure you are connected to the correct network corresponding to the contract you are interacting with.

:::

### Checking if Your Address Was Successfully Whitelisted/Kissed on Etherscan


In the contract that you wan to read, go to the `Read Contract` tab and locate the `tolled` function.
Enter your wallet address in the `who` (address) field.
Hit `Query`. The data returned should look like this:
<div style={{textAlign: 'center'}}>
<img
    src="/img/guides/tolled.png"
    alt="Tolled" 
/>
</div>
Once you verify that you are whitelisted, you are ready to read from smart contracts.