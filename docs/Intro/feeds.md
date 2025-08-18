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
[WSTETH/USD](https://chroniclelabs.org/dashboard/oracle/WSTETH/USD#blockchain=ETH&contract=0xA770582353b573CbfdCC948751750EeB3Ccf23CF&txn=0x729386eca08be935623c5ca6bac032cb01d4bb2c1ab221f307d5275af24bc6c3) oracle uses both market prices for WSTETH as well as the fundamental value of the unwrapping WSTETH to STETH along with STETH market prices.
