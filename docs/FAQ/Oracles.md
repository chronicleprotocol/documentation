## I am currently using Chainlink. How difficult is it to change to Chronicle?
If you are using Chainlink, all you need to do is to change the address of your oracle to the Chronicle equivalent. This is because Scribe is partially Chainlink compatible, implementing the most widely, and not deprecated, used functions of the `IChainlinkAggregatorV3` interface such as `latestRoundData()`, `decimals()`, and `latestAnswer()`.

## How do I check if an Oracle becomes inactive/ gets deprecated?
If an oracle becomes inactive, the price is set to `0`, and the validators (also known as feeds), are removed from the contract. Therefore, the `read()` function will revert with `0`, the `tryRead()` function will return `(false, 0)`, and the `latestRoundData()` will return `0` as well. 

## How can I check the validators of an Oracle? 
You can use [cast](https://book.getfoundry.sh/reference/cast/cast), a CLI tool designed by the Foundry team to streamline the interaction with the EVM.

`$ cast call $contract 'feeds()(address[])'` 

Returns an array with the validators.

## How can I check if an address is whitelisted to read data?

`$ cast call $oracle "tolled(address)(bool)" <your address>`

Returns either `true` or `false`.
