---
sidebar_position: 2
description: Reading from Chronicle Oracles on Testnet
keywords: [oracles, read]
---
# Getting Read Access to Chronicle Oracles - Process Explained
## Reading from Chronicle Oracles on Testnet in 4 Steps

<div style={{textAlign: 'center'}}>
<img
    src="/img/guides/whitelistingProcess.png"
/>
</div>



### 1 Select the chain you want to use.
Chronicle Oracles are live on 10 chains, with more integrations rolling out regularly. Using the [Dashboard](https://chroniclelabs.org/dashboard/oracles), you can quickly find the available chains.

### 2 Select the Oracle(s) to use and its address
Once on the desired chain, find the oracle address that you need for that chain. Before reading from an Oracle, the address making the call needs to be whitelisted for that Oracle. To find the Testnet addresses for the Oracles, simply toggle the `<dev mode>` on the [Dashboard](https://chroniclelabs.org/dashboard/oracles).

### 3 Get the address of the SelfKisser for the selected chain
Chronicle Oracles are read protected by a whitelist. On Testnet networks, you can whitelist yourself using the [SelfKisser](https://github.com/chronicleprotocol/self-kisser/blob/main/src/SelfKisser.sol) contract. **Ensure you're using the correct SelfKisser address for each chain.**

| Testnet Network               | SelfKisser Address                                                                                                                           |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Ethereum Sepolia              | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://sepolia.etherscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d#code)           |
| Base Sepolia                  | [0x70E58b7A1c884fFFE7dbce5249337603a28b8422](https://sepolia.basescan.org/address/0x70E58b7A1c884fFFE7dbce5249337603a28b8422#code)           |
| Arbitrum Sepolia              | [0xc0fe3a070Bc98b4a45d735A52a1AFDd134E0283f](https://sepolia.arbiscan.io/address/0xc0fe3a070Bc98b4a45d735A52a1AFDd134E0283f#code)            |
| Polygon zkEVM Testnet Cardona | [0xCce64A8127c051E784ba7D84af86B2e6F53d1a09](https://cardona-zkevm.polygonscan.com/address/0xCce64A8127c051E784ba7D84af86B2e6F53d1a09)       |
| Gnosis Mainnet                | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://gnosisscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d)                       |
| Mantle Testnet                | [0x9ee0DC1f7cF1a5c083914e3de197Fd1F484E0578](https://explorer.sepolia.mantle.xyz/address/0x9ee0DC1f7cF1a5c083914e3de197Fd1F484E0578)         |
| Scroll Sepolia                | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://sepolia.scrollscan.com/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d#code)         |
| zkSync Sepolia                | [0x25f594edde4f58A14970b2ef6616badBa4B1CdDD](https://sepolia.explorer.zksync.io/address/0x25f594edde4f58A14970b2ef6616badBa4B1CdDD#contract) |
| Optimism Sepolia              | [0xfF619a90cDa4020897808D74557ce3b648922C37](https://sepolia-optimism.etherscan.io/address/0xfF619a90cDa4020897808D74557ce3b648922C37#code)  |
| Berachain Bartio              | [0x2FFCAfF4BcF6D425c424f303eff66954Aa3A27Fd](https://bartio.beratrail.io/address/0x2FFCAfF4BcF6D425c424f303eff66954Aa3A27Fd)                 |
| Superseed Sepolia             | [0x371A53bB4203Ad5D7e60e220BaC1876FF3Ddda5B](https://sepolia-explorer.superseed.xyz/address/0x371A53bB4203Ad5D7e60e220BaC1876FF3Ddda5B#code) |
| Corn Sepolia             | [0x8CA2E3a09c79233127dC21955e28A6b9C4bf166E](https://testnet.cornscan.io/address/0x8CA2E3a09c79233127dC21955e28A6b9C4bf166E) |
| Plume Devnet            | [0xF69De003115777B62c71846b13948CE05C07fe65](https://test-explorer.plumenetwork.xyz/address/0xF69De003115777B62c71846b13948CE05C07fe65) |
| Monad Testnet           | [0x9a0de663c20127a229891eA0C7Db99c785BF91e3](https://monad-testnet.socialscan.io/address/0x9a0de663c20127a229891eA0C7Db99c785BF91e3) |
| Unichain Sepolia           | [0x371A53bB4203Ad5D7e60e220BaC1876FF3Ddda5B](https://unichain-sepolia.blockscout.com/address/0x371A53bB4203Ad5D7e60e220BaC1876FF3Ddda5B) |


*If you need to read from multiple Oracles, make sure that you repeat the whitelisting process for each Oracle.*

### 4 Using the SelfKisser, whitelist the address used to read from the oracle
The [ISelfKisser](https://github.com/chronicleprotocol/self-kisser/blob/main/src/ISelfKisser.sol) interface defines 2 function for whitelisting:
-  `function selfKiss(address oracle) external;` - whitelist your own address (msg.sender)
-  ` function selfKiss(address oracle, address who) external;` - specifies a different address to whitelist, such as a smart contract  

In most cases, you'll use the second option to whitelist another address.

Ensure you have sufficient funds for the whitelisting process, as it’s a write operation requiring gas to complete.

On Mainnet, the process is similar, but the whitelisting is permissioned. To get whitelisted, please open a ticket on [Discord](https://discord.com/invite/CjgvJ9EspJ) via the 🆘 ｜ support channel to reach out to the team.
