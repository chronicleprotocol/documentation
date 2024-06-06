## Which chains is Chronicle integrated with?
At the moment, Chronicle Protocol is integrated on seven blockchains: 
- Ethereum
- Arbitrum
- Mantle
- Polygon zkEVM
- Gnosis Chain
- zkSync
- Base

This is being updated all the time as new chains come online. Please check out the [dashboard](https://chroniclelabs.org/dashboard/oracles) for the most up-to-date overview of the blockchains we are currently integrated with. 

## Are price feeds chain-specific or chain agnostic?
Chronicle provides price feeds, which can be implemented on any supported chain. These prices are based on global sources, the data is gathered directly from CEXs and DEXs and is not chain specific.

E.g.: GNO on Sepolia: [https://sepolia.etherscan.io/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8#code](https://sepolia.etherscan.io/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8#code)
GNO on Gnosis: [https://gnosisscan.io/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8#code](https://gnosisscan.io/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8#code)

## Where does the data come from?
The data originates from primary on-chain sources such as DEXes (e.g., Uniswap, dYdX, Balancer) and off-chain CEXes (e.g., Kraken, Binance, Coinbase). Only high-quality sources are used in Chronicle’s data models.

## What is the difference between PUSH and PULL oracles?
A push oracle proactively provides data to smart contracts without being explicitly requested, whenever a condition or event happens (sometimes referred to as a threshold or a heartbeat). On the other hand, PULL oracles require smart contracts to request data explicitly. The data is pulled from external sources in response to a query from the smart contract. 

## Does Chronicle use a PULL or a PUSH model for its Oracles?
Chronicle currently operates using a PUSH model. We plan to implement a PULL model in the near future.

## Who are the validators for Chronicle?
The validators of Chronicle are represented by a community of the leading blockchain protocols including:
[MakerDAO](https://makerdao.com), [Infura](https://www.infura.io/), [Gitcoin](https://www.gitcoin.co/), [dYdX](https://dydx.exchange/), [0x](https://0x.org/), [Etherscan](https://etherscan.io/), [Gnosis](https://www.gnosis.io/), [DeFi Saver](https://defisaver.com/), [My Crypto](https://mycrypto.com/).
This approach to validators is unique to Chronicle, and ensures that the Oracle data is being signed by some of the most trusted and reputable brands in the blockchain space, further reinforcing trust in the protocol. 

## Does the Chronicle dashboard pull data from the Chronicle Archive?

The Dashboard pulls from a combination of on-chain sources and off-chain network traffic that is the basis for the Oracle updates. Specifically, the feeds pass cryptographically (ECDSA)-signed price messages that are then computed into a median value for on-chain updates. Those messages are ephemeral, so our archiving system saves them in MongoDB for historical preservation.
