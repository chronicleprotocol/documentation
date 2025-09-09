---
sidebar_position: 2
description: Chronicle Protocol General FAQ questions.
keywords: [General, FAQ]
---

## Which chains is Chronicle integrated with?

At the moment, Chronicle Protocol is integrated on fifteen blockchains:

- Ethereum
- Arbitrum
- Mantle
- Gnosis Chain
- zkSync
- Base
- Optimism
- Scroll
- Berachain
- Superseed
- Corn
- Plume Network
- Monad
- Unichain

This is being updated all the time as new chains come online. Please check out the [dashboard](https://chroniclelabs.org/dashboard/oracles) for the most up-to-date overview of the blockchains we are currently integrated with.

## How many decimals do Chronicle Oracles use?

All Chronicle Oracles use 18 decimals.

## Are price feeds chain-specific or chain agnostic?

Chronicle provides price feeds, which can be implemented on any supported chain. These prices are based on global sources, the data is gathered directly from CEXs and DEXs and is not chain specific.

E.g.: GNO on Sepolia: [https://sepolia.etherscan.io/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8#code](https://sepolia.etherscan.io/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8#code)
GNO on Gnosis: [https://gnosisscan.io/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8#code](https://gnosisscan.io/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8#code)

## Where does the data come from?

The data originates from primary onchain sources such as DEXes (e.g., Uniswap, dYdX, Balancer) and offchain CEXes (e.g., Kraken, Binance, Coinbase). Only high-quality sources are used in Chronicle’s data models.

## What types of Oracles does Chronicle Protocol enable?
In addition to the core price feed Oracles, two new products have been introduced: the [Yield Rate Oracle](https://chroniclelabs.org/blog/the-yield-rate-oracle) and the [Verified Asset Oracle](https://chroniclelabs.org/blog/m-0-and-chronicle-raising-the-standard-in-collateral-verification-with-the-rwa-oracle) (formerly known as the Real World Asset Oracle).

## What is the difference between PUSH and PULL oracles?

A push oracle proactively provides data to smart contracts without being explicitly requested, whenever a condition or event happens (sometimes referred to as a threshold or a heartbeat). On the other hand, PULL oracles require smart contracts to request data explicitly. The data is pulled from external sources in response to a query from the smart contract.

## Does Chronicle use a PULL or a PUSH model for its Oracles?

Chronicle operates using a PUSH model.

## Does Chronicle support contract upgrades?

Chronicle contracts are not upgradeable. If oracles are switched, new contracts are deployed, and customers must update the oracle addresses in their contracts accordingly.

## Who are the validators for Chronicle?

The validators of Chronicle are represented by a community of the leading blockchain protocols including:
[MakerDAO](https://makerdao.com), [Infura](https://www.infura.io/), [Gitcoin](https://www.gitcoin.co/), [Etherscan](https://etherscan.io/), [DeFi Saver](https://defisaver.com/), [Gnosis](https://www.gnosis.io/), [Nethermind](https://www.nethermind.io/), [Euler](https://www.euler.finance/), [Mantle](https://www.mantle.xyz/), [ETH Global](https://ethglobal.com/), [SteakHouse Financial](https://www.steakhouse.financial/), [Bitcoin Suisse](https://bitcoinsuisse.com/), [Block Analitica](https://blockanalitica.com/).

This approach to validators is unique to Chronicle, and ensures that the Oracle data is being signed by some of the most trusted and reputable brands in the blockchain space, further reinforcing trust in the protocol.

## How do Oracles work?
Smart contracts on blockchains can’t directly fetch external data such as asset prices because they’re isolated environments. Oracles act as bridges between the blockchain and the outside world.

**Here’s how it works:**

Validators monitor data sources — These can be onchain sources (DEXes) or offchain sources (CEXes). Each validator collects data, aggregates it (using median), and signs it.

Validators exchange their signed data within a peer-to-peer network. They reach consensus on the final value that should be published using median. In each round, one validator is chosen as the leader.

The leader submits the aggregated and verified value to the blockchain. This is a write operation, so it consumes gas.

Once the data is available onchain, smart contracts can query it and use it to trigger actions such as liquidations, settlements, or payouts.

## Why do Oracles need gas?
When the validator network reaches consensus on a data point, such as the price of ETH to USD, one validator is selected to push that value onchain. This involves writing to the blockchain’s state in the same way as sending tokens or updating a smart contract variable, and that action consumes gas.

Without gas, the oracle’s data could not be written onchain and smart contracts would not have access to verified and up to date information.

In short, gas is the cost of making offchain data available onchain.

## Does the Chronicle dashboard pull data from the Chronicle Archive?

The Dashboard pulls from a combination of onchain sources and offchain network traffic that is the basis for the Oracle updates. Specifically, the validators pass cryptographically (ECDSA)-signed price messages that are then computed into a median value for onchain updates. Those messages are ephemeral, so our archiving system saves them in a database for historical preservation.

## Can you provide a comparison of gas usage for a Chronicle Oracle update versus competitors that use a PUSH-based model?

| Oracle Network | Chain | Pair | Gas | No. validators | Etherscan link |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Chronicle |ETH Mainnet | ETH/USD| 54,620 | 13 | https://etherscan.io/tx/0xf365e0c8def94e3aa666dd443ad10c7b86d9bf55b74878e42cf42e9f5b56fdf3 |
| Chainlink |ETH Mainnet | ETH/USD| 333,602 | 11 | https://etherscan.io/tx/0xe236f406773bd2049549131646cda58497a1a9cb9c03fd624a5552fdd1503bd3 |
| Chronicle | Arbitrum | ETH/USD| 143,266 | 13 | https://arbiscan.io/tx/0xf9e83b4515303b22bbae8274f5b4e3c7b64c988c3b026d40b0984075913609d9 |
| Chainlink | Arbitrum | ETH/USD| 185,113 | 4 | https://arbiscan.io/tx/0xfd7a955985634bba3e26a5820aa277479be096b0695872eee0ccf1b7728b3774 |