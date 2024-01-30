---
sidebar_position: 2
---

# ETH Denver Hackathon Guide

Welcome to the ETH Denver Hackathon! This document serves as a guide for integrating Chronicle Oracles into your hackathon projects. Our team is here to assist you.

For any inquiries, feel free to reach out at our booth, join our Discord, or walk up to anyone wearing a Chronicle hoodie


## Chronicle Oracle Integration Bounties

### Most Innovative Chronicle Oracle Integration

🏆 Reward 🏆: 

- 🥇 1st: $2500
- 🥈 2nd: $1500
- 🥉 3rd: $1000

The prize will go to the top three teams with the most innovative integration of Scribe, Chronicle's new Schnorr Oracle. Supported chains include: Ethereum Sepolia, Polygon zkEVM testnet, and Gnosis Chain Mainnet; solutions must utilize the Oracle smart contract. The innovation should stem from the use case of the Oracle, i.e., The idea or utility of the project.

### Qualification rules:

Must utilize the Oracle smart contract on one of the supported blockchains

## Chronicle Protocol Contracts

### Scribe

Scribe is an efficient Schnorr multi-signature-based Oracle with enhanced gas efficiency. Providing nearly constant gas costs on Layer 2s and on Layer 1s, Scribe boasts of fixed gas costs, leading to substantial savings—over 60% relative to competing Oracles and an impressive 80% compared to Chainlink. This approach to gas management significantly boosts the scalability of the Oracle.

The Chronicle Scribe Oracle interface is plug-and-play with Chainlink and Maker Oracles, providing a smooth transition for developers used to these platforms.

