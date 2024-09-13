---
sidebar_position: 2
description: Onchain components of Chronicle Protocol Architecture.
keywords: [data sources, offchain, Validators, Challenger]
---

# Offchain Components

     - **Validators** read data from different sources, also known as origins - i.e. where the data originates from. Those sources can be both onchain and offchain. Validators then apply a data model to the raw data to calculate a final price that is resistant to market manipulation.
     The validators interact with each other during the Schnorr signing session.


    - **Challenger** is an offchain component that listens to Oracle’s updates and makes sure that no invalid optimistic update is made. Thus we can be sure that our Optimistic Oracles are functioning properly. Both challengers and relays are permissionless jobs with challengers even getting paid for their effort. Participation from the community is both encouraged and supported.

    - **Origins** are the data sources about the asset prices that can exist on-chain (DEX) such as UniSwap, dYdX, Balancer, etc. or be offchain from CEXs ( e.g. Kraken, Binance, Coinbase).


    - **Relays**  actively listen to the peer-to-peer network (the Transport Layer) and create EVM transactions out of these messages. Subsequently, these EVM transactions are recorded onchain.


    - **Archiver** aggregates the messages created by Validators and stores it in a database. It collect all signed messages, not the intermediate messages like used for MuSig creating.

    - **Dashboard**:  The [chroniclelabs.org](https://chroniclelabs.org/dashboard) queries the archiver to present the prices on its dashboard. You can find all of our current Oracles [here](https://chroniclelabs.org/dashboard/oracles)

    You can find your token name by using the search box or by selecting your preferred blockchain from the filter located in the top-right corner (see Figure below).

    ![Example banner](../../../static/img/dashboard.png)
