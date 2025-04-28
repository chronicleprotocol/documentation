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
- Polygon zkEVM
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

The data originates from primary on-chain sources such as DEXes (e.g., Uniswap, dYdX, Balancer) and off-chain CEXes (e.g., Kraken, Binance, Coinbase). Only high-quality sources are used in Chronicle’s data models.

## What types of Oracles does Chronicle Protocol enable?
In addition to the core price feed Oracles, two new products have been introduced: the [Yield Rate Oracle](https://chroniclelabs.org/blog/the-yield-rate-oracle) and the [Verified Asset Oracle](https://chroniclelabs.org/blog/m-0-and-chronicle-raising-the-standard-in-collateral-verification-with-the-rwa-oracle) (formerly known as the Real World Asset Oracle).

## What is the difference between PUSH and PULL oracles?

A push oracle proactively provides data to smart contracts without being explicitly requested, whenever a condition or event happens (sometimes referred to as a threshold or a heartbeat). On the other hand, PULL oracles require smart contracts to request data explicitly. The data is pulled from external sources in response to a query from the smart contract.

## Does Chronicle use a PULL or a PUSH model for its Oracles?

Chronicle operates using a PUSH model.

## Who are the validators for Chronicle?

The validators of Chronicle are represented by a community of the leading blockchain protocols including:
[MakerDAO](https://makerdao.com), [Infura](https://www.infura.io/), [Gitcoin](https://www.gitcoin.co/), [Etherscan](https://etherscan.io/), [DeFi Saver](https://defisaver.com/), [Gnosis](https://www.gnosis.io/), [Nethermind](https://www.nethermind.io/), [Euler](https://www.euler.finance/), [Mantle](https://www.mantle.xyz/), [ETH Global](https://ethglobal.com/), [SteakHouse Financial](www.steakhouse.financial), [Bitcoin Suisse](bitcoinsuisse.com), [Block Analitica](blockanalitica.com).

This approach to validators is unique to Chronicle, and ensures that the Oracle data is being signed by some of the most trusted and reputable brands in the blockchain space, further reinforcing trust in the protocol.

## Does the Chronicle dashboard pull data from the Chronicle Archive?

The Dashboard pulls from a combination of on-chain sources and off-chain network traffic that is the basis for the Oracle updates. Specifically, the feeds pass cryptographically (ECDSA)-signed price messages that are then computed into a median value for on-chain updates. Those messages are ephemeral, so our archiving system saves them in a database for historical preservation.

## Can you provide a comparison of gas usage for a Chronicle Oracle update versus competitors that use a PUSH-based model?

| Oracle Network | Chain | Pair | Gas | No. validators | Etherscan link |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Chronicle |ETH Mainnet | ETH/USD| 54,620 | 13 | https://etherscan.io/tx/0xf365e0c8def94e3aa666dd443ad10c7b86d9bf55b74878e42cf42e9f5b56fdf3 |
| Chainlink |ETH Mainnet | ETH/USD| 333,602 | 11 | https://etherscan.io/tx/0xe236f406773bd2049549131646cda58497a1a9cb9c03fd624a5552fdd1503bd3 |
| Chronicle | Arbitrum | ETH/USD| 143,266 | 13 | https://arbiscan.io/tx/0xf9e83b4515303b22bbae8274f5b4e3c7b64c988c3b026d40b0984075913609d9 |
| Chainlink | Arbitrum | ETH/USD| 185,113 | 4 | https://arbiscan.io/tx/0xfd7a955985634bba3e26a5820aa277479be096b0695872eee0ccf1b7728b3774 |