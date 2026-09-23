---
sidebar_position: 2
description: Offchain components of Chronicle Architecture.
keywords: [data sources, offchain, Validators, Challenger]
---

# Offchain Components

- **Validators** read data from different sources, also known as origins - i.e. where the data originates from. Those sources can be both onchain and offchain. Validators then apply a data model to the raw data to calculate a final price that is resistant to market manipulation. Validators interact with each other during the Schnorr signing session.

- **Challenger** is an offchain component used only for Scribe optimistic oracles. It listens to the oracle's updates and makes sure that no invalid optimistic update is published. Both challengers and relays are permissionless jobs, with challengers even getting paid for their effort. Participation from the community is both encouraged and supported.

- **Origins** are the data sources used for asset prices. They are a combination of onchain data sources, such as DEXs (e.g.:Curve, Uniswap), and offchain data sources, such as CEXs (e.g.:Kraken, Coinbase, Binance).

- **Relays** actively listen to the peer-to-peer network (the Transport Layer) and create EVM transactions out of these messages. These EVM transactions are then recorded onchain.

- **Archiver** aggregates the messages created by Validators and stores them in a database. It collects all signed messages, not the intermediate messages used for MuSig creation.

- **Dashboard**: The [Chronicle Dashboard](https://chroniclelabs.org/dashboard) pulls the data it displays by querying the Archiver.
