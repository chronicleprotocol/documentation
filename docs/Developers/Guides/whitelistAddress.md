---
sidebar_position: 2
description: Whitelisting yourself on Testnet and getting read access to contracts.
keywords: [whitelist, testnet, read access]
---

# Getting Read Access to Chronicle Oracles

Our contracts are read-protected by a whitelist, meaning you won't be able to read them on-chain without your address being added to the whitelist.

:::info

On Testnet, the [SelfKisser contract](https://github.com/chronicleprotocol/self-kisser) allows users to whitelist themselves, whimsically termed 'kiss' themselves.

On Mainnet, to get access to production Oracles, please open a ticket on [Discord](https://discord.com/invite/CjgvJ9EspJ) via the 🆘 ｜ support channel.

:::

| Testnet Network               | SelfKisser Address                                                                                                                           |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Ethereum Sepolia              | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://sepolia.etherscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d#code)           |
| Base Sepolia                  | [0x70E58b7A1c884fFFE7dbce5249337603a28b8422](https://sepolia.basescan.org/address/0x70E58b7A1c884fFFE7dbce5249337603a28b8422#code)           |
| Arbitrum Sepolia              | [0xc0fe3a070Bc98b4a45d735A52a1AFDd134E0283f](https://sepolia.arbiscan.io/address/0xc0fe3a070Bc98b4a45d735A52a1AFDd134E0283f#code)            |
| Polygon zkEVM Testnet Cardona | [0xCce64A8127c051E784ba7D84af86B2e6F53d1a09](https://cardona-zkevm.polygonscan.com/address/0xCce64A8127c051E784ba7D84af86B2e6F53d1a09)       |
| Gnosis Mainnet                | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://gnosisscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d)                       |
| Mantle Testnet                | [0x9ee0DC1f7cF1a5c083914e3de197Fd1F484E0578](https://explorer.sepolia.mantle.xyz/address/0x9ee0DC1f7cF1a5c083914e3de197Fd1F484E0578)         |
| Scroll Sepolia                | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://sepolia.scrollscan.com/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d#code)         |
| zkSync Sepolia                | [0x25f594edde4f58A14970b2ef6616badBa4B1CdDD](https://sepolia.explorer.zksync.io/address/0x25f594edde4f58A14970b2ef6616badBa4B1CdDD#contract) |
| Optimism Sepolia              | [0xfF619a90cDa4020897808D74557ce3b648922C37](https://sepolia-optimism.etherscan.io/address/0xfF619a90cDa4020897808D74557ce3b648922C37#code)  |
| Berachain Bepolia              | [0x584914a893aBefB95abC02A5604338c0390F328B](https://bepolia.beratrail.io/address/0x584914a893aBefB95abC02A5604338c0390F328B)            |
| Superseed Sepolia             | [0x371A53bB4203Ad5D7e60e220BaC1876FF3Ddda5B](https://sepolia-explorer.superseed.xyz/address/0x371A53bB4203Ad5D7e60e220BaC1876FF3Ddda5B#code) |
| Corn Sepolia             | [0x8CA2E3a09c79233127dC21955e28A6b9C4bf166E](https://testnet.cornscan.io/address/0x8CA2E3a09c79233127dC21955e28A6b9C4bf166E) |
| Plume Testnet            | [0xd6de00f82738c966c88F55017e8aCcA192AF42a1](https://testnet-explorer.plumenetwork.xyz/address/0xd6de00f82738c966c88F55017e8aCcA192AF42a1) |
| Monad Testnet           | [0x9a0de663c20127a229891eA0C7Db99c785BF91e3](https://monad-testnet.socialscan.io/address/0x9a0de663c20127a229891eA0C7Db99c785BF91e3) |
| Unichain Sepolia           | [0x371A53bB4203Ad5D7e60e220BaC1876FF3Ddda5B](https://unichain-sepolia.blockscout.com/address/0x371A53bB4203Ad5D7e60e220BaC1876FF3Ddda5B) |

# Whitelisting Yourself on Testnet and Reading from Smart Contracts

:::warning

This example demonstrates the whitelisting process on **Ethereum Sepolia**. The addresses used correspond to the SelfKisser and Oracles on Ethereum Sepolia.

Depending on the Testnet network you select, **please make sure to use the appropriate addresses for that specific chain. To find a specific Oracle address for your chosen chain use the [Chronicle Dashboard](https://chroniclelabs.org/dashboard)** by toggling the `<dev mode>` from the top right corner for Testnet Oracles.

The address of the **SelfKisser** for each chain can be found in the table at the top of this page.

:::

## Option 1: Using the CLI with `cast`

### Whitelisting Using the CLI

[Cast](https://book.getfoundry.sh/reference/cast/cast) is a command-line interface (CLI) tool developed by the Foundry team to streamline interactions with Ethereum and other EVM-based chains. Whether you're making smart contract calls, sending transactions, or retrieving chain data, Cast simplifies the process.

#### Whitelist the Address That Sends the Request

```bash
$ cast send 0x0dcc19657007713483a5ca76e6a7bbe5f56ea37d "selfKiss(address)()" <oracle address you want you use> --rpc-url $rpc
```

Here, `0x0dcc19657007713483a5ca76e6a7bbe5f56ea37d` is the SelfKisser contract address on Ethereum Sepolia. This command will whitelist the address that sends the request.

#### Whitelist a Different Address

If you need to whitelist a different address than the one sending the request, use:

```bash
$ cast send 0x0dcc19657007713483a5ca76e6a7bbe5f56ea37d "selfKiss(address, address)()" <oracle address you want you use> <contract address to be whitelisted> --rpc-url $rpc
```

Here, `0x0dcc19657007713483a5ca76e6a7bbe5f56ea37d` is the SelfKisser contract address on Ethereum Sepolia. This command will whitelist the address that you provide as a parameter.

#### Verify Whitelist Status:

For quick testing, feel free to use the following Oracle address:

    - Chronicle_ETH_USD_3: `0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603` on Ethereum Sepolia.

**Alternatively, you can find a specific Oracle address for your chosen chain using the [Chronicle Dashboard](https://chroniclelabs.org/dashboard)** by toggling the `<dev mode>` from the top right corner for Testnet Oracles.

```bash
$ cast call <oracle address> "tolled(address)(bool)" <your address> --rpc-url $rpc
```

A response of `true` confirms your whitelisted status.

### Reading from Smart Contracts using the CLI

Once you are whitelisted, interacting with the oracle is easy. The `read()` function returns a uint value representing the data you are trying to get:

```bash
$ cast call 0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603 "read()(uint)" --rpc-url $rpc
```

Here, `0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603` represents Chronicle_ETH_USD_3 on Ethereum Sepolia.

Response:
`1656870000000000045440`

Note that Chronicle Oracles use 18 decimal places of precision, so the price is `1656.87`.

## Option 2: Using Etherscan

### Whitelisting Using Etherscan

If you do not want to use the CLI, you can whitelist yourself directly on Etherscan.

1. Navigate to the SelfKisser contract address on Etherscan Ethereum Sepolia: [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://sepolia.etherscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d#code). If you are using a different Testnet, make sure to use the right corresponding blockchain explorer for that chain as well as the right SelfKisser address (you can find the SelfKisser address on different Testnet chains in the table at the top of this page).

2. Click on the `Contract` tab and then on `Write Contract`

3. You'll have to hit the `Connect to Web3` button to connect your wallet.

<div style={{textAlign: 'center'}}>
<img
    src="/img/guides/connect.png"
    alt="Example of Connect to Web3 button"
    width="500"
/>
</div>

4.  Scroll down to the `selfKiss()` function and enter the Oracle address you wish to interact with in the oracle (address) field. Then, click `Write`.
    You will see that there are two `selfKiss()` functions (overloads). One of them takes two parameters (oracle (address), who (address)), and the other only one parameter (oracle (address)).

        - When you want to whitelist your own address (msg.sender), you can use `selfKiss(address oracle)`.

    - In contrast, when you need to specify a different address to perform the whitelist on, you should use `selfKiss(address oracle, address who)`.

:::warning

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
Once you verify that you are whitelisted, you are ready to read from the Oracle's smart contract.


## Option 3: Directly on the Chronicle Dashboard

You can also whitelist addresses directly on the Chronicle Dashboard.

Simply select the Oracle you want read-access to, then click the 'Use this oracle for free' option in the top right corner, as shown in the image below.
Please keep in mind that you'll need some native gas tokens from the selected testnet to cover the gas costs for the whitelisting process, as it's a write operation. You can find a list of faucets for different networks [here](/Resources/Utils.md).


<div style={{textAlign: 'center'}}>
<img
    src="/img/guides/useOracle.png"
    alt="Use this oracle for free"
    width="400" 
/>
</div>
A window will pop up to connect your wallet.

<div style={{textAlign: 'center'}}>
<img
    src="/img/guides/connectWallet.png"
    alt="Connect Wallet" 
    width="400"
/>
</div>

After selecting and connecting your wallet, you’ll be prompted to paste the address you want to whitelist.
<div style={{textAlign: 'center'}}>
<img
    src="/img/guides/pasteAddr.png"
    alt="Paste address to whitelist" 
    width="400"
/>
</div>

Press the 'Use Oracle' button, confirm, and then wait a few seconds for the process to finalize. 
Your address is now whitelisted and ready to read from the oracle.