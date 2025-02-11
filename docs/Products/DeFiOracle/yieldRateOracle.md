---
sidebar_position: 2
description: DeFi Oracle Data
keywords: [Yield Rate Oracle, DeFi Oracle Data]
---

# Types of Data for DeFi Oracles

Chronicle provides data essential for DeFi protocols, including cryptocurrency prices, fiat exchange rates, staking yield rates, and more. This data is aggregated from multiple sources and verified by a decentralized network of [reputable validators](../../Intro/network.md). 

## Cryptocurrencies Feeds
Chronicle delivers cryptocurrency price feeds across all major EVM-compatible chains. These feeds aggregate pricing data from multiple onchain and offchain tier-one data sources to ensure accuracy and verifiability.

## Fiat Currencies Feeds
Chronicle provides feeds for fiat currencies such as [BRL](https://chroniclelabs.org/dashboard/oracle/BRL/USD?blockchain=), [GBP](https://chroniclelabs.org/dashboard/oracle/GBP/USD?blockchain=), and more.

## Yield Rate Feeds

In collaboration with [Block Analitica](https://blockanalitica.com/), Chronicle has developed a [Yield Rate Oracle](https://github.com/chronicleprotocol/scribe/blob/main/src/extensions/ScribeLST.sol) that tracks and delivers the value of the ETH staking yield onchain. This solution is designed to improve the DeFi user experience and reduce governance overhead.

The Yield Rate Oracle is a Schnorr based Oracle with an additional functionality, `getAPR()` - callable by toll'ed (authorized) addresses.

### Purpose

This Oracle provides lending protocols such as [Spark](https://spark.fi/) with a safe and automated way to customize the interest rate of ETH and ETH-backed derivatives. It eliminates the need for manual rate setting and updates, which are common in many decentralized lending protocols.

The liquid staking token interest rate derives from Lido's [stETH](https://etherscan.io/address/0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84) contract. As the largest validator, Lido’s interest rate reduces randomness in block proposal rewards. To smooth out block rewards, a higher number of validators is necessary, particularly to capture dynamic rewards during market fluctuations. 

### Automated Interest Rate Customization

The Oracle tracks the Staking Yield of the Ethereum validator population and publishes this value onchain. This mechanism enables DeFi platforms to:

- access staking yield data
- automatically adjust interest rates for Liquid Staking Tokens (LSTs)
- customize lending product parameters without manual intervention

By leveraging this onchain data, DeFi protocols can implement dynamic, market-responsive interest rates for LST-based lending products, enhancing both efficiency and user experience.
