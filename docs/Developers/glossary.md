---
sidebar_position: 5
description: Chronicle Terminology
keywords: [glossary, terminology]
---
# Terminology


Here is a growing list of some terminology you may find helpful as you explore our repositories. 

### IChronicle

An interface for Chronicle Protocol's oracle products.


### Scribe

[Scribe](https://github.com/chronicleprotocol/scribe/blob/main/docs/Scribe.md#optimistic-flavored-scribe) is an efficient Schnorr multi-signature based Oracle developed by the team at Chronicle Labs. 


### opPoke

An opPoke reference refers to an Optimistic poke [More info here](https://github.com/chronicleprotocol/scribe/blob/main/docs/Scribe.md#optimistic-flavored-scribe). opPokes only finalize after a opChallengePeriod, instead of pokes that finalize directly.


### opChallenge

Function to challenge an optimistic poke. A public callable opChallenge() function can be called at any time. The function verifies the current optimistically poked data and, if the Schnorr signature verification succeeds, finalizes the data. However, if the Schnorr signature verification fails, the feed bound to the data is automatically diss'ed, i.e. removed from the whitelist, and the data deleted. [More info here](https://github.com/chronicleprotocol/scribe/blob/main/docs/Scribe.md#optimistic-flavored-scribe)


### wat 

Oracle identifier; mostly asset pairs, eg ETH/USD, but can also be something else, an example could be DSR/RATE, which is MakerDAO's sDAI interest rate


### bar

Quorum/threshold of validators for a new oracle price, eg bar many validator need to sign via schnorr together a new price for the oracle to accept it. Is always >50% of number of validators


### Challenge reward

The ETH reward you get when you challenge an invalid poke. Used to incentivize (an example) MEV searchers to monitor Chronicles oracles


### Validator (Feed)

A validator (also know as a “feed” within our repos) is a p2p network which involves those who are actively invested in the ecosystem. MakerDAO, Gnosis, Etherscan, and others all fetch prices from different exchanges and or data sources. They then sign and exchange this information in the p2p network which are publicly available to listen to.  When listening to this network and after a cluster of value collections which there is a consensus on, you can then `poke()` the oracle.


### Schnorr Signature Scheme

Scribe uses a custom Schnorr signature scheme. The scheme is specified in [docs/Schnorr.md.](https://github.com/chronicleprotocol/scribe/blob/main/docs/Schnorr.md)


### toll

The [Toll](https://github.com/chronicleprotocol/chronicle-std/blob/ea9afe78a1d33245afcdbcc3f530ee9cbd7cde28/src/toll/Toll.sol#L4) contract module is a simple way to control access to certain functions. It works by giving permission to a group of specific addresses, which are referred to as _tolled_ addresses. The `toll` modifier can be added to functions to ensure that only these tolled addresses can use those functions. 


### kiss(address)

Used to toll/authorize an address.


### diss(address)

Used to de-toll/unauthorize an address.



