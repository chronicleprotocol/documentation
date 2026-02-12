---
sidebar_position: 3
description: FAQ questions on Chronicle Oracles.
keywords: [Oracles, FAQ]
---
## I am currently using Chainlink. How difficult is it to change to Chronicle?
If you are using Chainlink, you would only have to change the address of your oracle to the Chronicle equivalent. This is because Scribe is partially Chainlink compatible, implementing the most widely, and not deprecated, used functions of the `IChainlinkAggregatorV3` interface such as `latestRoundData()`, `decimals()`, and `latestAnswer()`. 

One thing to keep an eye on is the number of decimals. Chronicle always uses 18 decimals, whereas Chainlink uses different decimals for different oracles. However, if implemented correctly, one can check the decimals and scale them up or down accordingly. Please conduct integration tests and feel free to [reach out](https://discord.com/invite/CjgvJ9EspJ) if there are any issues.

## How can I deploy a Chronicle Oracle for Morpho markets?
Chronicle Oracles are compatible with the [Morpho Chainlink adaptor](https://github.com/morpho-org/morpho-blue-oracles/blob/main/src/morpho-chainlink/MorphoChainlinkOracleV2.sol). Morpho can dynamically handle differences in Feed decimals using the [SCALE_FACTOR](https://github.com/jar-o/morpho-blue-oracles/blob/b6c8ddb4666a6b7fe0b568ea3a5238bc8335de2a/src/morpho-chainlink/MorphoChainlinkOracleV2.sol#L145). This is important because Chronicle operates with 18 decimal places for all its Oracles, while most Chainlink's Oracles use 8 decimal places.
- You can find a tutorial on deploying a Chronicle Oracle for Morpho Markets in the [following section](docs/Developers/Guides/morphoVault.md).

## How do I check if an Oracle becomes inactive/ gets deprecated?
In the event that an Oracle gets deprecated, we will notify all whitelisted customers before offboarding it.
From a technical point of view, if an oracle becomes inactive, the price is set to `0`, and the validators (also known as feeds), are removed from the contract. Therefore, the `read()` function will revert with `0`, the `tryRead()` function will return `(false, 0)`, and the `latestRoundData()` will return `0` as well. 

## What do I need to do to read from a Chronicle Oracle?

Chronicle Oracles are read-protected by a whitelist. To read from an Oracle, the calling address must be tolled (whitelisted).

On testnet networks, the whitelisting mechanism is permissionless, anyone can whitelist an address using the [SelfKisser](/Developers/Guides/whitelistAddress.md).

On mainnet, the whitelisting mechanism is permissioned. To request access, open a ticket on [Discord](https://discord.com/invite/CjgvJ9EspJ) in the 🆘｜support channel.

## What happens if I try to read from an address that is not whitelisted?

If you try to read from an address that is not tolled (whitelisted), the transaction reverts.


## How can I check the validators of an Oracle? 
You can use [cast](https://book.getfoundry.sh/reference/cast/cast), a CLI tool designed by the Foundry team to streamline the interaction with the EVM.

`$ cast call $contract 'feeds()(address[])' --rpc-url $rpc` 

Returns an array with the validators.

Alternatively, if you prefer to check on Etherscan, navigate to the `Read Contract` section of the Oracle you want to check, and run the `feeds()` function. The result will list all the validator addresses that are authorized to sign a price update. 

## How can I check if an address is whitelisted to read data?

`$ cast call $oracle "tolled(address)(bool)" <your address> --rpc-url $rpc`

Returns either `true` or `false`.

## Which address do I need to whitelist if I want to deploy a Curve StableSwap pool?

To use a Chronicle oracle for a [Curve StableSwap pool](https://docs.curve.finance/stableswap-exchange/stableswap/pools/overview/), the pool's address needs to be whitelisted.

Share the address of your Curve pool with the Chronicle team—once whitelisted, you’ll have read access to the specified oracle.
If you need access to multiple oracles, you'll need to whitelist the pool address separately for each one.


## How can I check how many validators have signed a price message?

On Etherscan, navigate to the `Read Contract` section of the Oracle you want to check, and run the `bar()` function. This returns the number of signatures required for an Oracle update. 

## What types of Oracles does Chronicle use for asset prices?

On Ethereum Mainnet (L1), where computation is expensive, Chronicle uses its [ScribeOptimistic](https://github.com/chronicleprotocol/scribe/blob/main/src/ScribeOptimistic.sol) Oracles, enabling additional gas saving. On L2 chains, Chronicle uses [Scribe Oracles](https://github.com/chronicleprotocol/scribe/blob/main/src/Scribe.sol). 

## What are the main operational differences between ScribeOptimistic and Scribe Oracles?
Scribe Oracle have instant updates. This means that as soon as a new price is published, it becomes available.
**ScribeOptimistic Oracles have a buffer. An incoming price is not finalized until the  challenge period has concluded.** You can think of it as a delayed oracle. The lower the challenge period is, the less phase shifted the oracle is. At the moment, the challenge period is set to 20 mins for Chronicle Oracles, but this value is customizable. **At the end of the challenge period, the price will be the optimistic price, even if the market price has changed.** 

## How can I check the challenge period for a ScribeOptimistic oracle?
To check the current challenge period, you can check the `opChallengePeriod`’s value using `opChallengePeriod()` which returns a value in seconds.

## How can I cross-check the asset pair corresponding to a given Chronicle address on a block explorer like Etherscan?
To cross-check the asset pair associated with a Chronicle Oracle address on a block explorer, follow these steps:
   1. Navigate to the `Read Contract` section under `Contract` on Etherscan.
   2. Locate the `wat` function at the bottom of the list.
   3. Query the `wat` function to retrieve a bytes32 value.
   4. Use a bytes32 to string converter, such as [this tool](https://web3-type-converter.onbrn.com/), to decode the bytes32 value and get the name of the asset pair.

## What is the update threshold for the Oracles?

A new aggregation round is triggered after a specified amount of time since the latest update, or if the new offchain value deviates more than a pre-defined threshold for the onchain value, whichever of these conditions occurs first. If the data values stay within the Deviation Threshold, an update will only be triggered every X minutes / hours.

## Can the update threshold parameters be modified?

Yes, the update parameters, including the update and deviation thresholds, can be modified. For the most up-to-date parameters, please check the specific Oracle on the [Dashboard](https://chroniclelabs.org/dashboard/oracles). If you'd like to request different parameters, please get in touch.

## Should I implement a stale price check in my dApp?

We highly recommend so. Don't trust - verify!

You can check how fresh an oracle’s value is using:

`readWithAge() (uint val, uint age)` and check 

`block.timestamp - age  > MAX_STALENESS { /* failure handling */`. 

## What is the difference between the different read functions: latestAnswer(), read(), and tryRead()?

While all of these functions can be used to read data from the oracle, they differ slightly in behavior:

   - `latestAnswer()` – primarily intended for legacy use or when compatibility with Chainlink is required
   - `read()` – will revert if the returned value is 0
   - `tryRead()` – will not revert, even if the value is 0

We recommend using the tryXXX functions (e.g., tryRead()) because they are safer to use since they never revert.

For full specifications for each of the functions, please check the [Scribe contract](https://github.com/chronicleprotocol/scribe/blob/main/src/Scribe.sol).

## What is the difference between `poke` / `poke_optimized` and `opPoke` / `opPoke_optimized`?

`Poke` and `poke_optimized` are functionally identical, as are `opPoke` and `opPoke_optimized`. The only difference between the standard and _optimized versions is that the `_optimized` functions are designed with selectors that contain more zero bytes. Since zero bytes are cheaper in calldata, these functions consume slightly less gas when called. The difference in gas is small, but beneficial for frequently executed transactions.

`opPoke` is intended for use on Ethereum mainnet and follows an optimistic update mechanism that includes a challenge period. However, if the asset price becomes too volatile and moves out of the acceptable spread while the `opPoke` call is still within its challenge window, the update can be overridden by submitting a regular poke, which applies immediately without delay.