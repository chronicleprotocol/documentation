---
sidebar_position: 2
description: Proof of Assets
keywords: [Proof of Assets]
---
# Proof of Assets
## What Is Proof of Assets?

Traditionally, businesses relied on independent third-party audits to prove solvency, which are slow, manual, and centralized.
Chronicle Proof of Assets provides a decentralized, automated solution that leverages blockchain transparency, smart contracts, and cryptographic proofs, reducing reliance on manual audits while improving speed, security, and user trust.

Proof of Assets is Chronicle's institutional-grade oracle that provides cryptographic attestations for tokenized assets, verifying their reserves at the source. 
Data is fetched from custodians, NAV administrators, or authorized agents, independently validated, and published onchain. The result is a continuous, verifiable, onchain audit trail that removes reliance on self-reporting or quarterly reviews.
## Why It Matters

As traditional finance converges with DeFi, transparent verification of reserves becomes critical for trust, compliance, and interoperability. Proof of Assets ensures that tokenized instruments are not only programmable, but provably backed — forming the foundation of institutional-grade onchain finance.

## Independent Source-Level Verification

Chronicle Proof of Assets provides verifiable, source-level data for smart contracts, auditors, and institutions, enabling transparent insights into the composition, valuation, and collateralization of any tokenized asset.

### Key Verification Features

- **Collateralization:**
Confirms that all issued tokens are fully backed by underlying assets.

- **Composition:**
Provides detailed breakdowns of the assets in the collateral pool.

- **Asset Characteristics:**
Includes metadata such as maturity dates, yields, and current market values.

- **Valuation Integrity:**
Ensures onchain token values align with trusted, offchain market data.

### Cryptographic Assurance

Users can trace data provenance through the Chronicle [Proof of Assets Dashboard](https://chroniclelabs.org/dashboard/vaos), providing full transparency and cryptographic guarantees of asset authenticity and solvency. The Proof of Assets Dashboard serves as the visualization layer of the Proof of Assets Oracle, turning cryptographic attestations into a clear visual representation that anyone can inspect.

## Use Cases

### Stablecoins
Stablecoins are a foundational component of the DeFi ecosystem. They allow users to transact, lend, and earn yield using assets with low price volatility, while still benefiting from the transparency and automation of smart contracts.

Because of their stability and liquidity, stablecoins are a preferred form of collateral and play a critical role in scaling DeFi adoption across trading, lending, and yield-generating protocols.

One such example is [M0](https://chroniclelabs.org/dashboard/vao/m-by-m0), a universal platform enabling builders to create application-specific stablecoins. M0's reserves are continuously validated by Chronicle's Proof of Assets, providing smart contracts with proof that each collateralized stablecoin is fully backed by an equal amount of collateral.

### Offchain Assets

Offchain assets are traditional financial instruments or real-world assets that exist outside the blockchain but can be tokenized to be integrated in DeFi and other onchain ecosystems. These assets often include bonds, real estate, commodities, or other financial instruments, allowing investors to gain blockchain-native exposure while retaining ties to underlying real-world value. Verifying the composition, valuation, and collateralization of these assets is critical to maintaining trust and transparency.

One such example is Midas-issued [mTBILL token](https://chroniclelabs.org/dashboard/oracle/MTBILL/USD#blockchain=BASE&contract=0x70E58b7A1c884fFFE7dbce5249337603a28b8422&txn=0x15960b385f3d495440731fbca9da2b9a44d0274398c15ac028c58e6b0a43b78f) that provides investors with onchain exposure to the Federal Reserve's rate. Each mTBILL represents one share in the BlackRock Treasury Bond (fund) that exclusively holds short-dated U.S. government debt. 

Another example is [USTB (Superstate Short Duration US Government Securities Fund)](https://chroniclelabs.org/dashboard/vao/superstate-ustb). The Superstate Short Duration US Government Securities Fund offers Qualified Purchasers access to short-duration Treasury Bills.

### Tokenized Equities
As the broader ecosystem pushes toward tokenization, equities represent one of the largest untapped categories. By bringing equities onchain, developers unlock 24/7 trading as well as new use cases across lending, synthetic assets, indices, and more.

### Liquid Staking Derivatives
Liquid staking derivatives are tokenized representations of staked native assets. They play a key role in unlocking capital efficiency and supporting the growth of the DeFi ecosystem.

Chronicle Proof of Assets provides verifiable proof of backing for liquid staking derivative tokens, allowing developers, users, and protocols to confirm that each derivative is fully backed by the corresponding staked native assets.


### Commodities
Physical commodities or commodity-backed tokens, such as gold, silver, or oil, can be transparently verified using Chronicle Proof of Assets. Each token can be traced to the underlying asset held in custody, with attestations confirming quantity, quality, and storage conditions.

## Securely Integrating RWAs into DeFi

Chronicle Proof of Assets enables secure and transparent integration of Real-World Assets (RWAs) into DeFi protocols. By providing verifiable data on the underlying assets of tokenized RWAs, Proof of Assets allows smart contracts to make automated, trust-minimized decisions based on actual asset conditions.

### Key Features

- **Automated Protocol Actions:** Trigger smart contract-based responses, such as circuit breakers or liquidations, if collateralization levels drop or anomalies are detected.

- **Transparency & Verifiability:** Builders and auditors can rely on cryptographically verifiable data to make informed decisions.

- **DeFi Risk Management:** Enhance protocol safety by enforcing automated checks on tokenized RWAs.

With Chronicle Proof of Assets, developers can design protocols that respond automatically to real-world asset data, creating a safer, more transparent, and trust-minimized DeFi ecosystem.


## Ecosystem Participants and Their Benefits

**Token Issuers:** Provide verifiable guarantees of solvency, ensuring that tokens cannot be minted beyond the assets held in reserves. Examples include tokenized assets and stablecoin issuers.

**Token Holders:** Increase confidence in the backing of tokenized assets that are collateralized by offchain reserves, promoting trust and transparency.

**Institutions:** Access reliable, verifiable asset data to make informed investment, lending, and custody decisions while reducing counterparty and operational risk.

**Policy Makers & Regulators:** Leverage verifiable, onchain data to monitor systemic risk, enforce compliance, and establish transparent reporting standards across digital asset ecosystems.

**DeFi Builders:** Enable automated, smart contract-based strategies, such as circuit breakers, liquidations, or portfolio rebalancing to optimize for yield and manage risk.