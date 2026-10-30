---
sidebar_position: 4
description: FAQ questions on Proof of Asset.
keywords: [Proof of Asset Oracle, NAV Oracle, RWA Oracle, Proof of Reserve]
---
# Proof of Asset 
## What is Chronicle Proof of Asset Oracle?
Proof of Asset is the data infrastructure layer for tokenized assets. Chronicle’s oracle network sources and reconciles data from custodians, fund administrators, transfer agents, and onchain issuance records to deliver verified asset data onchain. This enables institutions and onchain operators to value tokenized assets, assess risk, and allocate capital.

## Who has integrated Chronicle's Proof of Asset?
Chronicle Proof of Asset underpins some of the largest tokenized funds in the world, including [BlackRock's BUIDL](https://chroniclelabs.org/dashboard/proof-of-asset/blackrock-buidl) and the [Janus Henderson Anemoy Treasury Fund](https://chroniclelabs.org/dashboard/proof-of-asset/janus-henderson-anemoy-treasury-fund). Check the [Chronicle Dashboard](https://chroniclelabs.org/dashboard/proof-of-asset) for the full list of issuers, funds, and protocols Chronicle works with.

## How does the data get updated?

Chronicle connects directly to custodians, fund administrators, and authorized transfer agents to gather data about the assets backing each token. It reconciles data across all sources, performs fund accounting, and publishes key data onchain, including purchase dates, yields, and maturity dates. It also keeps the asset lifecycle in sync onchain, covering events like issuance, transfer, and settlement.
## What data can Proof of Asset transport?

Proof of Asset can securely and transparently verify the integrity of a wide range of offchain assets, including:

   - Custodied collateral balances
   - Fiat reserves
   - Fund audits and NAV reports
   - Redemption and minting activity
   - Exchange reserves
   
The verified data is then published onchain, ready to be integrated with smart contracts and onchain applications.

## For which assets is Proof of Asset suitable?
Chronicle Proof of Asset supports a broad range of asset classes, including tokenized U.S. Treasuries, money market funds, private credit, structured products, corporate bonds, equity indices, real estate investment trusts (REITs), and stablecoin reserves.

## Is Proof of Asset suitable for institutional use?
Yes. Chronicle works closely with integration partners to ensure each deployment aligns with their data privacy, legal, and operational requirements.

## How is Proof of Asset different from other data verification frameworks such as Proof of Reserve?
Proof of Reserve and similar verification frameworks answer one question: is every token fully backed? They confirm reserves exist, typically through a point-in-time attestation of custodial holdings.
Proof of Asset is an RWA oracle that goes further, continuously verifying not just reserves but composition and characteristics like NAV, yield and liquidity, bringing the full profile of a tokenized asset onchain. That added depth is what lets lending protocols accept tokenized assets as collateral and lets allocators size positions with confidence, rather than only confirming the assets exist.
