# Off-Chain Components 

    - **Validator** (aka Feed) Creates usable information out of raw data that is read from various Origins. Validators query Origins no matter whether they are on-chain or off-chain for the price data. The Validator transform the original data into Chronicle data by using Data Models. After the Chronicle data is calculated it is signed and sent to the peer-to-peer network.

    - **Challenger** is an off chain component that listens to Oracle’s updates and makes sure that no invalid optimistic update is made. Thus we can be sure that our Optimistic Oracles are functioning properly. Both challengers and relays are permissionless jobs with challengers even getting paid for their effort. Participation from the community is both encouraged and supported.
    
    - **Origins** are the data sources about the assets prices that can exist on chain (DEX) such as UniSwap, dYdX, Balancer, etc. or be off chain from CEXs ( e.g. Kraken, Binance, Coinbase).

    - **Relays** collect data from Validators/Feeds and compose EVM transactions out of it. Subsequently, these EVM transactions with the Feeds data is sent to a blockchain. 

    - **Archiver** aggregates the messages created by Validators and stores it in a database. It collect all signed messages, not the intermediate messages like used for MuSig creating.

    - **Dashboard**:  The [chroniclelabs.org](https://chroniclelabs.org/dashboard) queries the archiver to present the prices on its dashboard. You can find all of our current Oracles [here](https://chroniclelabs.org/dashboard/oracles)

    You can find your token name by using the search box or by selecting your preferred blockchain from the filter located in the top-right corner (see Figure below).

    ![Example banner](../../../static/img/dashboard.png)