All data delivered by a Chronicle Oracle on mainnet is verifiable via The [Chronicle Dashboard](https://chroniclelabs.org/dashboard).

Scribe Public Repo: [https://github.com/chronicleprotocol/scribe](https://github.com/chronicleprotocol/scribe)

### CAST

Cast is a command-line interface (CLI) tool designed by the Foundry team to streamline your interaction with the Ethereum Virtual Machine (EVM). Whether you're making smart contract calls, sending transactions, or retrieving any chain data, cast can help with that. You can read more [here](https://book.getfoundry.sh/reference/cast/cast).

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

:::info
You can view all the smart contract adresses below:👇
:::

<details>
<summary>Smart Contract Addresses on Sepolia network</summary>

| Contract Name | Contract Address on Sepolia network                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| SelfKisser_1 | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://sepolia.etherscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d) |
| Chronicle_AVAX_USD_3 | [0x7F56CdaAdB1c5230Fcab3E20D3A15BDE26cb6C2b](https://sepolia.etherscan.io/address/0x7F56CdaAdB1c5230Fcab3E20D3A15BDE26cb6C2b) |
| Chronicle_USDC_USD_3 | [0xb34d784dc8E7cD240Fe1F318e282dFdD13C389AC](https://sepolia.etherscan.io/address/0xb34d784dc8E7cD240Fe1F318e282dFdD13C389AC) |
| Chronicle_RETH_USD_3 | [0x6454753E0909E7F6476BfB78BD6BDC281197A5be](https://sepolia.etherscan.io/address/0x6454753E0909E7F6476BfB78BD6BDC281197A5be) |
| Chronicle_WUSDM_USDM_1 | [0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56](https://sepolia.etherscan.io/address/0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56) |
| Chronicle_LINK_USD_3 | [0x260c182f0054BF244a8e38d7C475b6d9f67AeAc1](https://sepolia.etherscan.io/address/0x260c182f0054BF244a8e38d7C475b6d9f67AeAc1) |
| Chronicle_ARB_USD_3 | [0x9Bf0C1ba75C9d7b6Bf051cc7f7dCC7bfE5274302](https://sepolia.etherscan.io/address/0x9Bf0C1ba75C9d7b6Bf051cc7f7dCC7bfE5274302) |
| Chronicle_YFI_USD_3 | [0xdF54aBf0eF88aB7fFf22e21eDD9AE1DA89A7DefC](https://sepolia.etherscan.io/address/0xdF54aBf0eF88aB7fFf22e21eDD9AE1DA89A7DefC) |
| Chronicle_DAI_USD_3 | [0xaf900d10f197762794C41dac395C5b8112eD13E1](https://sepolia.etherscan.io/address/0xaf900d10f197762794C41dac395C5b8112eD13E1) |
| SchnorrVerifier_1 | [0xA4f8ccaae4e23973b84Db7507Bef23FB80054b0a](https://sepolia.etherscan.io/address/0xA4f8ccaae4e23973b84Db7507Bef23FB80054b0a) |
| Chronicle_USDM_USD_1 | [0xe971B2aF139Ad803656533059Bc028b61C00F67F](https://sepolia.etherscan.io/address/0xe971B2aF139Ad803656533059Bc028b61C00F67F) |
| Chronicle_WSTETH_USD_3 | [0x89822dd9D74dF50BFba8764DC9bE25E9B8d554A1](https://sepolia.etherscan.io/address/0x89822dd9D74dF50BFba8764DC9bE25E9B8d554A1) |
| Chronicle_ETH_BTC_3 | [0xf95d3B8Ae567F4AA9BEC822931976c117cdf836a](https://sepolia.etherscan.io/address/0xf95d3B8Ae567F4AA9BEC822931976c117cdf836a) |
| Chronicle_BTC_USD_3 | [0x6edF073c4Bd934d3916AA6dDAC4255ccB2b7c0f0](https://sepolia.etherscan.io/address/0x6edF073c4Bd934d3916AA6dDAC4255ccB2b7c0f0) |
| Chronicle_WBTC_USD_3 | [0xdc3ef3E31AdAe791d9D5054B575f7396851Fa432](https://sepolia.etherscan.io/address/0xdc3ef3E31AdAe791d9D5054B575f7396851Fa432) |
| Chronicle_ETHX_USD_1 | [0xc6639C0591d632Bf689ceab617A0377072e7f524](https://sepolia.etherscan.io/address/0xc6639C0591d632Bf689ceab617A0377072e7f524) |
| Chronicle_SOL_USD_3 | [0x39eC7D193D1Aa282b8ecCAC9B791b09c75D30491](https://sepolia.etherscan.io/address/0x39eC7D193D1Aa282b8ecCAC9B791b09c75D30491) |
| Chronicle_WSTETH_ETH_3 | [0x2d95B1862279771fcE76823CD777384D8598fB48](https://sepolia.etherscan.io/address/0x2d95B1862279771fcE76823CD777384D8598fB48) |
| Chronicle_GNO_USD_3 | [0x9C9e56AE479f82bcF229F2200420106C93C0A24e](https://sepolia.etherscan.io/address/0x9C9e56AE479f82bcF229F2200420106C93C0A24e) |
| Chronicle_OP_USD_3 | [0x1Be54a524226fc44565747FE221157f4cAE71B80](https://sepolia.etherscan.io/address/0x1Be54a524226fc44565747FE221157f4cAE71B80) |
| Chronicle_WUSDM_USD_1 | [0x6d10de3640ab2F11B1102Ae72C06BB497E5E859b](https://sepolia.etherscan.io/address/0x6d10de3640ab2F11B1102Ae72C06BB497E5E859b) |
| Chronicle_LDO_USD_3 | [0x4cD2a8c3Fd6329029461A95784051A553f31eb29](https://sepolia.etherscan.io/address/0x4cD2a8c3Fd6329029461A95784051A553f31eb29) |
| Chronicle_SD_USD_1 | [0x0939F04AbA985E3861C4D7AD9fbD66b976Dd47a8](https://sepolia.etherscan.io/address/0x0939F04AbA985E3861C4D7AD9fbD66b976Dd47a8) |
| Chronicle_USDT_USD_3 | [0x8c852EEC6ae356FeDf5d7b824E254f7d94Ac6824](https://sepolia.etherscan.io/address/0x8c852EEC6ae356FeDf5d7b824E254f7d94Ac6824) |
| Chronicle_CRV_USD_3 | [0xDcda58cAAC639C20aed270859109f03E9832a13A](https://sepolia.etherscan.io/address/0xDcda58cAAC639C20aed270859109f03E9832a13A) |
| Chronicle_SNX_USD_3 | [0x1eFD788C634C59e2c7507b523B3eEfD6CaaE0c4f](https://sepolia.etherscan.io/address/0x1eFD788C634C59e2c7507b523B3eEfD6CaaE0c4f) |
| Chronicle_BNB_USD_3 | [0xE4A1EED38F972d05794C740Eae965A7Daa6Ab28c](https://sepolia.etherscan.io/address/0xE4A1EED38F972d05794C740Eae965A7Daa6Ab28c) |
| Chronicle_CRVUSD_USD_1 | [0x3de6bEc5d5FE063fB23F36E363182AB353AbC56E](https://sepolia.etherscan.io/address/0x3de6bEc5d5FE063fB23F36E363182AB353AbC56E) |
| Chronicle_RETH_ETH_1 | [0xAE888F70d319d9ab9318B2326AEf97Bde2c1F96f](https://sepolia.etherscan.io/address/0xAE888F70d319d9ab9318B2326AEf97Bde2c1F96f) |
| Chronicle_AAVE_USD_3 | [0x3F982a82B4B6bd09b1DAF832140F166b595FEF7F](https://sepolia.etherscan.io/address/0x3F982a82B4B6bd09b1DAF832140F166b595FEF7F) |
| Chronicle_MNT_USD_1 | [0x90f13128715157f6f2708b3e379a345a330C598c](https://sepolia.etherscan.io/address/0x90f13128715157f6f2708b3e379a345a330C598c) |
| Chronicle_MATIC_USD_3 | [0xEa00861Dc00eBd246F6E51E52c28aBd9062bc09F](https://sepolia.etherscan.io/address/0xEa00861Dc00eBd246F6E51E52c28aBd9062bc09F) |
| Chronicle_UNI_USD_3 | [0x0E9e54244F6585a71d0d1035E7625849B516C817](https://sepolia.etherscan.io/address/0x0E9e54244F6585a71d0d1035E7625849B516C817) |
| Chronicle_SDAI_DAI_3 | [0x0B20Fd1c09452FC3F214667073EA8975aB2c55EA](https://sepolia.etherscan.io/address/0x0B20Fd1c09452FC3F214667073EA8975aB2c55EA) |
| Chronicle_ETH_USD_3 | [0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603](https://sepolia.etherscan.io/address/0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603) |
| Chronicle_IBTA_USD_3 | [0x92b7Ab73BA53Bc64b57194242e3a36A6F1209A70](https://sepolia.etherscan.io/address/0x92b7Ab73BA53Bc64b57194242e3a36A6F1209A70) |
| Chronicle_MKR_USD_3 | [0xE55afC31AFA140597c581Bc32057BF393ba97c5A](https://sepolia.etherscan.io/address/0xE55afC31AFA140597c581Bc32057BF393ba97c5A) |
</details>

<details>
<summary>Smart Contract Addresses on Polygon zkEVM Testnet</summary>

| Contract Name | Contract Address on zkEVM Testnet                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| SelfKisser_1 | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://testnet-zkevm.polygonscan.com/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d) |
| Chronicle_AVAX_USD_3 | [0xDcd4c95f9D1f660E31fD516B936388fc9D4117Ea](https://testnet-zkevm.polygonscan.com/address/0xDcd4c95f9D1f660E31fD516B936388fc9D4117Ea) |
| Chronicle_USDC_USD_3 | [0xb34d784dc8E7cD240Fe1F318e282dFdD13C389AC](https://testnet-zkevm.polygonscan.com/address/0xb34d784dc8E7cD240Fe1F318e282dFdD13C389AC) |
| Chronicle_RETH_USD_3 | [0x6454753E0909E7F6476BfB78BD6BDC281197A5be](https://testnet-zkevm.polygonscan.com/address/0x6454753E0909E7F6476BfB78BD6BDC281197A5be) |
| Chronicle_WUSDM_USDM_1 | [0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56](https://testnet-zkevm.polygonscan.com/address/0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56) |
| Chronicle_LINK_USD_3 | [0x260c182f0054BF244a8e38d7C475b6d9f67AeAc1](https://testnet-zkevm.polygonscan.com/address/0x260c182f0054BF244a8e38d7C475b6d9f67AeAc1) |
| Chronicle_ARB_USD_3 | [0x9Bf0C1ba75C9d7b6Bf051cc7f7dCC7bfE5274302](https://testnet-zkevm.polygonscan.com/address/0x9Bf0C1ba75C9d7b6Bf051cc7f7dCC7bfE5274302) |
| Chronicle_YFI_USD_3 | [0xdF54aBf0eF88aB7fFf22e21eDD9AE1DA89A7DefC](https://testnet-zkevm.polygonscan.com/address/0xdF54aBf0eF88aB7fFf22e21eDD9AE1DA89A7DefC) |
| Chronicle_DAI_USD_3 | [0xaf900d10f197762794C41dac395C5b8112eD13E1](https://testnet-zkevm.polygonscan.com/address/0xaf900d10f197762794C41dac395C5b8112eD13E1) |
| Chronicle_WSTETH_USD_3 | [0x89822dd9D74dF50BFba8764DC9bE25E9B8d554A1](https://testnet-zkevm.polygonscan.com/address/0x89822dd9D74dF50BFba8764DC9bE25E9B8d554A1) |
| Chronicle_ETH_BTC_3 | [0xf95d3B8Ae567F4AA9BEC822931976c117cdf836a](https://testnet-zkevm.polygonscan.com/address/0xf95d3B8Ae567F4AA9BEC822931976c117cdf836a) |
| Chronicle_BTC_USD_3 | [0x6edF073c4Bd934d3916AA6dDAC4255ccB2b7c0f0](https://testnet-zkevm.polygonscan.com/address/0x6edF073c4Bd934d3916AA6dDAC4255ccB2b7c0f0) |
| Chronicle_WBTC_USD_3 | [0xdc3ef3E31AdAe791d9D5054B575f7396851Fa432](https://testnet-zkevm.polygonscan.com/address/0xdc3ef3E31AdAe791d9D5054B575f7396851Fa432) |
| Chronicle_SOL_USD_3 | [0x39eC7D193D1Aa282b8ecCAC9B791b09c75D30491](https://testnet-zkevm.polygonscan.com/address/0x39eC7D193D1Aa282b8ecCAC9B791b09c75D30491) |
| Chronicle_WSTETH_ETH_3 | [0x2d95B1862279771fcE76823CD777384D8598fB48](https://testnet-zkevm.polygonscan.com/address/0x2d95B1862279771fcE76823CD777384D8598fB48) |
| Chronicle_GNO_USD_3 | [0x9C9e56AE479f82bcF229F2200420106C93C0A24e](https://testnet-zkevm.polygonscan.com/address/0x9C9e56AE479f82bcF229F2200420106C93C0A24e) |
| Chronicle_OP_USD_3 | [0x1Be54a524226fc44565747FE221157f4cAE71B80](https://testnet-zkevm.polygonscan.com/address/0x1Be54a524226fc44565747FE221157f4cAE71B80) |
| Chronicle_WUSDM_USD_1 | [0x6d10de3640ab2F11B1102Ae72C06BB497E5E859b](https://testnet-zkevm.polygonscan.com/address/0x6d10de3640ab2F11B1102Ae72C06BB497E5E859b) |
| Chronicle_LDO_USD_3 | [0x4cD2a8c3Fd6329029461A95784051A553f31eb29](https://testnet-zkevm.polygonscan.com/address/0x4cD2a8c3Fd6329029461A95784051A553f31eb29) |
| Chronicle_USDT_USD_3 | [0x8c852EEC6ae356FeDf5d7b824E254f7d94Ac6824](https://testnet-zkevm.polygonscan.com/address/0x8c852EEC6ae356FeDf5d7b824E254f7d94Ac6824) |
| Chronicle_CRV_USD_3 | [0xDcda58cAAC639C20aed270859109f03E9832a13A](https://testnet-zkevm.polygonscan.com/address/0xDcda58cAAC639C20aed270859109f03E9832a13A) |
| Chronicle_SNX_USD_3 | [0x1eFD788C634C59e2c7507b523B3eEfD6CaaE0c4f](https://testnet-zkevm.polygonscan.com/address/0x1eFD788C634C59e2c7507b523B3eEfD6CaaE0c4f) |
| Chronicle_BNB_USD_3 | [0xE4A1EED38F972d05794C740Eae965A7Daa6Ab28c](https://testnet-zkevm.polygonscan.com/address/0xE4A1EED38F972d05794C740Eae965A7Daa6Ab28c) |
| Chronicle_AAVE_USD_3 | [0x3F982a82B4B6bd09b1DAF832140F166b595FEF7F](https://testnet-zkevm.polygonscan.com/address/0x3F982a82B4B6bd09b1DAF832140F166b595FEF7F) |
| Chronicle_MATIC_USD_3 | [0xEa00861Dc00eBd246F6E51E52c28aBd9062bc09F](https://testnet-zkevm.polygonscan.com/address/0xEa00861Dc00eBd246F6E51E52c28aBd9062bc09F) |
| Chronicle_UNI_USD_3 | [0x0E9e54244F6585a71d0d1035E7625849B516C817](https://testnet-zkevm.polygonscan.com/address/0x0E9e54244F6585a71d0d1035E7625849B516C817) |
| Chronicle_SDAI_DAI_3 | [0x0B20Fd1c09452FC3F214667073EA8975aB2c55EA](https://testnet-zkevm.polygonscan.com/address/0x0B20Fd1c09452FC3F214667073EA8975aB2c55EA) |
| Chronicle_ETH_USD_3 | [0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603](https://testnet-zkevm.polygonscan.com/address/0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603) |
| Chronicle_IBTA_USD_3 | [0x92b7Ab73BA53Bc64b57194242e3a36A6F1209A70](https://testnet-zkevm.polygonscan.com/address/0x92b7Ab73BA53Bc64b57194242e3a36A6F1209A70) |
| Chronicle_MKR_USD_3 | [0xE55afC31AFA140597c581Bc32057BF393ba97c5A](https://testnet-zkevm.polygonscan.com/address/0xE55afC31AFA140597c581Bc32057BF393ba97c5A) |
</details>

<details>
<summary>Smart Contract Addresses on Gnosis Mainnet</summary>

| Contract Name | Contract Address on Gnosis Mainnet                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SelfKisser_1 | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://gnosisscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d) |
| Chronicle_WBTC_USD_2 | [0x39C899178F4310705b12888886884b361CeF26C7](https://gnosisscan.io/address/0x39C899178F4310705b12888886884b361CeF26C7) |
| Chronicle_BTC_USD_2 | [0xdD5232e76798BEACB69eC310d9b0864b56dD08dD](https://gnosisscan.io/address/0xdD5232e76798BEACB69eC310d9b0864b56dD08dD) |
| Chronicle_ETH_BTC_2 | [0x4E866Ac929374096Afc2715C4e9c40D581A4067e](https://gnosisscan.io/address/0x4E866Ac929374096Afc2715C4e9c40D581A4067e])|
| Chronicle_WSTETH_USD_2 | [0x8Ba43F8Fa2fC13D7EEDCeb9414CDbB6643483C34](https://gnosisscan.io/address/0x8Ba43F8Fa2fC13D7EEDCeb9414CDbB6643483C34) |
| Chronicle_WUSDM_USDM_1 | [0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56](https://gnosisscan.io/address/0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56) |
| Chronicle_YFI_USD_2 | [0x16978358A8D6C7C8cA758F433685A5E8D988dfD4](https://gnosisscan.io/address/0x16978358A8D6C7C8cA758F433685A5E8D988dfD4) |
| Chronicle_DAI_USD_2 | [0x16984396EE0903782Ba8e6ebfA7DD356B0cA3841](https://gnosisscan.io/address/0x16984396EE0903782Ba8e6ebfA7DD356B0cA3841) |
| Chronicle_ARB_USD_2 | [0x7dE6Df8E4c057eD9baE215F347A0339D603B09B2](https://gnosisscan.io/address/0x7dE6Df8E4c057eD9baE215F347A0339D603B09B2) |
| Chronicle_LINK_USD_2 | [0x4EDdF05CfAd20f1E39ed4CB067bdfa831dAeA9fE](https://gnosisscan.io/address/0x4EDdF05CfAd20f1E39ed4CB067bdfa831dAeA9fE) |
| Chronicle_RETH_USD_2 | [0xEff79d34f24Bb36eD8FB6c4CbaD5De293fdCf66F](https://gnosisscan.io/address/0xEff79d34f24Bb36eD8FB6c4CbaD5De293fdCf66F) |
| Chronicle_USDC_USD_2 | [0xfef7a1Eb17A095E1bd7723cBB1092caba34f9b1C](https://gnosisscan.io/address/0xfef7a1Eb17A095E1bd7723cBB1092caba34f9b1C) |
| Chronicle_AVAX_USD_2 | [0xD419f76594d411BD94c71FB0a78c80f71A2290Ce](https://gnosisscan.io/address/0xD419f76594d411BD94c71FB0a78c80f71A2290Ce) |
| Chronicle_SDAI_ETH_2 | [0x20A32F633c1D26fC42A15dc7e6bd12Bf0468cAb1](https://gnosisscan.io/address/0x20A32F633c1D26fC42A15dc7e6bd12Bf0468cAb1) |
| Chronicle_LDO_USD_2 | [0x3aeF92049C9401094A9f75259430F4771143F0C3](https://gnosisscan.io/address/0x3aeF92049C9401094A9f75259430F4771143F0C3) |
| Chronicle_OP_USD_2 | [0x1Ae491D618A667a44D48E0b0BE2Cc0cDBF269BC5](https://gnosisscan.io/address/0x1Ae491D618A667a44D48E0b0BE2Cc0cDBF269BC5) |
| Chronicle_GNO_USD_2 | [0xBcC6BFFde7888A3008f17c88D5a5e5F0D7462cf9](https://gnosisscan.io/address/0xBcC6BFFde7888A3008f17c88D5a5e5F0D7462cf9) |
| Chronicle_SOL_USD_2 | [0x11ceEcca4d49f596E0Df781Af237CDE741ad2106](https://gnosisscan.io/address/0x11ceEcca4d49f596E0Df781Af237CDE741ad2106) |
| Chronicle_BNB_USD_2 | [0x6931FB9C54958f77873ceC4536EaC56F561d2dC4](https://gnosisscan.io/address/0x6931FB9C54958f77873ceC4536EaC56F561d2dC4) |
| Chronicle_SDAI_MATIC_2 | [0x0A154ec276972dBFEA01b13711408Ea6e72Ac36B](https://gnosisscan.io/address/0x0A154ec276972dBFEA01b13711408Ea6e72Ac36B) |
| Chronicle_WUSDM_USD_3 | [0xa6667cA488616F86426cDCe37E65F4788d0bD592](https://gnosisscan.io/address/0xa6667cA488616F86426cDCe37E65F4788d0bD592) |
| Chronicle_SNX_USD_2 | [0x6Ab51f7E684923CE051e784D382A470b0fa834Be](https://gnosisscan.io/address/0x6Ab51f7E684923CE051e784D382A470b0fa834Be])|
| Chronicle_CRV_USD_2 | [0x7B6E473f1CeB8b7100C9F7d58879e7211Bc48f32](https://gnosisscan.io/address/0x7B6E473f1CeB8b7100C9F7d58879e7211Bc48f32) |
| Chronicle_USDT_USD_2 | [0xF78A4e093Cd2D9F57Bb363Cc4edEBcf9bF3325ba](https://gnosisscan.io/address/0xF78A4e093Cd2D9F57Bb363Cc4edEBcf9bF3325ba) |
| Chronicle_MKR_USD_2 | [0xE61A66f737c32d5Ac8cDea6982635B80447e9404](https://gnosisscan.io/address/0xE61A66f737c32d5Ac8cDea6982635B80447e9404) |
| Chronicle_IBTA_USD_2 | [0xc52539EfbA58a521d69494D86fc47b9E71D32997](https://gnosisscan.io/address/0xc52539EfbA58a521d69494D86fc47b9E71D32997) |
| Chronicle_ETH_USD_2 | [0x90430C5b8045a1E2A0Fc4e959542a0c75b576439](https://gnosisscan.io/address/0x90430C5b8045a1E2A0Fc4e959542a0c75b576439])|
| Chronicle_SDAI_DAI_2 | [0xB6EE756124e88e12585981DdDa9E6E3bf3C4487D](https://gnosisscan.io/address/0xB6EE756124e88e12585981DdDa9E6E3bf3C4487D) |
| Chronicle_UNI_USD_2 | [0xfE051Bc90D3a2a825fA5172181f9124f8541838c](https://gnosisscan.io/address/0xfE051Bc90D3a2a825fA5172181f9124f8541838c) |
| Chronicle_MATIC_USD_2 | [0x06997AadB30d51eAdBAA7836f7a0F177474fc235](https://gnosisscan.io/address/0x06997AadB30d51eAdBAA7836f7a0F177474fc235) |
| Chronicle_DSR_RATE_2 | [0x09f3BfC6b46526045De5F5BE64f5CCe121bbf8B3](https://gnosisscan.io/address/0x09f3BfC6b46526045De5F5BE64f5CCe121bbf8B3) |
| Chronicle_AAVE_USD_2 | [0xED4C91FC28B48E2Cf98b59668408EAeE44665511](https://gnosisscan.io/address/0xED4C91FC28B48E2Cf98b59668408EAeE44665511) |
</details>

<details>
<summary>Smart Contract Addresses on Mantle Testnet</summary>

| Contract Name | Contract Address on Mantle Mainnet                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
|Chronicle_AAVE_USD_1  | [0xa38C2B5408Eb1DCeeDBEC5d61BeD580589C6e717](https://explorer.testnet.mantle.xyz/address/0xa38C2B5408Eb1DCeeDBEC5d61BeD580589C6e717) |
|Chronicle_WUSDM_USDM_1  | [0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56](https://explorer.testnet.mantle.xyz/address/0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56) |
|Chronicle_SDAI_DAI_1  | [0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491](https://explorer.testnet.mantle.xyz/address/0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491) |
|Chronicle_UNI_USD_1  | [0x2aFF768F5d6FC63fA456B062e02f2049712a1ED5](https://explorer.testnet.mantle.xyz/address/0x2aFF768F5d6FC63fA456B062e02f2049712a1ED5) |
|Chronicle_MATIC_USD_1  | [0xa48c56e48A71966676d0D113EAEbe6BE61661F18](https://explorer.testnet.mantle.xyz/address/0xa48c56e48A71966676d0D113EAEbe6BE61661F18) |
|Chronicle_DSR_RATE_1  | [0x729af3A41AE9E707e7AE421569C4b9c632B66a0c](https://explorer.testnet.mantle.xyz/address/0x729af3A41AE9E707e7AE421569C4b9c632B66a0c) |
|Chronicle_MKR_USD_1  | [0x67ffF0C6abD2a36272870B1E8FE42CC8E8D5ec4d](https://explorer.testnet.mantle.xyz/address/0x67ffF0C6abD2a36272870B1E8FE42CC8E8D5ec4d) |
|Chronicle_IBTA_USD_1  | [0x07487b0Bf28801ECD15BF09C13e32FBc87572e81](https://explorer.testnet.mantle.xyz/address/0x07487b0Bf28801ECD15BF09C13e32FBc87572e81) |
|Chronicle_ETH_USD_1  | [0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660](https://explorer.testnet.mantle.xyz/address/0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660) |
|Chronicle_SDAI_MATIC_1  | [0x2f0e0dE1F8c11d2380dE093ED15cA6cE07653cbA](https://explorer.testnet.mantle.xyz/address/0x2f0e0dE1F8c11d2380dE093ED15cA6cE07653cbA) |
|Chronicle_SNX_USD_1  | [0xD20f1eC72bA46b6126F96c5a91b6D3372242cE98](https://explorer.testnet.mantle.xyz/address/0xD20f1eC72bA46b6126F96c5a91b6D3372242cE98) |
|Chronicle_CRV_USD_1  | [0xf29a932ae56bB96CcACF8d1f2Da9028B01c8F030](https://explorer.testnet.mantle.xyz/address/0xf29a932ae56bB96CcACF8d1f2Da9028B01c8F030) |
|Chronicle_WUSDM_USD_1  | [0x6d10de3640ab2F11B1102Ae72C06BB497E5E859b](https://explorer.testnet.mantle.xyz/address/0x6d10de3640ab2F11B1102Ae72C06BB497E5E859b) |
|Chronicle_BNB_USD_1  | [0x26EE3E8b618227C1B735D8D884d52A852410019f](https://explorer.testnet.mantle.xyz/address/0x26EE3E8b618227C1B735D8D884d52A852410019f) |
|Chronicle_SOL_USD_1  | [0x4D1e6f39bbfcce8b471171b8431609b83f3a096D](https://explorer.testnet.mantle.xyz/address/0x4D1e6f39bbfcce8b471171b8431609b83f3a096D) |
|Chronicle_OP_USD_1  | [0xfadF055f6333a4ab435D2D248aEe6617345A4782](https://explorer.testnet.mantle.xyz/address/0xfadF055f6333a4ab435D2D248aEe6617345A4782) |
|Chronicle_GNO_USD_1  | [0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8](https://explorer.testnet.mantle.xyz/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8) |
|Chronicle_LDO_USD_1  | [0xa53dc5B100f0e4aB593f2D8EcD3c5932EE38215E](https://explorer.testnet.mantle.xyz/address/0xa53dc5B100f0e4aB593f2D8EcD3c5932EE38215E) |
|Chronicle_SDAI_ETH_1  | [0x05aB94eD168b5d18B667cFcbbA795789C750D893](https://explorer.testnet.mantle.xyz/address/0x05aB94eD168b5d18B667cFcbbA795789C750D893) |
|Chronicle_AVAX_USD_1  | [0x78C8260AF7C8D0d17Cf3BA91F251E9375A389688](https://explorer.testnet.mantle.xyz/address/0x78C8260AF7C8D0d17Cf3BA91F251E9375A389688) |
|Chronicle_DAI_USD_1  | [0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4](https://explorer.testnet.mantle.xyz/address/0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4) |
|Chronicle_YFI_USD_1  | [0x0893EcE705639112C1871DcE88D87D81540D0199](https://explorer.testnet.mantle.xyz/address/0x0893EcE705639112C1871DcE88D87D81540D0199) |
|Chronicle_ARB_USD_1  | [0x579BfD0581beD0d18fBb0Ebab099328d451552DD](https://explorer.testnet.mantle.xyz/address/0x579BfD0581beD0d18fBb0Ebab099328d451552DD) |
|Chronicle_LINK_USD_1  | [0xecB89B57A60ac44E06ab1B767947c19b236760c3](https://explorer.testnet.mantle.xyz/address/0xecB89B57A60ac44E06ab1B767947c19b236760c3) |
|Chronicle_RETH_USD_1  | [0xEE02370baC10b3AC3f2e9eebBf8f3feA1228D263](https://explorer.testnet.mantle.xyz/address/0xEE02370baC10b3AC3f2e9eebBf8f3feA1228D263) |
|Chronicle_USDC_USD_1  | [0x1173da1811a311234e7Ab0A33B4B7B646Ff42aEC](https://explorer.testnet.mantle.xyz/address/0x1173da1811a311234e7Ab0A33B4B7B646Ff42aEC) |
|Chronicle_WSTETH_USD_1  | [0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab](https://explorer.testnet.mantle.xyz/address/0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab) |
|Chronicle_WBTC_USD_1  | [0xA7226d85CE5F0DE97DCcBDBfD38634D6391d0584](https://explorer.testnet.mantle.xyz/address/0xA7226d85CE5F0DE97DCcBDBfD38634D6391d0584) |
|Chronicle_BTC_USD_1  | [0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c](https://explorer.testnet.mantle.xyz/address/0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c) |
|Chronicle_ETH_BTC_1  | [0x1804969b296E89C1ddB1712fA99816446956637e](https://explorer.testnet.mantle.xyz/address/0x1804969b296E89C1ddB1712fA99816446956637e) |
</details>


<details>
<summary>Smart Contract Addresses on Scroll Sepolia</summary>

| Contract Name | Contract Address on SCR Sepolia Mainnet                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Chronicle_AAVE_USD_1 | [0xa38C2B5408Eb1DCeeDBEC5d61BeD580589C6e717](https://sepolia.scrollscan.com/address/0xa38C2B5408Eb1DCeeDBEC5d61BeD580589C6e717) |
| Chronicle_SDAI_DAI_1 | [0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491](https://sepolia.scrollscan.com/address/0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491) |
| Chronicle_UNI_USD_1 | [0x2aFF768F5d6FC63fA456B062e02f2049712a1ED5](https://sepolia.scrollscan.com/address/0x2aFF768F5d6FC63fA456B062e02f2049712a1ED5) |
| Chronicle_MATIC_USD_1 | [0xa48c56e48A71966676d0D113EAEbe6BE61661F18](https://sepolia.scrollscan.com/address/0xa48c56e48A71966676d0D113EAEbe6BE61661F18) |
| Chronicle_MKR_USD_1 | [0x67ffF0C6abD2a36272870B1E8FE42CC8E8D5ec4d](https://sepolia.scrollscan.com/address/0x67ffF0C6abD2a36272870B1E8FE42CC8E8D5ec4d) |
| Chronicle_IBTA_USD_1 | [0x07487b0Bf28801ECD15BF09C13e32FBc87572e81](https://sepolia.scrollscan.com/address/0x07487b0Bf28801ECD15BF09C13e32FBc87572e81) |
| Chronicle_ETH_USD_1 | [0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660](https://sepolia.scrollscan.com/address/0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660) |
| Chronicle_SNX_USD_1 | [0xD20f1eC72bA46b6126F96c5a91b6D3372242cE98](https://sepolia.scrollscan.com/address/0xD20f1eC72bA46b6126F96c5a91b6D3372242cE98) |
| Chronicle_CRV_USD_1 | [0xf29a932ae56bB96CcACF8d1f2Da9028B01c8F030](https://sepolia.scrollscan.com/address/0xf29a932ae56bB96CcACF8d1f2Da9028B01c8F030) |
| Chronicle_USDT_USD_1 | [0x0bd446021Ab95a2ABd638813f9bDE4fED3a5779a](https://sepolia.scrollscan.com/address/0x0bd446021Ab95a2ABd638813f9bDE4fED3a5779a) |
| Chronicle_BNB_USD_1 | [0x26EE3E8b618227C1B735D8D884d52A852410019f](https://sepolia.scrollscan.com/address/0x26EE3E8b618227C1B735D8D884d52A852410019f) |
| Chronicle_WSTETH_ETH_1 | [0x40BE3f9D43DbdadE162F04CC97A29603D88F50E4](https://sepolia.scrollscan.com/address/0x40BE3f9D43DbdadE162F04CC97A29603D88F50E4) |
| Chronicle_SOL_USD_1 | [0x4D1e6f39bbfcce8b471171b8431609b83f3a096D](https://sepolia.scrollscan.com/address/0x4D1e6f39bbfcce8b471171b8431609b83f3a096D) |
| Chronicle_OP_USD_1 | [0xfadF055f6333a4ab435D2D248aEe6617345A4782](https://sepolia.scrollscan.com/address/0xfadF055f6333a4ab435D2D248aEe6617345A4782) |
| Chronicle_GNO_USD_1 | [0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8](https://sepolia.scrollscan.com/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8) |
| Chronicle_LDO_USD_1 | [0xa53dc5B100f0e4aB593f2D8EcD3c5932EE38215E](https://sepolia.scrollscan.com/address/0xa53dc5B100f0e4aB593f2D8EcD3c5932EE38215E) |
| Chronicle_AVAX_USD_1 | [0x78C8260AF7C8D0d17Cf3BA91F251E9375A389688](https://sepolia.scrollscan.com/address/0x78C8260AF7C8D0d17Cf3BA91F251E9375A389688) |
| Chronicle_DAI_USD_1 | [0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4](https://sepolia.scrollscan.com/address/0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4) |
| Chronicle_YFI_USD_1 | [0x0893EcE705639112C1871DcE88D87D81540D0199](https://sepolia.scrollscan.com/address/0x0893EcE705639112C1871DcE88D87D81540D0199) |
| Chronicle_ARB_USD_1 | [0x579BfD0581beD0d18fBb0Ebab099328d451552DD](https://sepolia.scrollscan.com/address/0x579BfD0581beD0d18fBb0Ebab099328d451552DD) |
| Chronicle_LINK_USD_1 | [0xecB89B57A60ac44E06ab1B767947c19b236760c3](https://sepolia.scrollscan.com/address/0xecB89B57A60ac44E06ab1B767947c19b236760c3) |
| Chronicle_RETH_USD_1 | [0xEE02370baC10b3AC3f2e9eebBf8f3feA1228D263](https://sepolia.scrollscan.com/address/0xEE02370baC10b3AC3f2e9eebBf8f3feA1228D263) |
| Chronicle_USDC_USD_1 | [0x1173da1811a311234e7Ab0A33B4B7B646Ff42aEC](https://sepolia.scrollscan.com/address/0x1173da1811a311234e7Ab0A33B4B7B646Ff42aEC) |
| Chronicle_WSTETH_USD_1 | [0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab](https://sepolia.scrollscan.com/address/0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab) |
| Chronicle_WBTC_USD_1 | [0xA7226d85CE5F0DE97DCcBDBfD38634D6391d0584](https://sepolia.scrollscan.com/address/0xA7226d85CE5F0DE97DCcBDBfD38634D6391d0584) |
| Chronicle_BTC_USD_1 | [0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c](https://sepolia.scrollscan.com/address/0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c) |
| Chronicle_ETH_BTC_1 | [0x1804969b296E89C1ddB1712fA99816446956637e](https://sepolia.scrollscan.com/address/0x1804969b296E89C1ddB1712fA99816446956637e) |
</details>

<details>
<summary>Smart Contract Addresses on Zksync Sepolia</summary>

| Contract Name | Contract Address on Zksync Sepolia Mainnet                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Chronicle_AAVE_USD_1 | [0x6dc3D077E795d1faCEAEb94B2396471A91Be5498](https://sepolia.explorer.zksync.io/address/0x6dc3D077E795d1faCEAEb94B2396471A91Be5498) |
| Chronicle_SDAI_DAI_1 | [0x7e7Df5117f5A6E8Cf82a0F80F06fE1119FC9b741](https://sepolia.explorer.zksync.io/address/0x7e7Df5117f5A6E8Cf82a0F80F06fE1119FC9b741) |
| Chronicle_UNI_USD_1 | [0x52485646EF15dB99504965de37494440Be862685](https://sepolia.explorer.zksync.io/address/0x52485646EF15dB99504965de37494440Be862685) |
| Chronicle_MATIC_USD_1 | [0xB146e962BDe5185c45ea6e320b14d67F3DFD2173](https://sepolia.explorer.zksync.io/address/0xB146e962BDe5185c45ea6e320b14d67F3DFD2173) |
| Chronicle_DSR_RATE_1 | [0x68C9aa7bA59811B2B995CDB1b73cAac84522fBC3](https://sepolia.explorer.zksync.io/address/0x68C9aa7bA59811B2B995CDB1b73cAac84522fBC3) |
| Chronicle_MKR_USD_1 | [0x68e4aC3eCDaa1a6072c7A5f38f2CCF8c6E0Cccb2](https://sepolia.explorer.zksync.io/address/0x68e4aC3eCDaa1a6072c7A5f38f2CCF8c6E0Cccb2) |
| Chronicle_IBTA_USD_1 | [0x8120d0A79871eB4966fe5D7dF1608FF58229F6F3](https://sepolia.explorer.zksync.io/address/0x8120d0A79871eB4966fe5D7dF1608FF58229F6F3) |
| Chronicle_ETH_USD_1 | [0x46cf81028852a948D22Af41e264a5895F5115006](https://sepolia.explorer.zksync.io/address/0x46cf81028852a948D22Af41e264a5895F5115006) |
| Chronicle_SDAI_MATIC_1 | [0x32952b3Ff76C658826e906C441B98C3609BD7981](https://sepolia.explorer.zksync.io/address/0x32952b3Ff76C658826e906C441B98C3609BD7981) |
| Chronicle_SNX_USD_1 | [0x5912D288bDB918f931516041Ecd8a72fD1563A39](https://sepolia.explorer.zksync.io/address/0x5912D288bDB918f931516041Ecd8a72fD1563A39) |
| Chronicle_CRV_USD_1 | [0x5A91677DCd79d578E5963B64Ef3E963Beb626F14](https://sepolia.explorer.zksync.io/address/0x5A91677DCd79d578E5963B64Ef3E963Beb626F14) |
| Chronicle_USDT_USD_1 | [0xAD86B6EcC316406b2688e483dbDceBc33ADD0c8E](https://sepolia.explorer.zksync.io/address/0xAD86B6EcC316406b2688e483dbDceBc33ADD0c8E) |
| Chronicle_BNB_USD_1 | [0x41b6E1613fE235Ebc81829a5B02bC2f96212eb49](https://sepolia.explorer.zksync.io/address/0x41b6E1613fE235Ebc81829a5B02bC2f96212eb49) |
| Chronicle_SOL_USD_1 | [0x79a6Cb3D5cf55a5Ddc91d041B5F3D192AA1799F5](https://sepolia.explorer.zksync.io/address/0x79a6Cb3D5cf55a5Ddc91d041B5F3D192AA1799F5) |
| Chronicle_OP_USD_1 | [0x47bAD642f631eB94894A58Af6bC7D4c9DbB6485c](https://sepolia.explorer.zksync.io/address/0x47bAD642f631eB94894A58Af6bC7D4c9DbB6485c) |
| Chronicle_GNO_USD_1 | [0x6C10082C014476F21344CCe0f6b5B7463fFbAC7A](https://sepolia.explorer.zksync.io/address/0x6C10082C014476F21344CCe0f6b5B7463fFbAC7A) |
| Chronicle_LDO_USD_1 | [0x3B05D11dEd3a3E585E1AA6d1ed87A0177D18894B](https://sepolia.explorer.zksync.io/address/0x3B05D11dEd3a3E585E1AA6d1ed87A0177D18894B) |
| Chronicle_SDAI_ETH_1 | [0x71a16AeAA5650e519b2a606BCB496cf1CAd75b94](https://sepolia.explorer.zksync.io/address/0x71a16AeAA5650e519b2a606BCB496cf1CAd75b94) |
| Chronicle_AVAX_USD_1 | [0x231E4fA18Cc387C83b3941224E7B4E3491e616e0](https://sepolia.explorer.zksync.io/address/0x231E4fA18Cc387C83b3941224E7B4E3491e616e0) |
| Chronicle_DAI_USD_1 | [0x8dE859e3281CC34574161189CccBD953Dd67DE24](https://sepolia.explorer.zksync.io/address/0x8dE859e3281CC34574161189CccBD953Dd67DE24) |
| Chronicle_YFI_USD_1 | [0x25bb6AadC4276362F0Ca8Bb227D393d0aC54111e](https://sepolia.explorer.zksync.io/address/0x25bb6AadC4276362F0Ca8Bb227D393d0aC54111e) |
| Chronicle_ARB_USD_1 | [0x9635DE4989C0832Fc581cd1666cE3a7EdF973a29](https://sepolia.explorer.zksync.io/address/0x9635DE4989C0832Fc581cd1666cE3a7EdF973a29) |
| Chronicle_LINK_USD_1 | [0x566c45c6f10D207Cc2F083a33D56B4ccDF23B7bc](https://sepolia.explorer.zksync.io/address/0x566c45c6f10D207Cc2F083a33D56B4ccDF23B7bc) |
| Chronicle_RETH_USD_1 | [0x20374ea0Fb22A2CE2f84B4A628e4eEF01793cF6A](https://sepolia.explorer.zksync.io/address/0x20374ea0Fb22A2CE2f84B4A628e4eEF01793cF6A) |
| Chronicle_USDC_USD_1 | [0xEf281522E64e91A7333335986DF7B47720934A95](https://sepolia.explorer.zksync.io/address/0xEf281522E64e91A7333335986DF7B47720934A95) |
| Chronicle_WSTETH_USD_1 | [0x1A622e80A5a08e943f508940881d9cb92D8b4d31](https://sepolia.explorer.zksync.io/address/0x1A622e80A5a08e943f508940881d9cb92D8b4d31) |
| Chronicle_WBTC_USD_1 | [0x793C59AF9d64fD94CE40B35b649E59c6AA13c5B0](https://sepolia.explorer.zksync.io/address/0x793C59AF9d64fD94CE40B35b649E59c6AA13c5B0) |
| Chronicle_BTC_USD_1 | [0x0C5b65706224cb8D7d41524DCdF414FeaD4a2C28](https://sepolia.explorer.zksync.io/address/0x0C5b65706224cb8D7d41524DCdF414FeaD4a2C28) |
| Chronicle_ETH_BTC_1 | [0x25ECc0dF13b33faF4813438BFB8DA3968bEb705A](https://sepolia.explorer.zksync.io/address/0x25ECc0dF13b33faF4813438BFB8DA3968bEb705A) |
</details>

## General Setup Enquires

- Foundry Setup:
  - [https://getfoundry.sh](https://getfoundry.sh/)
- List of Sepolia ETH Faucets:
  - [https://www.infura.io/faucet/sepolia](https://www.infura.io/faucet/sepolia)
  - [https://sepoliafaucet.com/](https://sepoliafaucet.com/)
- Chainlist RPCs:
  - [Sepolia](https://chainlist.org/chain/11155111)
  - [Gnosis Mainnet](https://chainlist.org/chain/100)
  - [Mantle Testnet](https://chainlist.org/chain/5003)
  - [Scroll-Sepolia](https://chainlist.org/chain/534351)
  - [Polygon testnet-ZKEVM-mango](https://chainlist.org/chain/1442)
- Create a Test Wallet:
  - `cast new wallet`

- RPC Providers:
  - [drpc.org](https://drpc.org/)
  - [nodies](https://www.nodies.app/)
  - [grove](https://www.grove.city/)
  - [blast api](https://blastapi.io/)
  - [ankr](https://www.ankr.com/rpc/)

## More on Scribe

- [Eth Magician Post](https://ethereum-magicians.org/t/an-efficient-schnorr-multi-signature-implementation/15510)
- [Twitter Thread](https://twitter.com/merkleplant_eth/status/1693652385980379593)
- [Scribe's docs](https://github.com/chronicleprotocol/scribe/blob/main/docs/Scribe.md)


