---
sidebar_position: 4
---

# 🇵🇹 ETH Lisbon Hackathon Guide

![ETH Lisbon Hackathon](https://pbs.twimg.com/media/F43NCzgWMAAiQNi?format=png&name=large)

Welcome to the ETH Lisbon Hackathon! This document serves as a guide for integrating Chronicle Oracles into your hackathon projects. Our team is here to assist you.

:::info
For any inquiries, feel free to reach out at our booth, join our [Discord](https://discord.gg/CjgvJ9EspJ), or walk up to anyone wearing a Chronicle hoodie
:::

## Chronicle Oracle Integration Bounties

### Bounty 1: Most Innovative Chronicle Oracle Integration

**Objective:** Rewarding the most creative integration of a Chronicle Oracle.

**Description:** The prize will go to the team with the most innovative integration of a Chronicle Oracle on one of the supported chains (Sepoila (Ethereum), Polygon zkEVM (testnet), Gnosis Chain (mainnet)). The innovation should stem from the use case of the Oracle, i.e., The idea or utility of the project.

**Reward:** $2000 DAI <br/>
**Type:** Winner takes all

### Bounty 2: Integrate a Chronicle Oracle

**Objective:** Rewarding successful integrations of a Chronicle Oracle.

**Description:** Each team that manages to successfully integrate a Chronicle Oracle on one of the supported chains, Sepoila (Ethereum), Polygon zkEVM (testnet), or Gnosis Chain (mainnet), will receive an equal share from the $2500 DAI reward pool. The integration should be crucial to the product or project's operation, serving a legitimate purpose.

**Reward:** $2500 DAI <br/>
**Type:** Pooled prize

### Bounty 3: Build with a Chronicle Oracle on The Polyogon zkEVM

**Objective:** Rewarding the most innovative Integration of a Chronicle Oracle on The Polyogon zkEVM.

**Description:** Two teams will be awarded for integrating one or more Chronicle Oracles in a project built on Polygon zkEVM testnet. 'DeFi' and 'Public Good' projects are preferred. The Oracle integration must be integral to the operation of the build to be considered. Please see the Chronicle ETH Lisbon Hackathon Docs for a complete list of available Oracles.

**Reward:** $1000 ($500 from Chronicle/$500 from Polygon).<br/>

- 1st Prize: $600 <br/>
- 2nd Prize: $400 <br/>

**Type:** First and Second Prize

## Chronicle Protocol Contracts

### Scribe

Scribe is an efficient Schnorr multi-signature-based Oracle with enhanced gas efficiency. Providing nearly constant gas costs on Layer 2s, On Layer 1s, Scribe boasts of a fixed gas costs, leading to substantial savings—over 60% relative to competing Oracles and an impressive 80% compared to Chainlink. This approach to gas management significantly boosts the scalability of Oracle services.

Also, the seamless integration of Chronicle Oracle with Chainlink and Maker interfaces is a plug-and-play affair, a smooth transition for developers used to these platforms.

Although not relevant to the hackathon, it's worth mentioning that all data delivered by a Chronicle Oracle on the mainnet is verifiable via The [Chronicle Dashboard](https://chroniclelabs.org/dashboard).

Scribe Public Repo: [https://github.com/chronicleprotocol/scribe](https://github.com/chronicleprotocol/scribe)

### CAST

Cast is a command-line interface (CLI) tool designed by the Foundry team to streamline your interaction with the Ethereum Virtual Machine (EVM). Whether you're making smart contract calls, sending transactions, or retrieving any chain data, cast can help with that. You can read more [Here](https://book.getfoundry.sh/reference/cast/cast).

### Self-Kisser: Permissionless Whitelisting

Chronicle safeguards Oracle read functions with a whitelist, ensuring controlled access to critical data. However, the SelfKisser contract unfolds a possibility where you can whitelist yourself (or, as whimsically termed, "kiss") yourself :).

How do you kiss yourself, i.e., `msg.sender`?

Run the following command:

```bash
$ cast send 0x0dcc19657007713483a5ca76e6a7bbe5f56ea37d "selfKiss(address)()" <oracle address you want you use>
```

To verify your whitelisted status:

```bash
$ cast call <oracle address> "tolled(address)" <your address>
```

Response:

```bash
0x0000000000000000000000000000000000000000000000000000000000000001
```

A return value of `1 (true)` confirms your whitelisted status.

For more info, see the `SelfKisser` repo: [https://github.com/chronicleprotocol/self-kisser](https://github.com/chronicleprotocol/self-kisser/blob/main/docs/Management.md#management)

### Reading Chronicle Oracles through the `IChronicle` Interface

Interacting with the oracle is easy. The `read()` function lays it out plain and simple, returning a `uint` value representing the data you are trying to get:

```bash
$ cast call 0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660 "read()(uint)"
```

Response:

```bash
1656870000000000045440
```

:::info
For a detailed outline of the interface and additional functionalities, click [here](https://github.com/chronicleprotocol/chronicle-std/blob/main/src/IChronicle.sol)
:::

## Whitelisting your address via Etherscan

To whitelist your address or other addresses for a Chronicle Oracle on Etherscan, follow these steps:

1. Navigate to the Self-kisser contract on Etherscan using the contract address provided: [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://sepolia.etherscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d#code)

2. Click on the `Contract` tab and then on `Write Contract`.

3. You'll have to hit the `Connect to Web3` button to connect your wallet.

4. Scroll down to the `selfKiss` function and enter the Oracle address you wish to interact with in the `oracle (address)` field. Then, click Write.

That should send you a popup message on your wallet to sign. Once signed, it should take a few seconds for your address to be whitelisted.

### Reading from Smart Contracts

1. Go to the `Read Contract` tab and locate the `tolled` function.
2. Enter your wallet address in the `who (address)` field.
3. Hit `Query`. The data returned will be displayed below, which should look like this:

```solidity
[ tolled(address) method Response ]
    bool :  true
```

#### Additional Notes

- Ensure you have a sufficient amount of tokens in your wallet to cover gas fees for transactions.
- Ensure your wallet is connected to the correct network corresponding to the contract you are interacting with.

### Useful Links

- [Self-kisser Contract on Sepolia network](https://sepolia.etherscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d#code)
- [How To Use Read/Write Contract Features on Etherscan](https://info.etherscan.com/how-to-use-read-or-write-contract-features-on-etherscan/)

## Smart Contract Addresses on Sepolia network

| Contract Name | Contract Address on Sepolia network                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Self-kisser   | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://sepolia.etherscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d#code) |
| AAVE/USD      | [0xED4C91FC28B48E2Cf98b59668408EAeE44665511](https://sepolia.etherscan.io/address/0xED4C91FC28B48E2Cf98b59668408EAeE44665511#code) |
| ARB/USD       | [0x7dE6Df8E4c057eD9baE215F347A0339D603B09B2](https://sepolia.etherscan.io/address/0x7dE6Df8E4c057eD9baE215F347A0339D603B09B2#code) |
| AVAX/USD      | [0xD419f76594d411BD94c71FB0a78c80f71A2290Ce](https://sepolia.etherscan.io/address/0xD419f76594d411BD94c71FB0a78c80f71A2290Ce#code) |
| BNB/USD       | [0x6931FB9C54958f77873ceC4536EaC56F561d2dC4](https://sepolia.etherscan.io/address/0x6931FB9C54958f77873ceC4536EaC56F561d2dC4#code) |
| BTC/USD       | [0xdD5232e76798BEACB69eC310d9b0864b56dD08dD](https://sepolia.etherscan.io/address/0xdD5232e76798BEACB69eC310d9b0864b56dD08dD#code) |
| CRV/USD       | [0x7B6E473f1CeB8b7100C9F7d58879e7211Bc48f32](https://sepolia.etherscan.io/address/0x7B6E473f1CeB8b7100C9F7d58879e7211Bc48f32#code) |
| DAI/USD       | [0x16984396EE0903782Ba8e6ebfA7DD356B0cA3841](https://sepolia.etherscan.io/address/0x16984396EE0903782Ba8e6ebfA7DD356B0cA3841#code) |
| ETH/BTC       | [0x4E866Ac929374096Afc2715C4e9c40D581A4067e](https://sepolia.etherscan.io/address/0x4E866Ac929374096Afc2715C4e9c40D581A4067e#code) |
| ETH/USD       | [0x90430C5b8045a1E2A0Fc4e959542a0c75b576439](https://sepolia.etherscan.io/address/0x90430C5b8045a1E2A0Fc4e959542a0c75b576439#code) |
| GNO/USD       | [0xBcC6BFFde7888A3008f17c88D5a5e5F0D7462cf9](https://sepolia.etherscan.io/address/0xBcC6BFFde7888A3008f17c88D5a5e5F0D7462cf9#code) |
| IBTA/USD      | [0xc52539EfbA58a521d69494D86fc47b9E71D32997](https://sepolia.etherscan.io/address/0xc52539EfbA58a521d69494D86fc47b9E71D32997#code) |
| LDO/USD       | [0x3aeF92049C9401094A9f75259430F4771143F0C3](https://sepolia.etherscan.io/address/0x3aeF92049C9401094A9f75259430F4771143F0C3#code) |
| LINK/USD      | [0x4EDdF05CfAd20f1E39ed4CB067bdfa831dAeA9fE](https://sepolia.etherscan.io/address/0x4EDdF05CfAd20f1E39ed4CB067bdfa831dAeA9fE#code) |
| MATIC/USD     | [0x06997AadB30d51eAdBAA7836f7a0F177474fc235](https://sepolia.etherscan.io/address/0x06997AadB30d51eAdBAA7836f7a0F177474fc235#code) |
| MKR/USD       | [0xE61A66f737c32d5Ac8cDea6982635B80447e9404](https://sepolia.etherscan.io/address/0xE61A66f737c32d5Ac8cDea6982635B80447e9404#code) |
| OP/USD        | [0x1Ae491D618A667a44D48E0b0BE2Cc0cDBF269BC5](https://sepolia.etherscan.io/address/0x1Ae491D618A667a44D48E0b0BE2Cc0cDBF269BC5#code) |
| RETH/USD      | [0xEff79d34f24Bb36eD8FB6c4CbaD5De293fdCf66F](https://sepolia.etherscan.io/address/0xEff79d34f24Bb36eD8FB6c4CbaD5De293fdCf66F#code) |
| SDAI/DAI      | [0xB6EE756124e88e12585981DdDa9E6E3bf3C4487D](https://sepolia.etherscan.io/address/0xB6EE756124e88e12585981DdDa9E6E3bf3C4487D#code) |
| SNX/USD       | [0x6Ab51f7E684923CE051e784D382A470b0fa834Be](https://sepolia.etherscan.io/address/0x6Ab51f7E684923CE051e784D382A470b0fa834Be#code) |
| SOL/USD       | [0x11ceEcca4d49f596E0Df781Af237CDE741ad2106](https://sepolia.etherscan.io/address/0x11ceEcca4d49f596E0Df781Af237CDE741ad2106#code) |
| UNI/USD       | [0xfE051Bc90D3a2a825fA5172181f9124f8541838c](https://sepolia.etherscan.io/address/0xfE051Bc90D3a2a825fA5172181f9124f8541838c#code) |
| USDC/USD      | [0xfef7a1Eb17A095E1bd7723cBB1092caba34f9b1C](https://sepolia.etherscan.io/address/0xfef7a1Eb17A095E1bd7723cBB1092caba34f9b1C#code) |
| USDT/USD      | [0xF78A4e093Cd2D9F57Bb363Cc4edEBcf9bF3325ba](https://sepolia.etherscan.io/address/0xF78A4e093Cd2D9F57Bb363Cc4edEBcf9bF3325ba#code) |
| WBTC/USD      | [0x39C899178F4310705b12888886884b361CeF26C7](https://sepolia.etherscan.io/address/0x39C899178F4310705b12888886884b361CeF26C7#code) |
| WSTETH/ETH    | [0x67E93d37B57747686F22f2F2f0a8aAd253199B38](https://sepolia.etherscan.io/address/0x67E93d37B57747686F22f2F2f0a8aAd253199B38#code) |
| WSTETH/USD    | [0x8Ba43F8Fa2fC13D7EEDCeb9414CDbB6643483C34](https://sepolia.etherscan.io/address/0x8Ba43F8Fa2fC13D7EEDCeb9414CDbB6643483C34#code) |
| YFI/USD       | [0x16978358A8D6C7C8cA758F433685A5E8D988dfD4](https://sepolia.etherscan.io/address/0x16978358A8D6C7C8cA758F433685A5E8D988dfD4#code) |

## Smart Contract Addresses on Polygon zkEVM Testnet

| Contract Name | Contract Address on zkEVM Testnet                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Self-kisser   | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://testnet-zkevm.polygonscan.com/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d#code) |
| AAVE/USD      | [0xED4C91FC28B48E2Cf98b59668408EAeE44665511](https://testnet-zkevm.polygonscan.com/address/0xED4C91FC28B48E2Cf98b59668408EAeE44665511#code) |
| ARB/USD       | [0x7dE6Df8E4c057eD9baE215F347A0339D603B09B2](https://testnet-zkevm.polygonscan.com/address/0x7dE6Df8E4c057eD9baE215F347A0339D603B09B2#code) |
| AVAX/USD      | [0xD419f76594d411BD94c71FB0a78c80f71A2290Ce](https://testnet-zkevm.polygonscan.com/address/0xD419f76594d411BD94c71FB0a78c80f71A2290Ce#code) |
| BNB/USD       | [0x6931FB9C54958f77873ceC4536EaC56F561d2dC4](https://testnet-zkevm.polygonscan.com/address/0x6931FB9C54958f77873ceC4536EaC56F561d2dC4#code) |
| BTC/USD       | [0xdD5232e76798BEACB69eC310d9b0864b56dD08dD](https://testnet-zkevm.polygonscan.com/address/0xdD5232e76798BEACB69eC310d9b0864b56dD08dD#code) |
| CRV/USD       | [0x7B6E473f1CeB8b7100C9F7d58879e7211Bc48f32](https://testnet-zkevm.polygonscan.com/address/0x7B6E473f1CeB8b7100C9F7d58879e7211Bc48f32#code) |
| DAI/USD       | [0x16984396EE0903782Ba8e6ebfA7DD356B0cA3841](https://testnet-zkevm.polygonscan.com/address/0x16984396EE0903782Ba8e6ebfA7DD356B0cA3841#code) |
| ETH/BTC       | [0x4E866Ac929374096Afc2715C4e9c40D581A4067e](https://testnet-zkevm.polygonscan.com/address/0x4E866Ac929374096Afc2715C4e9c40D581A4067e#code) |
| ETH/USD       | [0x90430C5b8045a1E2A0Fc4e959542a0c75b576439](https://testnet-zkevm.polygonscan.com/address/0x90430C5b8045a1E2A0Fc4e959542a0c75b576439#code) |
| GNO/USD       | [0xBcC6BFFde7888A3008f17c88D5a5e5F0D7462cf9](https://testnet-zkevm.polygonscan.com/address/0xBcC6BFFde7888A3008f17c88D5a5e5F0D7462cf9#code) |
| IBTA/USD      | [0xc52539EfbA58a521d69494D86fc47b9E71D32997](https://testnet-zkevm.polygonscan.com/address/0xc52539EfbA58a521d69494D86fc47b9E71D32997#code) |
| LDO/USD       | [0x3aeF92049C9401094A9f75259430F4771143F0C3](https://testnet-zkevm.polygonscan.com/address/0x3aeF92049C9401094A9f75259430F4771143F0C3#code) |
| LINK/USD      | [0x4EDdF05CfAd20f1E39ed4CB067bdfa831dAeA9fE](https://testnet-zkevm.polygonscan.com/address/0x4EDdF05CfAd20f1E39ed4CB067bdfa831dAeA9fE#code) |
| MATIC/USD     | [0x06997AadB30d51eAdBAA7836f7a0F177474fc235](https://testnet-zkevm.polygonscan.com/address/0x06997AadB30d51eAdBAA7836f7a0F177474fc235#code) |
| MKR/USD       | [0xE61A66f737c32d5Ac8cDea6982635B80447e9404](https://testnet-zkevm.polygonscan.com/address/0xE61A66f737c32d5Ac8cDea6982635B80447e9404#code) |
| OP/USD        | [0x1ae491d618a667a44d48e0b0be2cc0cdbf269bc5](https://testnet-zkevm.polygonscan.com/address/0x1ae491d618a667a44d48e0b0be2cc0cdbf269bc5#code) |
| RETH/USD      | [0xEff79d34f24Bb36eD8FB6c4CbaD5De293fdCf66F](https://testnet-zkevm.polygonscan.com/address/0xEff79d34f24Bb36eD8FB6c4CbaD5De293fdCf66F#code) |
| SDAI/DAI      | [0xB6EE756124e88e12585981DdDa9E6E3bf3C4487D](https://testnet-zkevm.polygonscan.com/address/0xB6EE756124e88e12585981DdDa9E6E3bf3C4487D#code) |
| SNX/USD       | [0x6Ab51f7E684923CE051e784D382A470b0fa834Be](https://testnet-zkevm.polygonscan.com/address/0x6Ab51f7E684923CE051e784D382A470b0fa834Be#code) |
| SOL/USD       | [0x11ceEcca4d49f596E0Df781Af237CDE741ad2106](https://testnet-zkevm.polygonscan.com/address/0x11ceEcca4d49f596E0Df781Af237CDE741ad2106#code) |
| UNI/USD       | [0xfE051Bc90D3a2a825fA5172181f9124f8541838c](https://testnet-zkevm.polygonscan.com/address/0xfE051Bc90D3a2a825fA5172181f9124f8541838c#code) |
| USDC/USD      | [0xfef7a1Eb17A095E1bd7723cBB1092caba34f9b1C](https://testnet-zkevm.polygonscan.com/address/0xfef7a1Eb17A095E1bd7723cBB1092caba34f9b1C#code) |
| USDT/USD      | [0xF78A4e093Cd2D9F57Bb363Cc4edEBcf9bF3325ba](https://testnet-zkevm.polygonscan.com/address/0xF78A4e093Cd2D9F57Bb363Cc4edEBcf9bF3325ba#code) |
| WBTC/USD      | [0x39C899178F4310705b12888886884b361CeF26C7](https://testnet-zkevm.polygonscan.com/address/0x39C899178F4310705b12888886884b361CeF26C7#code) |
| WSTETH/ETH    | [0x67E93d37B57747686F22f2F2f0a8aAd253199B38](https://testnet-zkevm.polygonscan.com/address/0x67E93d37B57747686F22f2F2f0a8aAd253199B38#code) |
| WSTETH/USD    | [0x8Ba43F8Fa2fC13D7EEDCeb9414CDbB6643483C34](https://testnet-zkevm.polygonscan.com/address/0x8Ba43F8Fa2fC13D7EEDCeb9414CDbB6643483C34#code) |
| YFI/USD       | [0x16978358A8D6C7C8cA758F433685A5E8D988dfD4](https://testnet-zkevm.polygonscan.com/address/0x16978358A8D6C7C8cA758F433685A5E8D988dfD4#code) |

## Smart Contract Addresses on Gnosis Network

| Contract Name | Contract Address on Gnosis Network                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Self-kisser   | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://gnosisscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d#code) |
| AAVE/USD      | [0xa38C2B5408Eb1DCeeDBEC5d61BeD580589C6e717](https://gnosisscan.io/address/0xa38C2B5408Eb1DCeeDBEC5d61BeD580589C6e717#code) |
| ARB/USD       | [0x579BfD0581beD0d18fBb0Ebab099328d451552DD](https://gnosisscan.io/address/0x579BfD0581beD0d18fBb0Ebab099328d451552DD#code) |
| AVAX/USD      | [0x78C8260AF7C8D0d17Cf3BA91F251E9375A389688](https://gnosisscan.io/address/0x78C8260AF7C8D0d17Cf3BA91F251E9375A389688#code) |
| BNB/USD       | [0x26EE3E8b618227C1B735D8D884d52A852410019f](https://gnosisscan.io/address/0x26EE3E8b618227C1B735D8D884d52A852410019f#code) |
| BTC/USD       | [0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c](https://gnosisscan.io/address/0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c#code) |
| CRV/USD       | [0xf29a932ae56bB96CcACF8d1f2Da9028B01c8F030](https://gnosisscan.io/address/0xf29a932ae56bB96CcACF8d1f2Da9028B01c8F030#code) |
| DAI/USD       | [0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4](https://gnosisscan.io/address/0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4#code) |
| DSR/RATE      | [0x729af3A41AE9E707e7AE421569C4b9c632B66a0c](https://gnosisscan.io/address/0x729af3A41AE9E707e7AE421569C4b9c632B66a0c#code) |
| ETH/BTC       | [0x1804969b296E89C1ddB1712fA99816446956637e](https://gnosisscan.io/address/0x1804969b296E89C1ddB1712fA99816446956637e#code) |
| ETH/USD       | [0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660](https://gnosisscan.io/address/0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660#code) |
| GNO/USD       | [0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8](https://gnosisscan.io/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8#code) |
| IBTA/USD      | [0x07487b0Bf28801ECD15BF09C13e32FBc87572e81](https://gnosisscan.io/address/0x07487b0Bf28801ECD15BF09C13e32FBc87572e81#code) |
| LDO/USD       | [0xa53dc5B100f0e4aB593f2D8EcD3c5932EE38215E](https://gnosisscan.io/address/0xa53dc5B100f0e4aB593f2D8EcD3c5932EE38215E#code) |
| LINK/USD      | [0xecB89B57A60ac44E06ab1B767947c19b236760c3](https://gnosisscan.io/address/0xecB89B57A60ac44E06ab1B767947c19b236760c3#code) |
| MATIC/USD     | [0xa48c56e48A71966676d0D113EAEbe6BE61661F18](https://gnosisscan.io/address/0xa48c56e48A71966676d0D113EAEbe6BE61661F18#code) |
| MKR/USD       | [0x67ffF0C6abD2a36272870B1E8FE42CC8E8D5ec4d](https://gnosisscan.io/address/0x67ffF0C6abD2a36272870B1E8FE42CC8E8D5ec4d#code) |
| OP/USD        | [0xfadF055f6333a4ab435D2D248aEe6617345A4782](https://gnosisscan.io/address/0xfadF055f6333a4ab435D2D248aEe6617345A4782#code) |
| RETH/USD      | [0xEE02370baC10b3AC3f2e9eebBf8f3feA1228D263](https://gnosisscan.io/address/0xEE02370baC10b3AC3f2e9eebBf8f3feA1228D263#code) |
| SDAI/DAI      | [0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491](https://gnosisscan.io/address/0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491#code) |
| SDAI/ETH      | [0x05aB94eD168b5d18B667cFcbbA795789C750D893](https://gnosisscan.io/address/0x05aB94eD168b5d18B667cFcbbA795789C750D893#code) |
| SDAI/MATIC    | [0x2f0e0dE1F8c11d2380dE093ED15cA6cE07653cbA](https://gnosisscan.io/address/0x2f0e0dE1F8c11d2380dE093ED15cA6cE07653cbA#code) |
| SNX/USD       | [0xD20f1eC72bA46b6126F96c5a91b6D3372242cE98](https://gnosisscan.io/address/0xD20f1eC72bA46b6126F96c5a91b6D3372242cE98#code) |
| SOL/USD       | [0x4D1e6f39bbfcce8b471171b8431609b83f3a096D](https://gnosisscan.io/address/0x4D1e6f39bbfcce8b471171b8431609b83f3a096D#code) |
| UNI/USD       | [0x2aFF768F5d6FC63fA456B062e02f2049712a1ED5](https://gnosisscan.io/address/0x2aFF768F5d6FC63fA456B062e02f2049712a1ED5#code) |
| USDC/USD      | [0x1173da1811a311234e7Ab0A33B4B7B646Ff42aEC](https://gnosisscan.io/address/0x1173da1811a311234e7Ab0A33B4B7B646Ff42aEC#code) |
| USDT/USD      | [0x0bd446021Ab95a2ABd638813f9bDE4fED3a5779a](https://gnosisscan.io/address/0x0bd446021Ab95a2ABd638813f9bDE4fED3a5779a#code) |
| WBTC/USD      | [0xA7226d85CE5F0DE97DCcBDBfD38634D6391d0584](https://gnosisscan.io/address/0xA7226d85CE5F0DE97DCcBDBfD38634D6391d0584#code) |
| WSTETH/USD    | [0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab](https://gnosisscan.io/address/0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab#code) |
| YFI/USD       | [0x0893EcE705639112C1871DcE88D87D81540D0199](https://gnosisscan.io/address/0x0893EcE705639112C1871DcE88D87D81540D0199#code) |

## General Setup Enquires

- Foundry Setup:
  - [https://getfoundry.sh](https://getfoundry.sh/)
- Sepolia ETH:
  - [https://www.infura.io/faucet/sepolia](https://www.infura.io/faucet/sepolia)
  - [https://sepoliafaucet.com/](https://sepoliafaucet.com/)
- Sepolia RPC:
  - [chainlist.org](https://chainlist.org/chain/11155111)
- Create A Test Wallet:
  - `cast new wallet`

## More on Scribe

- [Eth Magician Post](https://ethereum-magicians.org/t/an-efficient-schnorr-multi-signature-implementation/15510)
- [Twitter Thread](https://twitter.com/merkleplant_eth/status/1693652385980379593)
- [Scribe's docs](https://github.com/chronicleprotocol/scribe/blob/main/docs/Scribe.md)