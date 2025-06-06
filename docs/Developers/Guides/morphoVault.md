---
sidebar_position: 4
description: Using a Chronicle Oracle for Morpho Markets
keywords: [oracles, read]
---
# Deploy a Chronicle Oracle for Morpho Markets
Chronicle's Oracles are partially compatible with Chainlink oracles implementing the most widely used (and not deprecated) functions of the IChainlinkAggregatorV3 interface such as latestRoundData(), decimals(), and latestAnswer().

**For users looking to use a Chronicle Oracle for Morpho Markets, they need to deploy the [Morpho Chainlink Adapter](https://github.com/morpho-org/morpho-blue-oracles/blob/main/src/morpho-chainlink/MorphoChainlinkOracleV2.sol) that interfaces with Chronicle Oracles.** To easily deploy a Morpho Chainlink Adapter, one can use the [MorphoChainlinkOracleV2Factory](https://github.com/morpho-org/morpho-blue-oracles/blob/main/src/morpho-chainlink/MorphoChainlinkOracleV2.sol). A guide on doing so can be found on Morpho's docs [here](https://docs.morpho.org/curation/tutorials/deploying-oracle/).

## Getting Read Access to Chronicle Oracles
 Once the adapter is deployed, its address should be whitelisted by the Chronicle team to gain read access. This is because Chronicle oracles are read protected by a whitelist. To do so, get in touch with the team by [opening a ticket on Discord](https://discord.com/invite/CjgvJ9EspJ), pass us the address, and we will whitelist it for you. 

