---
sidebar_position: 1
---

# 🇺🇸 Chronicle @ETHGlobal San Francisco 

🛠️💻🛠️ Hello builders and welcome to ETHGlobal San Francisco bounties page! 

 This document serves as a guide for integrating Chronicle Oracles into your hackathon projects. 

:::tip
### Chronicle Protocol Contracts
You can view all the smart contract addresses [here](../Developers/testnet.md), or directly via the [Dashboard](https://chroniclelabs.org/dashboard). If you are using the Dashboard, you can find the Testnet addresses for different chains by toggling `<dev mode>`.
:::
:::important
### Self-Kisser: Permissionless Whitelisting

Chronicle safeguards Oracle read functions with a whitelist, ensuring controlled access to critical data. However, the SelfKisser contract unfolds a possibility where you can whitelist yourself (or, as whimsically termed, "kiss") yourself on **Testnet chains**.

To kiss yourself, i.e., `msg.sender`, please check out the following guide, **[Getting Read Access to Contracts](../../Developers/Guides/whitelistAddress.md)**. On the same page, you will find a table with the SelfKisser addresses for different Testnet chains.


**Please note that this is a mandatory step to be able to read from Chronicle Oracles!**
:::


## 💰 Bounties: 10K 

<details>
<summary>Track 1: Best Integration of Chronicle Protocol </summary>

### Track 1: Best Integration of Chronicle Protocol 
Unlock new possibilities with Scribe, Chronicle Protocol's cost-efficient oracles!
Leverage our diverse oracle solutions across 10 supported chains to power your next big idea. Whether you're building a game with dynamic pricing, crafting a reputation system, or designing an advanced analytics dashboard, Chronicle's robust, chain-agnostic infrastructure provides the flexibility and performance to fuel your innovation. Show us what you can create and surprise us with your unique use cases!

- 🥇 1st: $2750
- 🥈 2nd: $2000

### 📜 Qualification rules:

- Each project must use Chronicle Oracles in some form to make a state change on a blockchain, otherwise it will not be eligible. This means that a front end simply reading from Chronicle Oracles doesn't count.
- Deployed contract addresses must be included in your repo’s README. You can deploy your contracts on any of the following chains on Testnet: Ethereum, Arbitrum, Base, Polygon zkEVM, Gnosis Chain (on Mainnet only) , Scroll, zkSync, Optimism, Mantle, Berachain.

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
<summary>Track 2: Best DeFi Application Powered by Chronicle</summary>

### Track 2: Best DeFi Application Powered by Chronicle

Build a DeFi application powered by Chronicle Protocol’s Oracles. Potential examples include lending protocols, decentralized exchanges, yield farming strategies, liquidity pools, stablecoins, prediction markets, decentralized insurance, decentralized credit score applications, trading bots, etc.
The prize will go to the top teams with the best DeFi integration of Chronicle's Scribe cost-efficient Oracles.

- 🥇 1st: $2750
- 🥈 2nd: $2000


### 📜 Qualification rules:

- Each project must use Chronicle Oracles in some form to make a state change on a blockchain, otherwise it will not be eligible. This means that a front end simply reading from Chronicle Oracles doesn't count.
- Deployed contract addresses must be included in your repo’s README. You can deploy your contracts on any of the following chains either on Testnet: Ethereum, Arbitrum, Base, Polygon zkEVM, Gnosis Chain (on Mainnet only), Scroll, zkSync, Optimism, Mantle, Berachain.


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

## Track 3: Best Scribe Oracles Integration Tutorial

This prize is for the best technical tutorial for developers on integrating Chronicle's Scribe Oracles (https://docs.chroniclelabs.org/Intro/scribe).

- 🥇 1st: $500


### 📜 Qualification rules:
- The submitted material should be your own. Material originating from other sources or generated with AI does not qualify.
- Include the working example associated with the tutorial.
- The tutorial must present a novel approach or solution that is not already available in existing documentation or tutorials.

### 🎯 Judging Criteria

- Accuracy: Information provided should be factually correct and well-researched.
- Clarity: Concepts should be explained clearly and concisely, avoiding unnecessary jargon.
- Extensibility - how easy can a developer use this material to build out their own idea?
- Relevance: The content should be relevant to the target audience and meet their learning needs.
- Practicality: The content should offer practical insights, tips, or steps that the audience can apply.

### 🏁 Assets to submit:

For this track you only need to submit a link to your content and its associated code and to complete the 2-minute [Builder Feedback Form](https://forms.gle/SvcS5FsRDjDd5crA7).


</details>

## ✏️ Workshops

- 🛠️ Crash Course on Oracles with Chronicle Protocol - Friday, 18th October, 04:00pm, Room 2

## 📤 Resources


- **[Scaffold-oracle-reader](https://github.com/chronicleprotocol/scaffold-oracle-reader) based on Scaffold-ETH2, to help you prototype easily and experiment with Solidity using a frontend that adapts to your smart contract**
- [How To Use Read/Write Contract Features on Etherscan](https://info.etherscan.com/how-to-use-read-or-write-contract-features-on-etherscan/)


### Scribe

Scribe is an extremely gas-efficient Oracle based on aggregated Schnorr signatures. Providing nearly constant gas costs on Layer 2s and on Layer 1s, Scribe boasts of fixed gas costs, leading to substantial savings—over 60% relative to competing Oracles and an impressive 80% compared to Chainlink. This approach to gas management significantly boosts the scalability of the Oracle.

The Chronicle Scribe Oracle interface is plug-and-play with Chainlink and Maker Oracles, providing a smooth transition for developers used to these platforms.

All data delivered by a Chronicle Oracle is verifiable via The [Chronicle Dashboard](https://chroniclelabs.org/dashboard).

👉 [Scribe Public Repo](https://github.com/chronicleprotocol/scribe)

### CAST

Cast is a command-line interface (CLI) tool by the Foundry team to streamline your interaction with Ethereum and other EVM-based chains. Whether you're making smart contract calls, sending transactions, or retrieving any chain data, cast can help with that. You can read more [here](https://book.getfoundry.sh/reference/cast/cast).



## 🤝 Getting Help

:::note
If you have any questions and would like support with your project, please join our **[Discord](https://discord.com/invite/CjgvJ9EspJ)** and drop your question in the hackathons channel.
:::

Say hi 👋 when you spot the team in their Chronicle t-shirts and feel free to ask any questions directly to our on-site team members. You can also visit the Chronicle booth for hackathon support.

## More on Scribe
- [Eth Magician Post](https://ethereum-magicians.org/t/an-efficient-schnorr-multi-signature-implementation/15510)
- [Twitter Thread](https://twitter.com/merkleplant_eth/status/1693652385980379593)
- [Scribe's docs](https://github.com/chronicleprotocol/scribe/blob/main/docs/Scribe.md)

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


## Common Pitfalls

- ⛽️ Ensure you have a sufficient amount of tokens in your wallet to cover gas fees for transactions.
- ⛓️ Ensure your wallet is connected to the correct network corresponding to the contract you are interacting with.
- ⚪️ Make sure to whitelist the address that reads from each Oracle you use. For example, if you're using ETH/USD and ETH/BTC, you'll need to whitelist your address for both Oracles.
- ✅ Ensure you are using the correct SelfKisser address for the chain you are working with, as the SelfKisser may have different addresses across chains. You can find the corresponding SelfKisser addresses for each chain on this [page](../Developers/Guides/whitelistAddress.md). 


## Good luck and happy hacking! 🧙
