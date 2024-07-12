---
sidebar_position: 1
---

# 🇧🇪 Chronicle @ETHGlobal Brussels 

🛠️💻🛠️ Hello builders and welcome to ETHGlobal Brussels Chronicle bounties page! 

 This document serves as a guide for integrating Chronicle Oracles into your hackathon projects. 

:::note
You can only compete for one track. For Tracks 1 (DeFi) and 2 (Innovation), if the judges determine that your project is a better fit for the other track, they will move it automatically. 
You only need to submit your project once.
:::

## 💰 Bounties: 10K 

<details>
<summary>Track 1: DeFi Track (Integrate Chronicle Oracles into one of the following DeFi applications: Borrowing & Lending dApps, Decentralized Exchanges (DEX), Liquidity Mining, Prediction Markets, or Stablecoins)</summary>

### Track 1: DeFi Track (Integrate Chronicle Oracles into one of the following DeFi applications: Borrowing & Lending dApps, Decentralized Exchanges (DEX), Liquidity Mining, Prediction Markets, or Stablecoins)

- 🥇 1st: $2500
- 🥈 2nd: $1500
- 🥉 3rd: $700

### 📜 Qualification rules:

- Each project must use Chronicle Oracles in some form to make a state change on a blockchain, otherwise it will not be eligible. This means that a front end simply reading from Chronicle Oracles doesn't count.
- You can deploy your contracts on any of the following chains:

  - Ethereum Sepolia
  - Arbitrum Sepolia
  - Base Sepolia
  - Polygon zkEVM Sepolia
  - Gnosis Chain Mainnet
  - Scroll Sepolia
  - zkSync Sepolia 
  - Optimism Sepolia
  - Mantle Sepolia 

### 🎯 Judging Criteria
- Code quality - well organized and readable code will score higher.
- Documentation - the better the documentation the higher the score.
- Extensibility - how easy can a developer use this to build out their own idea?
- DX - does the project provide a high quality developer experience?
-  UI/UX - Projects with an intuitive UI will score higher.

### 🏁 Assets to submit:

