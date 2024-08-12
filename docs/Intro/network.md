---
sidebar_position: 7
description: Chronicle Protocol's - A Decentralized Oracle Network
keywords: [Validators, deviation threshold, components]
---
# Decentralized Oracle Network
You can think of Chronicle as a decentralized protocol managing a network of trusted participants (validators) that report pricing information from various sources (both on-chain and off-chain). One aspect that sets Chronicle apart from other Oracle providers is that the validators of Chronicle are represented by a community of the leading blockchain protocols including [MakerDAO](https://makerdao.com), [Infura](https://www.infura.io/), [Gitcoin](https://www.gitcoin.co/), [dYdX](https://dydx.exchange/), [0x](https://0x.org/), [Etherscan](https://etherscan.io/), [Gnosis](https://www.gnosis.io/), [DeFi Saver](https://defisaver.com/), [My Crypto](https://mycrypto.com/). This approach is unique to Chronicle and ensures that the Oracle data is being signed by some of the most trusted and reputable projects in the blockchain space, further reinforcing trust in the protocol.

Smart contracts often perform real-time operations based on asset price data, particularly in DeFi. For example, MakerDAO uses Chronicle’s Oracles to calculate the value of borrowers' deposits.

Each Oracle provider has its own peer-to-peer (P2P) network of these participants (validators), who report prices based on strategies (such as source and update threshold) defined by the data model through an on-chain registry.  All validators query external sources, then sign and broadcast (send) those prices assembled into a sorted grouping (the median) by a relay that posts the value on-chain. 

An aggregation strategy determines the “true” price for any Oracle. This is typically in the form of median of medians (to filter outliers) and requires a minimum number of unique validator “answers”([bar](/Developers/glossary#bar)) to calculate.

### Components of a Decentralized Oracle Network
Oracle Networks include the following components:

	- The consumer (either a contract or an Externally Owned Account)
	- The Validator Registry
	- Oracles

A Consumer uses Chronicle Oracles to consume aggregated data. Consumers must reference the correct IChronicle contract and invoke one of the available functions.

```
e.g.,
... 
IChronicle public chronicle = IChronicle(address(0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603)); // Chronicle_ETH_USD_3:0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603 on Sepolia
return chronicle.read();
```

The **Validator Registry** maintains a comprehensive list of all validators that are recognized as valid participants in the network. 

Each **Oracle** receives periodic data from the validators and stores data on-chain so that consumers can retrieve it. Oracles receive updates from the validator network when either the Deviation Threshold or the Update Threshold triggers an update during the aggregation round.

**Deviation Threshold**: A new aggregation round is triggered when a node identifies that the off-chain values deviate more than a pre-defined threshold for that on-chain value.
**Update Threshold**: A new aggregation round is triggered after a specified amount of time since the latest update.  If the data values stay within the Deviation Threshold, an update will only be triggered every X minutes / hours.
