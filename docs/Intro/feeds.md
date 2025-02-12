---

sidebar_position: 8
description: Type of Oracles
keywords: [Feeds, Oracles, Market Rate, Exchange Rate]
---


# Type of Oracles

When creating an oracle, customers have multiple configuration options. The following characterization is based on the sources the oracle uses.


## Market Rate Oracles

Market rate oracles aggregate data from multiple sources, including onchain data from DEXs and offchain data from CEXs. This approach ensures real-time pricing but is also sensitive to market fluctuations.
- [METH/ETH](https://chroniclelabs.org/dashboard/oracle/METH/ETH?blockchain=MANTLE&txn=0x0942ab3efafd5a04f9a97215a02b67388ede279f1e212dbf7a2a5dd477c40554&contract=0xBFE568Ea8f6bDFFe7c03F83dC8348517f8E7010A)




## Exchange Rate Oracles

Also called Fundamental Oracles, Exchange Rate Oracles are computed based on the value of underlying assets. They provide stable reference rates but they may not always reflect real-time market fluctuations. These are most frequently associated with LSTs (Liquid Staked Tokens) and yield-earning token wrappers (e.g. ERC4626 tokens). 

In other words, an exchange rate oracle indicates how much an asset is worth based on what the asset is backed by.
- [SUSDS/USD](https://chroniclelabs.org/dashboard/oracle/SUSDS/USD?blockchain=ETH&txn=0x0029c6679f8ffbfabac2bce41a60a372f2fdd3a72de94ca0b29a89531e13774c&contract=0x496470F4835186bF118545Bd76889F123D608E84)



## Hybrid Oracle

This type of oracle uses a combination of exchange and market rates.

For example, the
[WUSDM / USD](https://chroniclelabs.org/dashboard/oracle/WUSDM/USD?blockchain=&txn=0x6134341c8146ba21fb9feca1c5f465d3d5b26dcad4874196b4425861c53666cc&contract=0xdC6720c996Fad27256c7fd6E0a271e2A4687eF18) oracle uses the market prices from DEXs for USDM, and transforms them using the fundamental value to the wrapped price. 

