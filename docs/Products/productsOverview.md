---
sidebar_position: 1
description: Products Overview
keywords: [PUSH Oracle, Proof of Asset, Yield Rate Oracle, Products]
---

# Products Overview 

## Data Feeds 
Chronicle provides [data feeds](../Products/DeFiOracle/DeFiOracle.md) for various types of data, including cryptocurrencies, fiat currencies, yield rates, and more. Chronicle feeds use the PUSH model: instead of waiting for a smart contract to request data, a new value is pushed onchain automatically whenever a set condition is met.

Updates are triggered in two ways:

- Heartbeat: the feed updates at a fixed interval, such as every X minutes or hours, even if the value hasn't changed.
- Deviation threshold: the feed updates as soon as the value moves by more than a set percentage.
## Proof of Asset
 [Proof of Asset](../Products/proofOfAsset/proofOfAsset.md) is Chronicle's verification framework for tokenized real-world assets. The data delivered onchain includes holdings-level data, composition, valuation, liquidity, and yield. This enables users to check not only what a tokenized asset is priced at, but also what it holds, expanding its utility and distribution and enabling automated risk management.