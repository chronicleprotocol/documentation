# Terminology


Here is alist of some terminology you may find helpful as you explore our repositories. 

### opPoke

An opPoke reference refers to an Optimistic poke

### opChallenge

Function to challenge an optimistic poke. If challenge succeeds, we will pay an ETH reward


### wat 

Oracle identifier; mostly asset pairs, eg ETH/USD, but can also be something else, an example could be DSR/RATE, which is MakerDAO's sDAI interest rate

### bar

Quorum/threshold of validators for a new oracle price, eg bar many validator need to sign via schnorr together a new price for the oracle to accept it. Is always >50% of number of validators


### Challenge reward

The ETH reward you get when you challenge an invalid poke. Used to incentivize (an example) MEV searchers to monitor Chronicles oracles


### Validator (Feed)

A validator (also know as a “feed” within our repos) is a p2p network which involves those who are actively invested in the ecosystem. MakerDAO, Gnosis, Etherscan, and others all fetch prices from different exchanges and or data sources. They then sign and exchange this information in the p2p network which are publicly available to listen to.  When listening to this network and after a cluster of value collections which there is a consensus on, you can then “poke” the oracle.