Make sure to include the following in your project submission:

    1. A public demo URL to your deployed project that judges can test.
    2. A short video that demonstrates your submission (approximately 2-3 minutes).
    3. A public GitHub repository with the code. 
    4. Complete the [Builder Feedback Form](https://forms.gle/SvcS5FsRDjDd5crA7).

</details>

<details>
<summary>Track 2: Most Innovative Chronicle Oracle Integration</summary>

### Track 2: Most Innovative Chronicle Oracle Integration

- 🥇 1st: $2500
- 🥈 2nd: $1500
- 🥉 3rd: $700

### 📜 Qualification rules:

- Each project must use Chronicle Oracles in some form to make a state change on a blockchain, otherwise it will not be eligible. This means that a front end simply reading from Chronicle Oracles doesn't count.
- The prize will go to the top three teams with the most innovative integration of Scribe, Chronicle's new Schnorr Oracle. You can deploy your contracts on any of the following chains:

  - Ethereum Sepolia
  - Arbitrum Sepolia
  - Base Sepolia
  - Polygon zkEVM Sepolia
  - Gnosis Chain Mainnet
  - Scroll Sepolia
  - zkSync Sepolia 
  - Optimism Sepolia
  - Mantle Sepolia 

Solutions must integrate the Chronicle Oracle smart contracts. The innovation should stem from the use case of the Oracle, i.e., the idea or utility of the project.


### 🎯 Judging Criteria

- Code quality - well organized and readable code will score higher.
- Documentation - the better the documentation the higher the score.
- Extensibility - how easy can a developer use this to build out their own idea?
- DX - does the project provide a high quality developer experience?
- UI/UX - Projects with an intuitive UI will score higher.

### 🏁 Assets to submit:

Make sure to include the following in your project submission:

    1. A public demo URL to your deployed project that judges can test.
    2. A short video that demonstrates your submission (approximately 2-3 minutes).
    3. A public GitHub repository with the code.
    4. Complete the [Builder Feedback Form](https://forms.gle/SvcS5FsRDjDd5crA7).

</details>

<details>
<summary>Track 3: Best Educational Resource for Builders</summary>

## Track 3: Best Educational Resource for Builders

Create a tutorial for developers on integrating Chronicle Scribe Oracles.

- 🥇 1st: $350
- 🥈 2nd: $250

### 📜 Qualification rules:
- The submitted material should be your own. Material originating from other sources or generated with AI does not qualify.

### 🎯 Judging Criteria

- Accuracy: Information provided should be factually correct and well-researched.
- Clarity: Concepts should be explained clearly and concisely, avoiding unnecessary jargon.
- Extensibility - how easy can a developer use this material to build out their own idea?
- Relevance: The content should be relevant to the target audience and meet their learning needs.
- Practicality: The content should offer practical insights, tips, or steps that the audience can apply.

### 🏁 Assets to submit:

For this track you only need to submit a link to your content and to complete the [Builder Feedback Form](https://forms.gle/SvcS5FsRDjDd5crA7).


</details>

## ✏️ Talks & Workshops

- 🛠️ Chronicle Workshop: Scalable, Decentralized, Cost-Efficient Oracles
- Friday, 12th July, 04:30pm, Room 3
- **[GitHub Repository for the workshop](https://github.com/biancabuzea200/TokenVendor)**

## Chronicle Protocol Contracts

### Scribe

Scribe is an extremely gas-efficient Oracle based on aggregated Schnorr signatures. Providing nearly constant gas costs on Layer 2s and on Layer 1s, Scribe boasts of fixed gas costs, leading to substantial savings—over 60% relative to competing Oracles and an impressive 80% compared to Chainlink. This approach to gas management significantly boosts the scalability of the Oracle.

The Chronicle Scribe Oracle interface is plug-and-play with Chainlink and Maker Oracles, providing a smooth transition for developers used to these platforms.

All data delivered by a Chronicle Oracle on Mainnet is verifiable via The [Chronicle Dashboard](https://chroniclelabs.org/dashboard).

👉 [Scribe Public Repo](https://github.com/chronicleprotocol/scribe)

### CAST

Cast is a command-line interface (CLI) tool by the Foundry team to streamline your interaction with Ethereum and other EVM-based chains. Whether you're making smart contract calls, sending transactions, or retrieving any chain data, cast can help with that. You can read more [here](https://book.getfoundry.sh/reference/cast/cast).

:::important
### Self-Kisser: Permissionless Whitelisting

Chronicle safeguards Oracle read functions with a whitelist, ensuring controlled access to critical data. However, the SelfKisser contract unfolds a possibility where you can whitelist yourself (or, as whimsically termed, "kiss") yourself.

To kiss yourself, i.e., `msg.sender`, please check out the following guide, **[Getting Read Access to Contracts](../Developers/Guides/whitelistAddress.md)**.

**Please note that this is a mandatory step in ordr to be able to read from Chronicle Oracles.**
:::


#### Common Pitfalls

- ⛽️ Ensure you have a sufficient amount of tokens in your wallet to cover gas fees for transactions.
- ⛓️ Ensure your wallet is connected to the correct network corresponding to the contract you are interacting with.

### 📤 Resources


- **[Scaffold-oracle-reader](https://github.com/chronicleprotocol/scaffold-oracle-reader) based on Scaffold-ETH2, to help you prototype easily and experiment with Solidity using a frontend that adapts to your smart contract**
- [Self-kisser Contract on Sepolia network](https://sepolia.etherscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d#code)
- [How To Use Read/Write Contract Features on Etherscan](https://info.etherscan.com/how-to-use-read-or-write-contract-features-on-etherscan/)

:::tip
You can view all the smart contract adresses below organized by chains:👇
:::

<details>
<summary>Smart Contract Addresses on **Ethereum Sepolia**</summary>


| Contract Name | Contract Address on Sepolia network                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| SelfKisser_1 | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://sepolia.etherscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d) |
| Chronicle_AAVE_USD_3 | [0x3F982a82B4B6bd09b1DAF832140F166b595FEF7F](https://sepolia.etherscan.io/address/0x3F982a82B4B6bd09b1DAF832140F166b595FEF7F) |
| Chronicle_ARB_USD_3 | [0x9Bf0C1ba75C9d7b6Bf051cc7f7dCC7bfE5274302](https://sepolia.etherscan.io/address/0x9Bf0C1ba75C9d7b6Bf051cc7f7dCC7bfE5274302) |
| Chronicle_AVAX_USD_3 | [0x7F56CdaAdB1c5230Fcab3E20D3A15BDE26cb6C2b](https://sepolia.etherscan.io/address/0x7F56CdaAdB1c5230Fcab3E20D3A15BDE26cb6C2b) |
| Chronicle_BNB_USD_3 | [0xE4A1EED38F972d05794C740Eae965A7Daa6Ab28c](https://sepolia.etherscan.io/address/0xE4A1EED38F972d05794C740Eae965A7Daa6Ab28c) |
| Chronicle_BTC_USD_3 | [0x6edF073c4Bd934d3916AA6dDAC4255ccB2b7c0f0](https://sepolia.etherscan.io/address/0x6edF073c4Bd934d3916AA6dDAC4255ccB2b7c0f0) |
| Chronicle_CRVUSD_USD_1 | [0x3de6bEc5d5FE063fB23F36E363182AB353AbC56E](https://sepolia.etherscan.io/address/0x3de6bEc5d5FE063fB23F36E363182AB353AbC56E) |
| Chronicle_CRV_USD_3 | [0xDcda58cAAC639C20aed270859109f03E9832a13A](https://sepolia.etherscan.io/address/0xDcda58cAAC639C20aed270859109f03E9832a13A) |
| Chronicle_DAI_USD_3 | [0xaf900d10f197762794C41dac395C5b8112eD13E1](https://sepolia.etherscan.io/address/0xaf900d10f197762794C41dac395C5b8112eD13E1) |
| Chronicle_ETHX_USD_1 | [0xc6639C0591d632Bf689ceab617A0377072e7f524](https://sepolia.etherscan.io/address/0xc6639C0591d632Bf689ceab617A0377072e7f524) |
| Chronicle_ETH_BTC_3 | [0xf95d3B8Ae567F4AA9BEC822931976c117cdf836a](https://sepolia.etherscan.io/address/0xf95d3B8Ae567F4AA9BEC822931976c117cdf836a) |
| Chronicle_ETH_USD_3 | [0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603](https://sepolia.etherscan.io/address/0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603) |
| Chronicle_GNO_USD_3 | [0x9C9e56AE479f82bcF229F2200420106C93C0A24e](https://sepolia.etherscan.io/address/0x9C9e56AE479f82bcF229F2200420106C93C0A24e) |
| Chronicle_IBTA_USD_3 | [0x92b7Ab73BA53Bc64b57194242e3a36A6F1209A70](https://sepolia.etherscan.io/address/0x92b7Ab73BA53Bc64b57194242e3a36A6F1209A70) |
| Chronicle_LDO_USD_3 | [0x4cD2a8c3Fd6329029461A95784051A553f31eb29](https://sepolia.etherscan.io/address/0x4cD2a8c3Fd6329029461A95784051A553f31eb29) |
| Chronicle_LINK_USD_3 | [0x260c182f0054BF244a8e38d7C475b6d9f67AeAc1](https://sepolia.etherscan.io/address/0x260c182f0054BF244a8e38d7C475b6d9f67AeAc1) |
| Chronicle_MATIC_USD_3 | [0xEa00861Dc00eBd246F6E51E52c28aBd9062bc09F](https://sepolia.etherscan.io/address/0xEa00861Dc00eBd246F6E51E52c28aBd9062bc09F) |
| Chronicle_MKR_USD_3 | [0xE55afC31AFA140597c581Bc32057BF393ba97c5A](https://sepolia.etherscan.io/address/0xE55afC31AFA140597c581Bc32057BF393ba97c5A) |
| Chronicle_MNT_USD_1 | [0x90f13128715157f6f2708b3e379a345a330C598c](https://sepolia.etherscan.io/address/0x90f13128715157f6f2708b3e379a345a330C598c) |
| Chronicle_OP_USD_3 | [0x1Be54a524226fc44565747FE221157f4cAE71B80](https://sepolia.etherscan.io/address/0x1Be54a524226fc44565747FE221157f4cAE71B80) |
| Chronicle_RETH_ETH_1 | [0xAE888F70d319d9ab9318B2326AEf97Bde2c1F96f](https://sepolia.etherscan.io/address/0xAE888F70d319d9ab9318B2326AEf97Bde2c1F96f) |
| Chronicle_RETH_USD_3 | [0x6454753E0909E7F6476BfB78BD6BDC281197A5be](https://sepolia.etherscan.io/address/0x6454753E0909E7F6476BfB78BD6BDC281197A5be) |
| Chronicle_SDAI_DAI_3 | [0x0B20Fd1c09452FC3F214667073EA8975aB2c55EA](https://sepolia.etherscan.io/address/0x0B20Fd1c09452FC3F214667073EA8975aB2c55EA) |
| Chronicle_SD_USD_1 | [0x0939F04AbA985E3861C4D7AD9fbD66b976Dd47a8](https://sepolia.etherscan.io/address/0x0939F04AbA985E3861C4D7AD9fbD66b976Dd47a8) |
| Chronicle_SNX_USD_3 | [0x1eFD788C634C59e2c7507b523B3eEfD6CaaE0c4f](https://sepolia.etherscan.io/address/0x1eFD788C634C59e2c7507b523B3eEfD6CaaE0c4f) |
| Chronicle_SOL_USD_3 | [0x39eC7D193D1Aa282b8ecCAC9B791b09c75D30491](https://sepolia.etherscan.io/address/0x39eC7D193D1Aa282b8ecCAC9B791b09c75D30491) |
| Chronicle_UNI_USD_3 | [0x0E9e54244F6585a71d0d1035E7625849B516C817](https://sepolia.etherscan.io/address/0x0E9e54244F6585a71d0d1035E7625849B516C817) |
| Chronicle_USDC_USD_3 | [0xb34d784dc8E7cD240Fe1F318e282dFdD13C389AC](https://sepolia.etherscan.io/address/0xb34d784dc8E7cD240Fe1F318e282dFdD13C389AC) |
| Chronicle_USDM_USD_1 | [0xe971B2aF139Ad803656533059Bc028b61C00F67F](https://sepolia.etherscan.io/address/0xe971B2aF139Ad803656533059Bc028b61C00F67F) |
| Chronicle_USDT_USD_3 | [0x8c852EEC6ae356FeDf5d7b824E254f7d94Ac6824](https://sepolia.etherscan.io/address/0x8c852EEC6ae356FeDf5d7b824E254f7d94Ac6824) |
| Chronicle_WBTC_USD_3 | [0xdc3ef3E31AdAe791d9D5054B575f7396851Fa432](https://sepolia.etherscan.io/address/0xdc3ef3E31AdAe791d9D5054B575f7396851Fa432) |
| Chronicle_WSTETH_ETH_3 | [0x2d95B1862279771fcE76823CD777384D8598fB48](https://sepolia.etherscan.io/address/0x2d95B1862279771fcE76823CD777384D8598fB48) |
| Chronicle_WSTETH_USD_3 | [0x89822dd9D74dF50BFba8764DC9bE25E9B8d554A1](https://sepolia.etherscan.io/address/0x89822dd9D74dF50BFba8764DC9bE25E9B8d554A1) |
| Chronicle_WUSDM_USDM_1 | [0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56](https://sepolia.etherscan.io/address/0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56) |
| Chronicle_WUSDM_USD_1 | [0x6d10de3640ab2F11B1102Ae72C06BB497E5E859b](https://sepolia.etherscan.io/address/0x6d10de3640ab2F11B1102Ae72C06BB497E5E859b) |
| Chronicle_YFI_USD_3 | [0xdF54aBf0eF88aB7fFf22e21eDD9AE1DA89A7DefC](https://sepolia.etherscan.io/address/0xdF54aBf0eF88aB7fFf22e21eDD9AE1DA89A7DefC) |
</details>

<details>
<summary> Smart Contract Addresses on **Base Sepolia** </summary>
| Contract Name | Contract Address on Base Sepolia                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
SelfKisser_1 | [0x70E58b7A1c884fFFE7dbce5249337603a28b8422](https://sepolia.basescan.org/address/0x70E58b7A1c884fFFE7dbce5249337603a28b8422#code) |
| Chronicle_CBETH_USD_1 | [0x11E155b04f0498bc6B6EB0086A2148368F0b64F0](https://sepolia.basescan.org/address/0x11E155b04f0498bc6B6EB0086A2148368F0b64F0) |
| Chronicle_CBETH_USDC_1 | [0x371A53bB4203Ad5D7e60e220BaC1876FF3Ddda5B](https://sepolia.basescan.org/address/0x371A53bB4203Ad5D7e60e220BaC1876FF3Ddda5B) |
| Chronicle_DAI_USD_1 | [0xC32753217DcC7Bb2F449bD6f1bC384d1AC72a7B6](https://sepolia.basescan.org/address/0xC32753217DcC7Bb2F449bD6f1bC384d1AC72a7B6) |
| Chronicle_ETH_USD_1 | [0xea347Db6ef446e03745c441c17018eF3d641Bc8f](https://sepolia.basescan.org/address/0xea347Db6ef446e03745c441c17018eF3d641Bc8f) |
| Chronicle_HYUSD_USD_1 | [0x1C082338961068009d9F33ea48aa13623e63B18e](https://sepolia.basescan.org/address/0x1C082338961068009d9F33ea48aa13623e63B18e) |
| Chronicle_RETH_USD_1 | [0x829124df58D1b4853f8669C867d3991cA09265Aa](https://sepolia.basescan.org/address/0x829124df58D1b4853f8669C867d3991cA09265Aa) |
| Chronicle_USDC_USD_1 | [0x088BEA5f90C316e1c8b898C4A9AF27C2F2984cd7](https://sepolia.basescan.org/address/0x088BEA5f90C316e1c8b898C4A9AF27C2F2984cd7) |
| Chronicle_USDT_USD_1 | [0xC1A83Bed9d7E434a3E8608f7C5438F805D404F8F](https://sepolia.basescan.org/address/0xC1A83Bed9d7E434a3E8608f7C5438F805D404F8F) |
| Chronicle_WBTC_USD_1 | [0x8E947Ea7D5881Cd600Ace95F1201825F8C708844](https://sepolia.basescan.org/address/0x8E947Ea7D5881Cd600Ace95F1201825F8C708844) |
| Chronicle_WSTETH_ETH_1 | [0x450F6F025aD017f345CD17407Ee22d90E5F87441](https://sepolia.basescan.org/address/0x450F6F025aD017f345CD17407Ee22d90E5F87441) |
| Chronicle_WSTETH_USD_1 | [0x834c4f996B8a6411AEC0f8a0cF6fAfd4423dBEe2](https://sepolia.basescan.org/address/0x834c4f996B8a6411AEC0f8a0cF6fAfd4423dBEe2) |
| Chronicle_WSTETH_USDC_1 | [0x262034B41F0C33b67e96b6495b7Bf650dC85acda](https://sepolia.basescan.org/address/0x262034B41F0C33b67e96b6495b7Bf650dC85acda) |
| Chronicle_WUSDM_USD_1 | [0xe20165f58B507DF17187D6FCc12E741423075C5c](https://sepolia.basescan.org/address/0xe20165f58B507DF17187D6FCc12E741423075C5c) |

</details>

<details>
<summary> Smart Contract Addresses on **Arbitrum Sepolia** </summary>
| Contract Name| Contract Address on Arbitrum Sepolia                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
SelfKisser_1 | [0xc0fe3a070Bc98b4a45d735A52a1AFDd134E0283f](https://sepolia.arbiscan.io/address/0xc0fe3a070Bc98b4a45d735A52a1AFDd134E0283f#code) |
| Chronicle_AAVE_USD_1 | [0xC7E4AA2860BEc0054A8A2D3bb1fc5359FEA13FdA](https://sepolia.arbiscan.io/address/0xC7E4AA2860BEc0054A8A2D3bb1fc5359FEA13FdA) |
| Chronicle_ARB_USD_1 | [0xdD7c06561689c73f0A67F2179e273cCF45EFc964](https://sepolia.arbiscan.io/address/0xdD7c06561689c73f0A67F2179e273cCF45EFc964) |
| Chronicle_AVAX_USD_1 | [0x15E9742b47Ae44308066F575E60F3c7231873f4A](https://sepolia.arbiscan.io/address/0x15E9742b47Ae44308066F575E60F3c7231873f4A) |
| Chronicle_BNB_USD_1 | [0xB5E60d6FbC65eb7aDC6594ea897bac9A7E1B2a20](https://sepolia.arbiscan.io/address/0xB5E60d6FbC65eb7aDC6594ea897bac9A7E1B2a20) |
| Chronicle_BTC_USD_1 | [0xE455de0673e89706e26117297f1FE15cd47ab717](https://sepolia.arbiscan.io/address/0xE455de0673e89706e26117297f1FE15cd47ab717) |
| Chronicle_CRV_USD_1 | [0x62ECebCA021681aC116582f10668d96D4723D9C9](https://sepolia.arbiscan.io/address/0x62ECebCA021681aC116582f10668d96D4723D9C9) |
| Chronicle_DAI_USD_1 | [0xFAE96480F5bB0e3a5c8cB1Ba16F59D8dE89C14AE](https://sepolia.arbiscan.io/address/0xFAE96480F5bB0e3a5c8cB1Ba16F59D8dE89C14AE) |
| Chronicle_DSR_RATE_1 | [0xd88cB520c0abB2755a950C11f2cf3131Ad0f0baA](https://sepolia.arbiscan.io/address/0xd88cB520c0abB2755a950C11f2cf3131Ad0f0baA) |
| Chronicle_ETH_BTC_1 | [0xf8aF8339e85F7b958027E5109bD87D3E46BF7d78](https://sepolia.arbiscan.io/address/0xf8aF8339e85F7b958027E5109bD87D3E46BF7d78) |
| Chronicle_ETH_USD_1 | [0x77833F676fe5FB32e55986770092f54707d72c21](https://sepolia.arbiscan.io/address/0x77833F676fe5FB32e55986770092f54707d72c21) |
| Chronicle_GNO_USD_1 | [0xB0Ebff855774737b1874296d54100c37C92dE2a4](https://sepolia.arbiscan.io/address/0xB0Ebff855774737b1874296d54100c37C92dE2a4) |
| Chronicle_IBTA_USD_1 | [0x9A70A6293C55e9fA8aB1F2B507EbE5A4d4506A6A](https://sepolia.arbiscan.io/address/0x9A70A6293C55e9fA8aB1F2B507EbE5A4d4506A6A) |
| Chronicle_LDO_USD_1 | [0xb43862e703a1a36f4A6a5196684C3a73210956Ef](https://sepolia.arbiscan.io/address/0xb43862e703a1a36f4A6a5196684C3a73210956Ef) |
| Chronicle_LIDO_LST_2DAYS_1 | [0xE92AaCfb6b7Ce342909ff2ee136f7A33AAbcb379](https://sepolia.arbiscan.io/address/0xE92AaCfb6b7Ce342909ff2ee136f7A33AAbcb379) |
| Chronicle_LINK_USD_1 | [0xF7e8af6BF4D0Fb399DC087778b7912f30aa08Ca5](https://sepolia.arbiscan.io/address/0xF7e8af6BF4D0Fb399DC087778b7912f30aa08Ca5) |
| Chronicle_MATIC_USD_1 | [0xBeF861cc071CA7A1680268a2a34dC28931BE1eDc](https://sepolia.arbiscan.io/address/0xBeF861cc071CA7A1680268a2a34dC28931BE1eDc) |
| Chronicle_MKR_USD_1 | [0x4217043B0C8a7A7BCf04A4c1d4Ef6708D2E9ac24](https://sepolia.arbiscan.io/address/0x4217043B0C8a7A7BCf04A4c1d4Ef6708D2E9ac24) |
| Chronicle_OP_USD_1 | [0xCAc87840eDA81Fcdee1FBDC4291c1fF0de7D45Eb](https://sepolia.arbiscan.io/address/0xCAc87840eDA81Fcdee1FBDC4291c1fF0de7D45Eb) |
| Chronicle_RETH_USD_1 | [0x4c3A6F4e991261B65D59f15B8365a9Fa2A8803a6](https://sepolia.arbiscan.io/address/0x4c3A6F4e991261B65D59f15B8365a9Fa2A8803a6) |
| Chronicle_SDAI_DAI_1 | [0x4f1C907d2f506f007F61eba89640C8069c6b39dB](https://sepolia.arbiscan.io/address/0x4f1C907d2f506f007F61eba89640C8069c6b39dB) |
| Chronicle_SDAI_ETH_1 | [0x39028693954470965E881f8477532455D1cE5F67](https://sepolia.arbiscan.io/address/0x39028693954470965E881f8477532455D1cE5F67) |
| Chronicle_SDAI_MATIC_1 | [0x75E5545dE5594DaE82Ce90cC0CeDbfE2d061a876](https://sepolia.arbiscan.io/address/0x75E5545dE5594DaE82Ce90cC0CeDbfE2d061a876) |
| Chronicle_SNX_USD_1 | [0xB6aA4b36c79805CA0db5C9736c12eAb23ac54770](https://sepolia.arbiscan.io/address/0xB6aA4b36c79805CA0db5C9736c12eAb23ac54770) |
| Chronicle_SOL_USD_1 | [0xB73376612dec25deF13ECBfcf94615edB9A7306D](https://sepolia.arbiscan.io/address/0xB73376612dec25deF13ECBfcf94615edB9A7306D) |
| Chronicle_UNI_USD_1 | [0x7Cb721f729563016F3384714221C982f75143EA2](https://sepolia.arbiscan.io/address/0x7Cb721f729563016F3384714221C982f75143EA2) |
| Chronicle_USDC_USD_1 | [0x27D76Db29D7239b183C83e6C61639dCca8276171](https://sepolia.arbiscan.io/address/0x27D76Db29D7239b183C83e6C61639dCca8276171) |
| Chronicle_USDT_USD_1 | [0x95931ea4e977456a5cF74F2Ea4BA3A66d9301921](https://sepolia.arbiscan.io/address/0x95931ea4e977456a5cF74F2Ea4BA3A66d9301921) |
| Chronicle_WBTC_USD_1 | [0xfF9D63b719116FE1Dc40547Be0ce008e783f49B9](https://sepolia.arbiscan.io/address/0xfF9D63b719116FE1Dc40547Be0ce008e783f49B9) |
| Chronicle_WSTETH_USD_1 | [0x988B3BFb20401e36EF579d7A81f43CB11EF5F759](https://sepolia.arbiscan.io/address/0x988B3BFb20401e36EF579d7A81f43CB11EF5F759) |
| Chronicle_WUSDM_USD_1 | [0xEd33f922e31467133A549a20e1719b187B33644D](https://sepolia.arbiscan.io/address/0xEd33f922e31467133A549a20e1719b187B33644D) |
| Chronicle_WUSDM_USDM_1  | [0x3B6882F848cD0ad0046EAd627a1bc17F81b6ECb1](https://sepolia.arbiscan.io/address/0x3B6882F848cD0ad0046EAd627a1bc17F81b6ECb1) |
| Chronicle_YFI_USD_1 | [0xAf40A6535C2a31a88C074B0FeFb47E3767AE4e70](https://sepolia.arbiscan.io/address/0xAf40A6535C2a31a88C074B0FeFb47E3767AE4e70)|

</details>

<details>
<summary>Smart Contract Addresses on **Polygon zkEVM Testnet**</summary>

| Contract Name | Contract Address on zkEVM Testnet                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| SelfKisser_1 | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://testnet-zkevm.polygonscan.com/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d) |
| Chronicle_AAVE_USD_3 | [0x3F982a82B4B6bd09b1DAF832140F166b595FEF7F](https://testnet-zkevm.polygonscan.com/address/0x3F982a82B4B6bd09b1DAF832140F166b595FEF7F) |
| Chronicle_ARB_USD_3 | [0x9Bf0C1ba75C9d7b6Bf051cc7f7dCC7bfE5274302](https://testnet-zkevm.polygonscan.com/address/0x9Bf0C1ba75C9d7b6Bf051cc7f7dCC7bfE5274302) |
| Chronicle_AVAX_USD_3 | [0xDcd4c95f9D1f660E31fD516B936388fc9D4117Ea](https://testnet-zkevm.polygonscan.com/address/0xDcd4c95f9D1f660E31fD516B936388fc9D4117Ea) |
| Chronicle_BNB_USD_3 | [0xE4A1EED38F972d05794C740Eae965A7Daa6Ab28c](https://testnet-zkevm.polygonscan.com/address/0xE4A1EED38F972d05794C740Eae965A7Daa6Ab28c) |
| Chronicle_BTC_USD_3 | [0x6edF073c4Bd934d3916AA6dDAC4255ccB2b7c0f0](https://testnet-zkevm.polygonscan.com/address/0x6edF073c4Bd934d3916AA6dDAC4255ccB2b7c0f0) |
| Chronicle_CRV_USD_3 | [0xDcda58cAAC639C20aed270859109f03E9832a13A](https://testnet-zkevm.polygonscan.com/address/0xDcda58cAAC639C20aed270859109f03E9832a13A) |
| Chronicle_DAI_USD_3 | [0xaf900d10f197762794C41dac395C5b8112eD13E1](https://testnet-zkevm.polygonscan.com/address/0xaf900d10f197762794C41dac395C5b8112eD13E1) |
| Chronicle_ETH_BTC_3 | [0xf95d3B8Ae567F4AA9BEC822931976c117cdf836a](https://testnet-zkevm.polygonscan.com/address/0xf95d3B8Ae567F4AA9BEC822931976c117cdf836a) |
| Chronicle_ETH_USD_3 | [0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603](https://testnet-zkevm.polygonscan.com/address/0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603) |
| Chronicle_GNO_USD_3 | [0x9C9e56AE479f82bcF229F2200420106C93C0A24e](https://testnet-zkevm.polygonscan.com/address/0x9C9e56AE479f82bcF229F2200420106C93C0A24e) |
| Chronicle_IBTA_USD_3 | [0x92b7Ab73BA53Bc64b57194242e3a36A6F1209A70](https://testnet-zkevm.polygonscan.com/address/0x92b7Ab73BA53Bc64b57194242e3a36A6F1209A70) |
| Chronicle_LDO_USD_3 | [0x4cD2a8c3Fd6329029461A95784051A553f31eb29](https://testnet-zkevm.polygonscan.com/address/0x4cD2a8c3Fd6329029461A95784051A553f31eb29) |
| Chronicle_LINK_USD_3 | [0x260c182f0054BF244a8e38d7C475b6d9f67AeAc1](https://testnet-zkevm.polygonscan.com/address/0x260c182f0054BF244a8e38d7C475b6d9f67AeAc1) |
| Chronicle_MATIC_USD_3 | [0xEa00861Dc00eBd246F6E51E52c28aBd9062bc09F](https://testnet-zkevm.polygonscan.com/address/0xEa00861Dc00eBd246F6E51E52c28aBd9062bc09F) |
| Chronicle_MKR_USD_3 | [0xE55afC31AFA140597c581Bc32057BF393ba97c5A](https://testnet-zkevm.polygonscan.com/address/0xE55afC31AFA140597c581Bc32057BF393ba97c5A) |
| Chronicle_OP_USD_3 | [0x1Be54a524226fc44565747FE221157f4cAE71B80](https://testnet-zkevm.polygonscan.com/address/0x1Be54a524226fc44565747FE221157f4cAE71B80) |
| Chronicle_RETH_USD_3 | [0x6454753E0909E7F6476BfB78BD6BDC281197A5be](https://testnet-zkevm.polygonscan.com/address/0x6454753E0909E7F6476BfB78BD6BDC281197A5be) |
| Chronicle_SDAI_DAI_3 | [0x0B20Fd1c09452FC3F214667073EA8975aB2c55EA](https://testnet-zkevm.polygonscan.com/address/0x0B20Fd1c09452FC3F214667073EA8975aB2c55EA) |
| Chronicle_SNX_USD_3 | [0x1eFD788C634C59e2c7507b523B3eEfD6CaaE0c4f](https://testnet-zkevm.polygonscan.com/address/0x1eFD788C634C59e2c7507b523B3eEfD6CaaE0c4f) |
| Chronicle_SOL_USD_3 | [0x39eC7D193D1Aa282b8ecCAC9B791b09c75D30491](https://testnet-zkevm.polygonscan.com/address/0x39eC7D193D1Aa282b8ecCAC9B791b09c75D30491) |
| Chronicle_UNI_USD_3 | [0x0E9e54244F6585a71d0d1035E7625849B516C817](https://testnet-zkevm.polygonscan.com/address/0x0E9e54244F6585a71d0d1035E7625849B516C817) |
| Chronicle_USDC_USD_3 | [0xb34d784dc8E7cD240Fe1F318e282dFdD13C389AC](https://testnet-zkevm.polygonscan.com/address/0xb34d784dc8E7cD240Fe1F318e282dFdD13C389AC) |
| Chronicle_USDT_USD_3 | [0x8c852EEC6ae356FeDf5d7b824E254f7d94Ac6824](https://testnet-zkevm.polygonscan.com/address/0x8c852EEC6ae356FeDf5d7b824E254f7d94Ac6824) |
| Chronicle_WBTC_USD_3 | [0xdc3ef3E31AdAe791d9D5054B575f7396851Fa432](https://testnet-zkevm.polygonscan.com/address/0xdc3ef3E31AdAe791d9D5054B575f7396851Fa432) |
| Chronicle_WSTETH_ETH_3 | [0x2d95B1862279771fcE76823CD777384D8598fB48](https://testnet-zkevm.polygonscan.com/address/0x2d95B1862279771fcE76823CD777384D8598fB48) |
| Chronicle_WSTETH_USD_3 | [0x89822dd9D74dF50BFba8764DC9bE25E9B8d554A1](https://testnet-zkevm.polygonscan.com/address/0x89822dd9D74dF50BFba8764DC9bE25E9B8d554A1) |
| Chronicle_WUSDM_USDM_1 | [0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56](https://testnet-zkevm.polygonscan.com/address/0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56) |
| Chronicle_WUSDM_USD_1 | [0x6d10de3640ab2F11B1102Ae72C06BB497E5E859b](https://testnet-zkevm.polygonscan.com/address/0x6d10de3640ab2F11B1102Ae72C06BB497E5E859b) |
| Chronicle_YFI_USD_3 | [0xdF54aBf0eF88aB7fFf22e21eDD9AE1DA89A7DefC](https://testnet-zkevm.polygonscan.com/address/0xdF54aBf0eF88aB7fFf22e21eDD9AE1DA89A7DefC) |
</details>

<details>
<summary>Smart Contract Addresses on **Gnosis Mainnet**</summary>

| Contract Name | Contract Address on Gnosis Mainnet                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SelfKisser_1 | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://gnosisscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d) |
| Chronicle_AAVE_USD_2 | [0xED4C91FC28B48E2Cf98b59668408EAeE44665511](https://gnosisscan.io/address/0xED4C91FC28B48E2Cf98b59668408EAeE44665511) |
| Chronicle_ARB_USD_2 | [0x7dE6Df8E4c057eD9baE215F347A0339D603B09B2](https://gnosisscan.io/address/0x7dE6Df8E4c057eD9baE215F347A0339D603B09B2) |
| Chronicle_AVAX_USD_2 | [0xD419f76594d411BD94c71FB0a78c80f71A2290Ce](https://gnosisscan.io/address/0xD419f76594d411BD94c71FB0a78c80f71A2290Ce) |
| Chronicle_BNB_USD_2 | [0x6931FB9C54958f77873ceC4536EaC56F561d2dC4](https://gnosisscan.io/address/0x6931FB9C54958f77873ceC4536EaC56F561d2dC4) |
| Chronicle_BTC_USD_2 | [0xdD5232e76798BEACB69eC310d9b0864b56dD08dD](https://gnosisscan.io/address/0xdD5232e76798BEACB69eC310d9b0864b56dD08dD) |
| Chronicle_CRV_USD_2 | [0x7B6E473f1CeB8b7100C9F7d58879e7211Bc48f32](https://gnosisscan.io/address/0x7B6E473f1CeB8b7100C9F7d58879e7211Bc48f32) |
| Chronicle_DAI_USD_2 | [0x16984396EE0903782Ba8e6ebfA7DD356B0cA3841](https://gnosisscan.io/address/0x16984396EE0903782Ba8e6ebfA7DD356B0cA3841) |
| Chronicle_DSR_RATE_2 | [0x09f3BfC6b46526045De5F5BE64f5CCe121bbf8B3](https://gnosisscan.io/address/0x09f3BfC6b46526045De5F5BE64f5CCe121bbf8B3) |
| Chronicle_ETH_BTC_2 | [0x4E866Ac929374096Afc2715C4e9c40D581A4067e](https://gnosisscan.io/address/0x4E866Ac929374096Afc2715C4e9c40D581A4067e) |
| Chronicle_ETH_USD_2 | [0x90430C5b8045a1E2A0Fc4e959542a0c75b576439](https://gnosisscan.io/address/0x90430C5b8045a1E2A0Fc4e959542a0c75b576439) |
| Chronicle_GNO_USD_2 | [0xBcC6BFFde7888A3008f17c88D5a5e5F0D7462cf9](https://gnosisscan.io/address/0xBcC6BFFde7888A3008f17c88D5a5e5F0D7462cf9) |
| Chronicle_IBTA_USD_2 | [0xc52539EfbA58a521d69494D86fc47b9E71D32997](https://gnosisscan.io/address/0xc52539EfbA58a521d69494D86fc47b9E71D32997) |
| Chronicle_LDO_USD_2 | [0x3aeF92049C9401094A9f75259430F4771143F0C3](https://gnosisscan.io/address/0x3aeF92049C9401094A9f75259430F4771143F0C3) |
| Chronicle_LINK_USD_2 | [0x4EDdF05CfAd20f1E39ed4CB067bdfa831dAeA9fE](https://gnosisscan.io/address/0x4EDdF05CfAd20f1E39ed4CB067bdfa831dAeA9fE) |
| Chronicle_MATIC_USD_2 | [0x06997AadB30d51eAdBAA7836f7a0F177474fc235](https://gnosisscan.io/address/0x06997AadB30d51eAdBAA7836f7a0F177474fc235) |
| Chronicle_MKR_USD_2 | [0xE61A66f737c32d5Ac8cDea6982635B80447e9404](https://gnosisscan.io/address/0xE61A66f737c32d5Ac8cDea6982635B80447e9404) |
| Chronicle_OP_USD_2 | [0x1Ae491D618A667a44D48E0b0BE2Cc0cDBF269BC5](https://gnosisscan.io/address/0x1Ae491D618A667a44D48E0b0BE2Cc0cDBF269BC5) |
| Chronicle_RETH_USD_2 | [0xEff79d34f24Bb36eD8FB6c4CbaD5De293fdCf66F](https://gnosisscan.io/address/0xEff79d34f24Bb36eD8FB6c4CbaD5De293fdCf66F) |
| Chronicle_SDAI_DAI_2 | [0xB6EE756124e88e12585981DdDa9E6E3bf3C4487D](https://gnosisscan.io/address/0xB6EE756124e88e12585981DdDa9E6E3bf3C4487D) |
| Chronicle_SDAI_ETH_2 | [0x20A32F633c1D26fC42A15dc7e6bd12Bf0468cAb1](https://gnosisscan.io/address/0x20A32F633c1D26fC42A15dc7e6bd12Bf0468cAb1) |
| Chronicle_SDAI_MATIC_2 | [0x0A154ec276972dBFEA01b13711408Ea6e72Ac36B](https://gnosisscan.io/address/0x0A154ec276972dBFEA01b13711408Ea6e72Ac36B) |
| Chronicle_SNX_USD_2 | [0x6Ab51f7E684923CE051e784D382A470b0fa834Be](https://gnosisscan.io/address/0x6Ab51f7E684923CE051e784D382A470b0fa834Be) |
| Chronicle_SOL_USD_2 | [0x11ceEcca4d49f596E0Df781Af237CDE741ad2106](https://gnosisscan.io/address/0x11ceEcca4d49f596E0Df781Af237CDE741ad2106) |
| Chronicle_UNI_USD_2 | [0xfE051Bc90D3a2a825fA5172181f9124f8541838c](https://gnosisscan.io/address/0xfE051Bc90D3a2a825fA5172181f9124f8541838c) |
| Chronicle_USDC_USD_2 | [0xfef7a1Eb17A095E1bd7723cBB1092caba34f9b1C](https://gnosisscan.io/address/0xfef7a1Eb17A095E1bd7723cBB1092caba34f9b1C) |
| Chronicle_USDT_USD_2 | [0xF78A4e093Cd2D9F57Bb363Cc4edEBcf9bF3325ba](https://gnosisscan.io/address/0xF78A4e093Cd2D9F57Bb363Cc4edEBcf9bF3325ba) |
| Chronicle_WBTC_USD_2 | [0x39C899178F4310705b12888886884b361CeF26C7](https://gnosisscan.io/address/0x39C899178F4310705b12888886884b361CeF26C7) |
| Chronicle_WSTETH_USD_2 | [0x8Ba43F8Fa2fC13D7EEDCeb9414CDbB6643483C34](https://gnosisscan.io/address/0x8Ba43F8Fa2fC13D7EEDCeb9414CDbB6643483C34) |
| Chronicle_WUSDM_USDM_1 | [0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56](https://gnosisscan.io/address/0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56) |
| Chronicle_WUSDM_USD_3 | [0xa6667cA488616F86426cDCe37E65F4788d0bD592](https://gnosisscan.io/address/0xa6667cA488616F86426cDCe37E65F4788d0bD592) |
| Chronicle_YFI_USD_2 | [0x16978358A8D6C7C8cA758F433685A5E8D988dfD4](https://gnosisscan.io/address/0x16978358A8D6C7C8cA758F433685A5E8D988dfD4) |
</details>

<details>
<summary>Smart Contract Addresses on **Mantle Testnet**</summary>

| Contract Name | Contract Address on Mantle Sepolia                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SelfKisser_1 | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://explorer.testnet.mantle.xyz/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d) |
| Chronicle_AAVE_USD_1 | [0xa38C2B5408Eb1DCeeDBEC5d61BeD580589C6e717](https://explorer.testnet.mantle.xyz/address/0xa38C2B5408Eb1DCeeDBEC5d61BeD580589C6e717) |
| Chronicle_ARB_USD_1 | [0x579BfD0581beD0d18fBb0Ebab099328d451552DD](https://explorer.testnet.mantle.xyz/address/0x579BfD0581beD0d18fBb0Ebab099328d451552DD) |
| Chronicle_AVAX_USD_1 | [0x78C8260AF7C8D0d17Cf3BA91F251E9375A389688](https://explorer.testnet.mantle.xyz/address/0x78C8260AF7C8D0d17Cf3BA91F251E9375A389688) |
| Chronicle_BNB_USD_1 | [0x26EE3E8b618227C1B735D8D884d52A852410019f](https://explorer.testnet.mantle.xyz/address/0x26EE3E8b618227C1B735D8D884d52A852410019f) |
| Chronicle_BTC_USD_1 | [0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c](https://explorer.testnet.mantle.xyz/address/0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c) |
| Chronicle_CRV_USD_1 | [0xf29a932ae56bB96CcACF8d1f2Da9028B01c8F030](https://explorer.testnet.mantle.xyz/address/0xf29a932ae56bB96CcACF8d1f2Da9028B01c8F030) |
| Chronicle_DAI_USD_1 | [0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4](https://explorer.testnet.mantle.xyz/address/0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4) |
| Chronicle_DSR_RATE_1 | [0x729af3A41AE9E707e7AE421569C4b9c632B66a0c](https://explorer.testnet.mantle.xyz/address/0x729af3A41AE9E707e7AE421569C4b9c632B66a0c) |
| Chronicle_ETH_BTC_1 | [0x1804969b296E89C1ddB1712fA99816446956637e](https://explorer.testnet.mantle.xyz/address/0x1804969b296E89C1ddB1712fA99816446956637e) |
| Chronicle_ETH_USD_1 | [0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660](https://explorer.testnet.mantle.xyz/address/0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660) |
| Chronicle_GNO_USD_1 | [0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8](https://explorer.testnet.mantle.xyz/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8) |
| Chronicle_IBTA_USD_1 | [0x07487b0Bf28801ECD15BF09C13e32FBc87572e81](https://explorer.testnet.mantle.xyz/address/0x07487b0Bf28801ECD15BF09C13e32FBc87572e81) |
| Chronicle_LDO_USD_1 | [0xa53dc5B100f0e4aB593f2D8EcD3c5932EE38215E](https://explorer.testnet.mantle.xyz/address/0xa53dc5B100f0e4aB593f2D8EcD3c5932EE38215E) |
| Chronicle_LINK_USD_1 | [0xecB89B57A60ac44E06ab1B767947c19b236760c3](https://explorer.testnet.mantle.xyz/address/0xecB89B57A60ac44E06ab1B767947c19b236760c3) |
| Chronicle_MATIC_USD_1 | [0xa48c56e48A71966676d0D113EAEbe6BE61661F18](https://explorer.testnet.mantle.xyz/address/0xa48c56e48A71966676d0D113EAEbe6BE61661F18) |
| Chronicle_MKR_USD_1 | [0x67ffF0C6abD2a36272870B1E8FE42CC8E8D5ec4d](https://explorer.testnet.mantle.xyz/address/0x67ffF0C6abD2a36272870B1E8FE42CC8E8D5ec4d) |
| Chronicle_OP_USD_1 | [0xfadF055f6333a4ab435D2D248aEe6617345A4782](https://explorer.testnet.mantle.xyz/address/0xfadF055f6333a4ab435D2D248aEe6617345A4782) |
| Chronicle_RETH_USD_1 | [0xEE02370baC10b3AC3f2e9eebBf8f3feA1228D263](https://explorer.testnet.mantle.xyz/address/0xEE02370baC10b3AC3f2e9eebBf8f3feA1228D263) |
| Chronicle_SDAI_DAI_1 | [0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491](https://explorer.testnet.mantle.xyz/address/0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491) |
| Chronicle_SDAI_ETH_1 | [0x05aB94eD168b5d18B667cFcbbA795789C750D893](https://explorer.testnet.mantle.xyz/address/0x05aB94eD168b5d18B667cFcbbA795789C750D893) |
| Chronicle_SDAI_MATIC_1 | [0x2f0e0dE1F8c11d2380dE093ED15cA6cE07653cbA](https://explorer.testnet.mantle.xyz/address/0x2f0e0dE1F8c11d2380dE093ED15cA6cE07653cbA) |
| Chronicle_SNX_USD_1 | [0xD20f1eC72bA46b6126F96c5a91b6D3372242cE98](https://explorer.testnet.mantle.xyz/address/0xD20f1eC72bA46b6126F96c5a91b6D3372242cE98) |
| Chronicle_SOL_USD_1 | [0x4D1e6f39bbfcce8b471171b8431609b83f3a096D](https://explorer.testnet.mantle.xyz/address/0x4D1e6f39bbfcce8b471171b8431609b83f3a096D) |
| Chronicle_UNI_USD_1 | [0x2aFF768F5d6FC63fA456B062e02f2049712a1ED5](https://explorer.testnet.mantle.xyz/address/0x2aFF768F5d6FC63fA456B062e02f2049712a1ED5) |
| Chronicle_USDC_USD_1 | [0x1173da1811a311234e7Ab0A33B4B7B646Ff42aEC](https://explorer.testnet.mantle.xyz/address/0x1173da1811a311234e7Ab0A33B4B7B646Ff42aEC) |
| Chronicle_USDT_USD_1 | [0x0bd446021Ab95a2ABd638813f9bDE4fED3a5779a](https://explorer.testnet.mantle.xyz/address/0x0bd446021Ab95a2ABd638813f9bDE4fED3a5779a) |
| Chronicle_WBTC_USD_1 | [0xA7226d85CE5F0DE97DCcBDBfD38634D6391d0584](https://explorer.testnet.mantle.xyz/address/0xA7226d85CE5F0DE97DCcBDBfD38634D6391d0584) |
| Chronicle_WSTETH_USD_1 | [0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab](https://explorer.testnet.mantle.xyz/address/0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab) |
| Chronicle_WUSDM_USDM_1 | [0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56](https://explorer.testnet.mantle.xyz/address/0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56) |
| Chronicle_WUSDM_USD_1 | [0x6d10de3640ab2F11B1102Ae72C06BB497E5E859b](https://explorer.testnet.mantle.xyz/address/0x6d10de3640ab2F11B1102Ae72C06BB497E5E859b) |
| Chronicle_YFI_USD_1 | [0x0893EcE705639112C1871DcE88D87D81540D0199](https://explorer.testnet.mantle.xyz/address/0x0893EcE705639112C1871DcE88D87D81540D0199) |
</details>


<details>
<summary>Smart Contract Addresses on **Scroll Sepolia**</summary>

| Contract Name | Contract Address on Scroll Sepolia                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SelfKisser_1 | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://sepolia.scrollscan.com/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d) |
| Chronicle_AAVE_USD_1 | [0xa38C2B5408Eb1DCeeDBEC5d61BeD580589C6e717](https://sepolia.scrollscan.com/address/0xa38C2B5408Eb1DCeeDBEC5d61BeD580589C6e717) |
| Chronicle_ARB_USD_1 | [0x579BfD0581beD0d18fBb0Ebab099328d451552DD](https://sepolia.scrollscan.com/address/0x579BfD0581beD0d18fBb0Ebab099328d451552DD) |
| Chronicle_AVAX_USD_1 | [0x78C8260AF7C8D0d17Cf3BA91F251E9375A389688](https://sepolia.scrollscan.com/address/0x78C8260AF7C8D0d17Cf3BA91F251E9375A389688) |
| Chronicle_BNB_USD_1 | [0x26EE3E8b618227C1B735D8D884d52A852410019f](https://sepolia.scrollscan.com/address/0x26EE3E8b618227C1B735D8D884d52A852410019f) |
| Chronicle_BTC_USD_1 | [0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c](https://sepolia.scrollscan.com/address/0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c) |
| Chronicle_CRV_USD_1 | [0xf29a932ae56bB96CcACF8d1f2Da9028B01c8F030](https://sepolia.scrollscan.com/address/0xf29a932ae56bB96CcACF8d1f2Da9028B01c8F030) |
| Chronicle_DAI_USD_1 | [0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4](https://sepolia.scrollscan.com/address/0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4) |
| Chronicle_ETH_BTC_1 | [0x1804969b296E89C1ddB1712fA99816446956637e](https://sepolia.scrollscan.com/address/0x1804969b296E89C1ddB1712fA99816446956637e) |
| Chronicle_ETH_USD_1 | [0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660](https://sepolia.scrollscan.com/address/0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660) |
| Chronicle_GNO_USD_1 | [0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8](https://sepolia.scrollscan.com/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8) |
| Chronicle_IBTA_USD_1 | [0x07487b0Bf28801ECD15BF09C13e32FBc87572e81](https://sepolia.scrollscan.com/address/0x07487b0Bf28801ECD15BF09C13e32FBc87572e81) |
| Chronicle_LDO_USD_1 | [0xa53dc5B100f0e4aB593f2D8EcD3c5932EE38215E](https://sepolia.scrollscan.com/address/0xa53dc5B100f0e4aB593f2D8EcD3c5932EE38215E) |
| Chronicle_LINK_USD_1 | [0xecB89B57A60ac44E06ab1B767947c19b236760c3](https://sepolia.scrollscan.com/address/0xecB89B57A60ac44E06ab1B767947c19b236760c3) |
| Chronicle_MATIC_USD_1 | [0xa48c56e48A71966676d0D113EAEbe6BE61661F18](https://sepolia.scrollscan.com/address/0xa48c56e48A71966676d0D113EAEbe6BE61661F18) |
| Chronicle_MKR_USD_1 | [0x67ffF0C6abD2a36272870B1E8FE42CC8E8D5ec4d](https://sepolia.scrollscan.com/address/0x67ffF0C6abD2a36272870B1E8FE42CC8E8D5ec4d) |
| Chronicle_OP_USD_1 | [0xfadF055f6333a4ab435D2D248aEe6617345A4782](https://sepolia.scrollscan.com/address/0xfadF055f6333a4ab435D2D248aEe6617345A4782) |
| Chronicle_RETH_USD_1 | [0xEE02370baC10b3AC3f2e9eebBf8f3feA1228D263](https://sepolia.scrollscan.com/address/0xEE02370baC10b3AC3f2e9eebBf8f3feA1228D263) |
| Chronicle_SDAI_DAI_1 | [0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491](https://sepolia.scrollscan.com/address/0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491) |
| Chronicle_SNX_USD_1 | [0xD20f1eC72bA46b6126F96c5a91b6D3372242cE98](https://sepolia.scrollscan.com/address/0xD20f1eC72bA46b6126F96c5a91b6D3372242cE98) |
| Chronicle_SOL_USD_1 | [0x4D1e6f39bbfcce8b471171b8431609b83f3a096D](https://sepolia.scrollscan.com/address/0x4D1e6f39bbfcce8b471171b8431609b83f3a096D) |
| Chronicle_UNI_USD_1 | [0x2aFF768F5d6FC63fA456B062e02f2049712a1ED5](https://sepolia.scrollscan.com/address/0x2aFF768F5d6FC63fA456B062e02f2049712a1ED5) |
| Chronicle_USDC_USD_1 | [0x1173da1811a311234e7Ab0A33B4B7B646Ff42aEC](https://sepolia.scrollscan.com/address/0x1173da1811a311234e7Ab0A33B4B7B646Ff42aEC) |
| Chronicle_USDT_USD_1 | [0x0bd446021Ab95a2ABd638813f9bDE4fED3a5779a](https://sepolia.scrollscan.com/address/0x0bd446021Ab95a2ABd638813f9bDE4fED3a5779a) |
| Chronicle_WBTC_USD_1 | [0xA7226d85CE5F0DE97DCcBDBfD38634D6391d0584](https://sepolia.scrollscan.com/address/0xA7226d85CE5F0DE97DCcBDBfD38634D6391d0584) |
| Chronicle_WSTETH_ETH_1 | [0x40BE3f9D43DbdadE162F04CC97A29603D88F50E4](https://sepolia.scrollscan.com/address/0x40BE3f9D43DbdadE162F04CC97A29603D88F50E4) |
| Chronicle_WSTETH_USD_1 | [0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab](https://sepolia.scrollscan.com/address/0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab) |
| Chronicle_YFI_USD_1 | [0x0893EcE705639112C1871DcE88D87D81540D0199](https://sepolia.scrollscan.com/address/0x0893EcE705639112C1871DcE88D87D81540D0199) |
</details>

<details>
<summary>Smart Contract Addresses on **zkSync Sepolia**</summary>

| Contract Name | Contract Address on zkSync Sepolia                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SelfKisser_1 | [0x25f594edde4f58A14970b2ef6616badBa4B1CdDD](https://sepolia.explorer.zksync.io/address/0x25f594edde4f58A14970b2ef6616badBa4B1CdDD) |
| Chronicle_AAVE_USD_1 | [0x6dc3D077E795d1faCEAEb94B2396471A91Be5498](https://sepolia.explorer.zksync.io/address/0x6dc3D077E795d1faCEAEb94B2396471A91Be5498) |
| Chronicle_ARB_USD_1 | [0x9635DE4989C0832Fc581cd1666cE3a7EdF973a29](https://sepolia.explorer.zksync.io/address/0x9635DE4989C0832Fc581cd1666cE3a7EdF973a29) |
| Chronicle_AVAX_USD_1 | [0x231E4fA18Cc387C83b3941224E7B4E3491e616e0](https://sepolia.explorer.zksync.io/address/0x231E4fA18Cc387C83b3941224E7B4E3491e616e0) |
| Chronicle_BNB_USD_1 | [0x41b6E1613fE235Ebc81829a5B02bC2f96212eb49](https://sepolia.explorer.zksync.io/address/0x41b6E1613fE235Ebc81829a5B02bC2f96212eb49) |
| Chronicle_BTC_USD_1 | [0x0C5b65706224cb8D7d41524DCdF414FeaD4a2C28](https://sepolia.explorer.zksync.io/address/0x0C5b65706224cb8D7d41524DCdF414FeaD4a2C28) |
| Chronicle_CRV_USD_1 | [0x5A91677DCd79d578E5963B64Ef3E963Beb626F14](https://sepolia.explorer.zksync.io/address/0x5A91677DCd79d578E5963B64Ef3E963Beb626F14) |
| Chronicle_DAI_USD_1 | [0x8dE859e3281CC34574161189CccBD953Dd67DE24](https://sepolia.explorer.zksync.io/address/0x8dE859e3281CC34574161189CccBD953Dd67DE24) |
| Chronicle_DSR_RATE_1 | [0x68C9aa7bA59811B2B995CDB1b73cAac84522fBC3](https://sepolia.explorer.zksync.io/address/0x68C9aa7bA59811B2B995CDB1b73cAac84522fBC3) |
| Chronicle_ETH_BTC_1 | [0x25ECc0dF13b33faF4813438BFB8DA3968bEb705A](https://sepolia.explorer.zksync.io/address/0x25ECc0dF13b33faF4813438BFB8DA3968bEb705A) |
| Chronicle_ETH_USD_1 | [0x46cf81028852a948D22Af41e264a5895F5115006](https://sepolia.explorer.zksync.io/address/0x46cf81028852a948D22Af41e264a5895F5115006) |
| Chronicle_GNO_USD_1 | [0x6C10082C014476F21344CCe0f6b5B7463fFbAC7A](https://sepolia.explorer.zksync.io/address/0x6C10082C014476F21344CCe0f6b5B7463fFbAC7A) |
| Chronicle_IBTA_USD_1 | [0x8120d0A79871eB4966fe5D7dF1608FF58229F6F3](https://sepolia.explorer.zksync.io/address/0x8120d0A79871eB4966fe5D7dF1608FF58229F6F3) |
| Chronicle_LDO_USD_1 | [0x3B05D11dEd3a3E585E1AA6d1ed87A0177D18894B](https://sepolia.explorer.zksync.io/address/0x3B05D11dEd3a3E585E1AA6d1ed87A0177D18894B) |
| Chronicle_LINK_USD_1 | [0x566c45c6f10D207Cc2F083a33D56B4ccDF23B7bc](https://sepolia.explorer.zksync.io/address/0x566c45c6f10D207Cc2F083a33D56B4ccDF23B7bc) |
| Chronicle_MATIC_USD_1 | [0xB146e962BDe5185c45ea6e320b14d67F3DFD2173](https://sepolia.explorer.zksync.io/address/0xB146e962BDe5185c45ea6e320b14d67F3DFD2173) |
| Chronicle_MKR_USD_1 | [0x68e4aC3eCDaa1a6072c7A5f38f2CCF8c6E0Cccb2](https://sepolia.explorer.zksync.io/address/0x68e4aC3eCDaa1a6072c7A5f38f2CCF8c6E0Cccb2) |
| Chronicle_OP_USD_1 | [0x47bAD642f631eB94894A58Af6bC7D4c9DbB6485c](https://sepolia.explorer.zksync.io/address/0x47bAD642f631eB94894A58Af6bC7D4c9DbB6485c) |
| Chronicle_RETH_USD_1 | [0x20374ea0Fb22A2CE2f84B4A628e4eEF01793cF6A](https://sepolia.explorer.zksync.io/address/0x20374ea0Fb22A2CE2f84B4A628e4eEF01793cF6A) |
| Chronicle_SDAI_DAI_1 | [0x7e7Df5117f5A6E8Cf82a0F80F06fE1119FC9b741](https://sepolia.explorer.zksync.io/address/0x7e7Df5117f5A6E8Cf82a0F80F06fE1119FC9b741) |
| Chronicle_SDAI_ETH_1 | [0x71a16AeAA5650e519b2a606BCB496cf1CAd75b94](https://sepolia.explorer.zksync.io/address/0x71a16AeAA5650e519b2a606BCB496cf1CAd75b94) |
| Chronicle_SDAI_MATIC_1 | [0x32952b3Ff76C658826e906C441B98C3609BD7981](https://sepolia.explorer.zksync.io/address/0x32952b3Ff76C658826e906C441B98C3609BD7981) |
| Chronicle_SNX_USD_1 | [0x5912D288bDB918f931516041Ecd8a72fD1563A39](https://sepolia.explorer.zksync.io/address/0x5912D288bDB918f931516041Ecd8a72fD1563A39) |
| Chronicle_SOL_USD_1 | [0x79a6Cb3D5cf55a5Ddc91d041B5F3D192AA1799F5](https://sepolia.explorer.zksync.io/address/0x79a6Cb3D5cf55a5Ddc91d041B5F3D192AA1799F5) |
| Chronicle_UNI_USD_1 | [0x52485646EF15dB99504965de37494440Be862685](https://sepolia.explorer.zksync.io/address/0x52485646EF15dB99504965de37494440Be862685) |
| Chronicle_USDC_USD_1 | [0xEf281522E64e91A7333335986DF7B47720934A95](https://sepolia.explorer.zksync.io/address/0xEf281522E64e91A7333335986DF7B47720934A95) |
| Chronicle_USDT_USD_1 | [0xAD86B6EcC316406b2688e483dbDceBc33ADD0c8E](https://sepolia.explorer.zksync.io/address/0xAD86B6EcC316406b2688e483dbDceBc33ADD0c8E) |
| Chronicle_WBTC_USD_1 | [0x793C59AF9d64fD94CE40B35b649E59c6AA13c5B0](https://sepolia.explorer.zksync.io/address/0x793C59AF9d64fD94CE40B35b649E59c6AA13c5B0) |
| Chronicle_WSTETH_USD_1 | [0x1A622e80A5a08e943f508940881d9cb92D8b4d31](https://sepolia.explorer.zksync.io/address/0x1A622e80A5a08e943f508940881d9cb92D8b4d31) |
| Chronicle_YFI_USD_1 | [0x25bb6AadC4276362F0Ca8Bb227D393d0aC54111e](https://sepolia.explorer.zksync.io/address/0x25bb6AadC4276362F0Ca8Bb227D393d0aC54111e) |
</details>

<details>
<summary> Smart Contract Addresses on **Optimism Sepolia** </summary>

| Contract Name | Contract Address on Optimism Sepolia                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
SelfKisser_1 | [0xfF619a90cDa4020897808D74557ce3b648922C37](https://sepolia-optimism.etherscan.io/address/0xfF619a90cDa4020897808D74557ce3b648922C37) |
| Chronicle_AAVE_USD_1| [0xa38C2B5408Eb1DCeeDBEC5d61BeD580589C6e717](https://sepolia-optimism.etherscan.io/address/0xa38C2B5408Eb1DCeeDBEC5d61BeD580589C6e717)|
| Chronicle_ARB_USD_1 | [0x579BfD0581beD0d18fBb0Ebab099328d451552DD](https://sepolia-optimism.etherscan.io/address/0x579BfD0581beD0d18fBb0Ebab099328d451552DD) |
| Chronicle_AVAX_USD_1 | [0x78C8260AF7C8D0d17Cf3BA91F251E9375A389688](https://sepolia-optimism.etherscan.io/address/0x78C8260AF7C8D0d17Cf3BA91F251E9375A389688) |
| Chronicle_BNB_USD_1 | [0x26EE3E8b618227C1B735D8D884d52A852410019f](https://sepolia-optimism.etherscan.io/address/0x26EE3E8b618227C1B735D8D884d52A852410019f) |
| Chronicle_BTC_USD_1 | [0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c](https://sepolia-optimism.etherscan.io/address/0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c) |
| Chronicle_CRV_USD_1 | [0xf29a932ae56bB96CcACF8d1f2Da9028B01c8F030](https://sepolia-optimism.etherscan.io/address/0xf29a932ae56bB96CcACF8d1f2Da9028B01c8F030) |
| Chronicle_CRVUSD_USD_1 | [0x3de6bEc5d5FE063fB23F36E363182AB353AbC56E](https://sepolia-optimism.etherscan.io/address/0x3de6bEc5d5FE063fB23F36E363182AB353AbC56E) |
| Chronicle_DAI_USD_1 | [0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4](https://sepolia-optimism.etherscan.io/address/0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4) |
| Chronicle_ETH_BTC_1 | [0x1804969b296E89C1ddB1712fA99816446956637e](https://sepolia-optimism.etherscan.io/address/0x1804969b296E89C1ddB1712fA99816446956637e) |
| Chronicle_ETH_USD_1 | [0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660](https://sepolia-optimism.etherscan.io/address/0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660) |
| Chronicle_ETHX_USD_1 | [0xc6639C0591d632Bf689ceab617A0377072e7f524](https://sepolia-optimism.etherscan.io/address/0xc6639C0591d632Bf689ceab617A0377072e7f524) |
| Chronicle_GNO_USD_1 | [0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8](https://sepolia-optimism.etherscan.io/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8) |
| Chronicle_IBTA_USD_1 | [0x07487b0Bf28801ECD15BF09C13e32FBc87572e81](https://sepolia-optimism.etherscan.io/address/0x07487b0Bf28801ECD15BF09C13e32FBc87572e81) |
| Chronicle_LDO_USD_1 | [0xa53dc5B100f0e4aB593f2D8EcD3c5932EE38215E](https://sepolia-optimism.etherscan.io/address/0xa53dc5B100f0e4aB593f2D8EcD3c5932EE38215E) |
| Chronicle_LIDO_LST_2DAYS_1 | [0xe8d114cF81F345d934Bb1c64Fb1917A6511c04B5](https://sepolia-optimism.etherscan.io/address/0xe8d114cF81F345d934Bb1c64Fb1917A6511c04B5) |
| Chronicle_LINK_USD_1 | [0xecB89B57A60ac44E06ab1B767947c19b236760c3](https://sepolia-optimism.etherscan.io/address/0xecB89B57A60ac44E06ab1B767947c19b236760c3) |
| Chronicle_MATIC_USD_1 | [0xa48c56e48A71966676d0D113EAEbe6BE61661F18](https://sepolia-optimism.etherscan.io/address/0xa48c56e48A71966676d0D113EAEbe6BE61661F18) |
| Chronicle_MKR_USD_1 | [0x67ffF0C6abD2a36272870B1E8FE42CC8E8D5ec4d](https://sepolia-optimism.etherscan.io/address/0x67ffF0C6abD2a36272870B1E8FE42CC8E8D5ec4d) |
| Chronicle_MNT_USD_1 | [0x90f13128715157f6f2708b3e379a345a330C598c](https://sepolia-optimism.etherscan.io/address/0x90f13128715157f6f2708b3e379a345a330C598c) |
| Chronicle_OP_USD_1 | [0xfadF055f6333a4ab435D2D248aEe6617345A4782](https://sepolia-optimism.etherscan.io/address/0xfadF055f6333a4ab435D2D248aEe6617345A4782) |
| Chronicle_RETH_ETH_1 | [0xAE888F70d319d9ab9318B2326AEf97Bde2c1F96f](https://sepolia-optimism.etherscan.io/address/0xAE888F70d319d9ab9318B2326AEf97Bde2c1F96f) |
| Chronicle_RETH_USD_1 | [0xEE02370baC10b3AC3f2e9eebBf8f3feA1228D263](https://sepolia-optimism.etherscan.io/address/0xEE02370baC10b3AC3f2e9eebBf8f3feA1228D263) |
| Chronicle_SD_USD_1 | [0x0939F04AbA985E3861C4D7AD9fbD66b976Dd47a8](https://sepolia-optimism.etherscan.io/address/0x0939F04AbA985E3861C4D7AD9fbD66b976Dd47a8) |
| Chronicle_SDAI_DAI_1 | [0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491](https://sepolia-optimism.etherscan.io/address/0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491) |
| Chronicle_SNX_USD_1 | [0xD20f1eC72bA46b6126F96c5a91b6D3372242cE98](https://sepolia-optimism.etherscan.io/address/0xD20f1eC72bA46b6126F96c5a91b6D3372242cE98) |
| Chronicle_SOL_USD_1 | [0x4D1e6f39bbfcce8b471171b8431609b83f3a096D](https://sepolia-optimism.etherscan.io/address/0x4D1e6f39bbfcce8b471171b8431609b83f3a096D) |
| Chronicle_UNI_USD_1 | [0x2aFF768F5d6FC63fA456B062e02f2049712a1ED5](https://sepolia-optimism.etherscan.io/address/0x2aFF768F5d6FC63fA456B062e02f2049712a1ED5) |
| Chronicle_USDC_USD_1 | [0x1173da1811a311234e7Ab0A33B4B7B646Ff42aEC](https://sepolia-optimism.etherscan.io/address/0x1173da1811a311234e7Ab0A33B4B7B646Ff42aEC) |
| Chronicle_USDM_USD_1 | [0xe971B2aF139Ad803656533059Bc028b61C00F67F](https://sepolia-optimism.etherscan.io/address/0xe971B2aF139Ad803656533059Bc028b61C00F67F) |
| Chronicle_USDT_USD_1 | [0x0bd446021Ab95a2ABd638813f9bDE4fED3a5779a](https://sepolia-optimism.etherscan.io/address/0x0bd446021Ab95a2ABd638813f9bDE4fED3a5779a) |
| Chronicle_WBTC_USD_1 | [0xA7226d85CE5F0DE97DCcBDBfD38634D6391d0584](https://sepolia-optimism.etherscan.io/address/0xA7226d85CE5F0DE97DCcBDBfD38634D6391d0584) |
| Chronicle_WSTETH_ETH_1 | [0x40BE3f9D43DbdadE162F04CC97A29603D88F50E4](https://sepolia-optimism.etherscan.io/address/0x40BE3f9D43DbdadE162F04CC97A29603D88F50E4) |
| Chronicle_WSTETH_USD_1 | [0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab](https://sepolia-optimism.etherscan.io/address/0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab) |
| Chronicle_WUSDM_USD_1 | [0x6d10de3640ab2F11B1102Ae72C06BB497E5E859b](https://sepolia-optimism.etherscan.io/address/0x6d10de3640ab2F11B1102Ae72C06BB497E5E859b) |
| Chronicle_WUSDM_USDM_1 | [0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56](https://sepolia-optimism.etherscan.io/address/0xF719E362724Dda4Ad3B8D92D49E0c44E48Df4e56) |
| Chronicle_YFI_USD_1 | [0x0893EcE705639112C1871DcE88D87D81540D0199](https://sepolia-optimism.etherscan.io/address/0x0893EcE705639112C1871DcE88D87D81540D0199) |

</details>

## 🤝 Getting Help

:::note
If you have any questions and would like support with your project, please join our **[Discord](https://discord.com/invite/CjgvJ9EspJ)** and drop your question in the hackathons channel.
:::

Say hi 👋 when you see them around and ask your questions directly to one of our team members who are on-site during the event:

   - Alexander Vasylchenko, Product, [@AlexanderVasyl](https://x.com/AlexanderVasyl)
   - Angus Tookey, Marketing, [@AngusTookey](https://x.com/AngusTookey)
   - Bianca Buzea, Developer Relations, [@buzea200](https://x.com/buzea200)
   - Jenn Senhaji, BD/Growth, [@jensenhaji](https://x.com/jensenhaji)
   - Niklas Kunkel, Founder, [@nomos_paradox](https://x.com/nomos_paradox)
   - Pawel Zaremba, Engineering, [@teghnet](https://x.com/teghnet)


## General Setup Useful Links

<details>
<summary>List of Sepolia ETH Faucets:</summary>

    
  - [https://cloud.google.com/application/web3/faucet/ethereum/sepolia](https://cloud.google.com/application/web3/faucet/ethereum/sepolia) - Does not require to have any funds on Mainnet
  - [https://www.alchemy.com/faucets/ethereum-sepolia](https://www.alchemy.com/faucets/ethereum-sepolia)
  - [https://ethglobal.com/faucet](https://ethglobal.com/faucet) - Faucets for different Testnet networks for various chains
  - [https://sepoliafaucet.com/](https://sepoliafaucet.com/)
  </details>

  <details>
<summary>Chainlist RPCs:</summary>

  - [Sepolia](https://chainlist.org/chain/11155111)
  - [Gnosis Mainnet](https://chainlist.org/chain/100)
  - [Mantle Testnet](https://chainlist.org/chain/5003)
  - [Scroll-Sepolia](https://chainlist.org/chain/534351)
  - [Polygon testnet-ZKEVM-mango](https://chainlist.org/chain/1442)

  </details>


<details>
<summary>RPC Providers:</summary>

  - [drpc.org](https://drpc.org/)
  - [nodies](https://www.nodies.app/)
  - [grove](https://www.grove.city/)
  - [blast api](https://blastapi.io/)
  - [ankr](https://www.ankr.com/rpc/)
</details>


- Foundry Setup:
  - [https://getfoundry.sh](https://getfoundry.sh/)
- Create a Test Wallet:
  - `cast new wallet`


## More on Scribe

- [Eth Magician Post](https://ethereum-magicians.org/t/an-efficient-schnorr-multi-signature-implementation/15510)
- [Twitter Thread](https://twitter.com/merkleplant_eth/status/1693652385980379593)
- [Scribe's docs](https://github.com/chronicleprotocol/scribe/blob/main/docs/Scribe.md)


## Good luck and happy hacking! 🧙