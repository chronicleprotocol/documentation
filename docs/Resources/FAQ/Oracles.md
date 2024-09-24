---
sidebar_position: 3
description: FAQ questions on Chronicle Oracles.
keywords: [Oracles, FAQ]
---
## I am currently using Chainlink. How difficult is it to change to Chronicle?
If you are using Chainlink, you would only have to change the address of your oracle to the Chronicle equivalent. This is because Scribe is partially Chainlink compatible, implementing the most widely, and not deprecated, used functions of the `IChainlinkAggregatorV3` interface such as `latestRoundData()`, `decimals()`, and `latestAnswer()`. 

One thing to keep an eye on is the number of decimals. Chronicle always uses 18 decimals, whereas Chainlink uses different decimals for different oracles. However, if implemented correctly, one can check the decimals and scale them up or down accordingly. Please conduct integration tests and feel free to [reach out](https://discord.com/invite/CjgvJ9EspJ) if there are any issues.

## How do I check if an Oracle becomes inactive/ gets deprecated?
In the event that an Oracle gets deprecated, we will notify all whitelisted customers before offboarding it.
From a technical point of view, if an oracle becomes inactive, the price is set to `0`, and the validators (also known as feeds), are removed from the contract. Therefore, the `read()` function will revert with `0`, the `tryRead()` function will return `(false, 0)`, and the `latestRoundData()` will return `0` as well. 


## How can I check the validators of an Oracle? 
You can use [cast](https://book.getfoundry.sh/reference/cast/cast), a CLI tool designed by the Foundry team to streamline the interaction with the EVM.

`$ cast call $contract 'feeds()(address[])' --rpc-url $rpc` 

Returns an array with the validators.

Alternatively, if you prefer to check on Etherscan, navigate to the `Read Contract` section of the Oracle you want to check, and run the `feeds()` function. The result will list all the validator addresses that are authorized to sign a price update. 

## How can I check if an address is whitelisted to read data?

`$ cast call $oracle "tolled(address)(bool)" <your address> --rpc-url $rpc`

Returns either `true` or `false`.

## How can I check how many validators have signed a price message?

On Etherscan, navigate to the `Read Contract` section of the Oracle you want to check, and run the `bar()` function. This returns the number of signatures required for an Oracle update. 

## What is the update threshold for the Oracles?

A new aggregation round is triggered after a specified amount of time since the latest update, or if the new offchain value deviates more than a pre-defined threshold for the onchain value, whichever of these conditions occurs first. If the data values stay within the Deviation Threshold, an update will only be triggered every X minutes / hours.

## Can the update threshold parameters be customized?

Yes, the update parameters, including the update and deviation thresholds, can be customized. For the most up-to-date parameters, please check the specific Oracle on the [Dashboard](https://chroniclelabs.org/dashboard/oracles). If you'd like to request different parameters, please get in touch.
