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

Also called **Fundamental Oracles**, Exchange Rate Oracles are computed based on the value of underlying assets. They provide stable reference rates but they may not always reflect real-time market fluctuations. These are most frequently associated with LSTs (Liquid Staked Tokens) and yield-earning token wrappers (e.g. ERC4626 tokens). 

In other words, an exchange rate oracle indicates how much an asset is worth based on what the asset is backed by.
- [WSTETH / ETH](https://chroniclelabs.org/dashboard/oracle/WSTETH%23fundamental/ETH#blockchain=UNICHAIN&contract=0x74661a9ea74fD04975c6eBc6B155Abf8f885636c&txn=0x41b689e145fa7983df6f979c2191cf4c10c927f6ec835b199ec08fcddddfb455)



## Hybrid Oracle

This type of oracle uses a combination of exchange and market rates.

For example, the
[WUSDM / USD](https://chroniclelabs.org/dashboard/oracle/WUSDM/USD?blockchain=&txn=0x6134341c8146ba21fb9feca1c5f465d3d5b26dcad4874196b4425861c53666cc&contract=0xdC6720c996Fad27256c7fd6E0a271e2A4687eF18) oracle uses the market prices from DEXs for USDM, and transforms them using the fundamental value of the wrapped price. 

