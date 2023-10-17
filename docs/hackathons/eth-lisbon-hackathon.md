---
sidebar_position: 1
---

# ETH Lisbon Hackathon

This document provides documentation for integrating Chronicle Oracles into ETH Lisbon Hackathon projects.

If you have any questions, don’t hesitate to reach out to our booth, [Discord](https://discord.gg/CjgvJ9EspJ), or anyone wearing Chronicle hoodies

## ETH Lisbon Bounties

Bounty: The most innovative integration of a Chronicle Oracle
Description: The team with the most innovative integration of a Chronicle Oracle on one of the three supported chains (Sepoila (Ethereum), Polygon zkEVM (mainnet), Gnosis Chain (mainnet)) will be awarded $2000 DAI. The innovation should stem from the use case of the Oracle, i.e., The idea or utility of the project.
Reward: $2000 DAI
Type: Winner takes all

Bounty: Integrate a Chronicle Oracle
Description: Each team that successfully integrates a Chronicle Oracle on one of the three supported chains (Sepoila (Ethereum), Polygon zkEVM (mainnet), Gnosis Chain (mainnet)) will be awarded an equal share of the $3000 DAI reward pool. The integration must be integral to the operation of the product/project created and serving a legitimate purpose.
Reward: $3000 DAI
Type: Pooled prize

## Chronicle Protocol Contracts

### Scribe

Scribe is an efficient Schnorr multi-signature-based Oracle, marking a significant improvement in gas efficiency. Unlike i'ts counterparts, Scribe boasts of a fixed gas cost, translating to over `60% gas savings` compared to other Oracles, and a remarkable `80% savings` versus Chainlink. This gas thriftiness improves scalability of Oracles.

Also, the seamless integration of Chronicle Oracle with Chainlink and Maker interfaces is a plug-and-play affair, a smooth transition for developers used to these platforms.

Although not relevant to the hackathon, it's worthy of mentioning that all data delivered by a Chronicle Oracle on mainnet is verifiable via The [Chronicle Dashboard](https://chroniclelabs.org/dashboard).

Scribe Public Repo: [https://github.com/chronicleprotocol/scribe](https://github.com/chronicleprotocol/scribe)

### CAST

Cast is a command-line interface (CLI) tool designed by the Foundry team to streamline your interaction with the Ethereum Virtual Machine (EVM). Whether you're making smart contract calls, sending transactions, or retriving any type of chain data, cast can help with that. You can read more [Here](https://book.getfoundry.sh/reference/cast/cast).

### Self-Kisser: Permissionless Whitelisting

Chronicle safeguards oracle read functions with a whitelist, ensuring controlled access to critical data. However, the SelfKisser contract unfolds a posibility where you can whitelist yourself (or as whimsically termed, "kiss") yourself :).

How to give yourself a kiss i.e., `msg.sender`?

Run the following command:

```bash
$ cast send 0x0dcc19657007713483a5ca76e6a7bbe5f56ea37d "selfKiss(address)()" <oracle address you want you use>
```

To verify your whitelisted status:

```bash
$ cast call <oracle address> "tolled(address)" <your address>
```

Response:

```bash
0x0000000000000000000000000000000000000000000000000000000000000001
```

A return value of `1 (true)` confirms your whitelisted status.

For more info, see the `SelfKisser` repo: [https://github.com/chronicleprotocol/self-kisser](https://github.com/chronicleprotocol/self-kisser/blob/main/docs/Management.md#management)

### Reading Chronicle Oracles through the `IChronicle` Interface

Interacting with the oracle is easy. The `read()` function lays it out plain and simple, returning a `uint` value representing the data you are tying to get:

```bash
$ cast call 0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660 "read()(uint)"
```

Response:

```bash
1656870000000000045440
```

:::info
For a detailed outline of the interface and additional functionalities click [here](https://github.com/chronicleprotocol/chronicle-std/blob/main/src/IChronicle.sol)
:::

## Smart Contract Addresses on Sepolia network

| Contract Name | Contract Address on Sepolia network                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Self-kisser   | [0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d](https://sepolia.etherscan.io/address/0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d#code) |
| ETH/USD       | [0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660](https://sepolia.etherscan.io/address/0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660#code) |
| AAVE/USD      | [0xa38C2B5408Eb1DCeeDBEC5d61BeD580589C6e717](https://sepolia.etherscan.io/address/0xa38C2B5408Eb1DCeeDBEC5d61BeD580589C6e717#code) |
| ARB/USD       | [0x579BfD0581beD0d18fBb0Ebab099328d451552DD](https://sepolia.etherscan.io/address/0x579BfD0581beD0d18fBb0Ebab099328d451552DD#code) |
| AVAX/USD      | [0x78C8260AF7C8D0d17Cf3BA91F251E9375A389688](https://sepolia.etherscan.io/address/0x78C8260AF7C8D0d17Cf3BA91F251E9375A389688#code) |
| BNB/USD       | [0x26EE3E8b618227C1B735D8D884d52A852410019f](https://sepolia.etherscan.io/address/0x26EE3E8b618227C1B735D8D884d52A852410019f#code) |
| BTC/USD       | [0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c](https://sepolia.etherscan.io/address/0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c#code) |
| CRV/USD       | [0xf29a932ae56bB96CcACF8d1f2Da9028B01c8F030](https://sepolia.etherscan.io/address/0xf29a932ae56bB96CcACF8d1f2Da9028B01c8F030#code) |
| DAI/USD       | [0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4](https://sepolia.etherscan.io/address/0xa7aA6a860D17A89810dE6e6278c58EB21Fa00fc4#code) |
| ETH/BTC       | [0x1804969b296E89C1ddB1712fA99816446956637e](https://sepolia.etherscan.io/address/0x1804969b296E89C1ddB1712fA99816446956637e#code) |
| GNO/USD       | [0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8](https://sepolia.etherscan.io/address/0xA28dCaB66FD25c668aCC7f232aa71DA1943E04b8#code) |
| IBTA/USD      | [0x07487b0Bf28801ECD15BF09C13e32FBc87572e81](https://sepolia.etherscan.io/address/0x07487b0Bf28801ECD15BF09C13e32FBc87572e81#code) |
| LDO/USD       | [0xa53dc5B100f0e4aB593f2D8EcD3c5932EE38215E](https://sepolia.etherscan.io/address/0xa53dc5B100f0e4aB593f2D8EcD3c5932EE38215E#code) |
| LINK/USD      | [0xecB89B57A60ac44E06ab1B767947c19b236760c3](https://sepolia.etherscan.io/address/0xecB89B57A60ac44E06ab1B767947c19b236760c3#code) |
| MATIC/USD     | [0xa48c56e48A71966676d0D113EAEbe6BE61661F18](https://sepolia.etherscan.io/address/0xa48c56e48A71966676d0D113EAEbe6BE61661F18#code) |
| MKR/USD       | [0x67ffF0C6abD2a36272870B1E8FE42CC8E8D5ec4d](https://sepolia.etherscan.io/address/0x67ffF0C6abD2a36272870B1E8FE42CC8E8D5ec4d#code) |
| OP/USD        | [0xfadF055f6333a4ab435D2D248aEe6617345A4782](https://sepolia.etherscan.io/address/0xfadF055f6333a4ab435D2D248aEe6617345A4782#code) |
| RETH/USD      | [0xEE02370baC10b3AC3f2e9eebBf8f3feA1228D263](https://sepolia.etherscan.io/address/0xEE02370baC10b3AC3f2e9eebBf8f3feA1228D263#code) |
| SDAI/DAI      | [0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491](https://sepolia.etherscan.io/address/0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491#code) |
| SNX/USD       | [0xD20f1eC72bA46b6126F96c5a91b6D3372242cE98](https://sepolia.etherscan.io/address/0xD20f1eC72bA46b6126F96c5a91b6D3372242cE98#code) |
| SOL/USD       | [0x4D1e6f39bbfcce8b471171b8431609b83f3a096D](https://sepolia.etherscan.io/address/0x4D1e6f39bbfcce8b471171b8431609b83f3a096D#code) |
| UNI/USD       | [0x2aFF768F5d6FC63fA456B062e02f2049712a1ED5](https://sepolia.etherscan.io/address/0x2aFF768F5d6FC63fA456B062e02f2049712a1ED5#code) |
| USDC/USD      | [0x1173da1811a311234e7Ab0A33B4B7B646Ff42aEC](https://sepolia.etherscan.io/address/0x1173da1811a311234e7Ab0A33B4B7B646Ff42aEC#code) |
| USDT/USD      | [0x0bd446021Ab95a2ABd638813f9bDE4fED3a5779a](https://sepolia.etherscan.io/address/0x0bd446021Ab95a2ABd638813f9bDE4fED3a5779a#code) |
| WBTC/USD      | [0xA7226d85CE5F0DE97DCcBDBfD38634D6391d0584](https://sepolia.etherscan.io/address/0xA7226d85CE5F0DE97DCcBDBfD38634D6391d0584#code) |
| WSTETH/USD    | [0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab](https://sepolia.etherscan.io/address/0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab#code) |
| YFI/USD       | [0x0893EcE705639112C1871DcE88D87D81540D0199](https://sepolia.etherscan.io/address/0x0893EcE705639112C1871DcE88D87D81540D0199#code) |

## Smart Contract Addresses on zkEVM/Polygon network

| Contract Name | Contract Address on zkEVM network                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| BTC/USD       | [0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c](https://zkevm.polygonscan.com/address/0x4B5aBFC0Fe78233b97C80b8410681765ED9fC29c#code) |
| DSR/RATE      | [0x729af3A41AE9E707e7AE421569C4b9c632B66a0c](https://zkevm.polygonscan.com/address/0x729af3A41AE9E707e7AE421569C4b9c632B66a0c#code) |
| ETH/USD       | [0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660](https://zkevm.polygonscan.com/address/0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660#code) |
| MATIC/USD     | [0xa48c56e48A71966676d0D113EAEbe6BE61661F18](https://zkevm.polygonscan.com/address/0xa48c56e48A71966676d0D113EAEbe6BE61661F18#code) |
| SDAI/DAI      | [0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491](https://zkevm.polygonscan.com/address/0xD93c56Aa71923228cDbE2be3bf5a83bF25B0C491#code) |
| SDAI/ETH      | [0x05aB94eD168b5d18B667cFcbbA795789C750D893](https://zkevm.polygonscan.com/address/0x05aB94eD168b5d18B667cFcbbA795789C750D893#code) |
| SDAI/MATIC    | [0x2f0e0dE1F8c11d2380dE093ED15cA6cE07653cbA](https://zkevm.polygonscan.com/address/0x2f0e0dE1F8c11d2380dE093ED15cA6cE07653cbA#code) |

## General Setup Enquires:

- Foundry Setup:
  - [https://getfoundry.sh](https://getfoundry.sh/)
- Sepolia ETH:
  - [https://www.infura.io/faucet/sepolia](https://www.infura.io/faucet/sepolia)
  - [https://sepoliafaucet.com/](https://sepoliafaucet.com/)
- Sepolia RPC:
  - [chainlist.org](https://chainlist.org/chain/11155111)
- Create A Test Wallet:
  - `cast new wallet`

## More on Scribe:

- [Eth Magician Post](https://ethereum-magicians.org/t/an-efficient-schnorr-multi-signature-implementation/15510)
- [Twitter Thread](https://twitter.com/merkleplant_eth/status/1693652385980379593)
- [Scribe's docs](https://github.com/chronicleprotocol/scribe/blob/main/docs/Scribe.md)
