---
slug: /understandingChronicle
sidebar_position: 1
description: Why Chronicle?
keywords: [Chronicle, onchain data, data layer]
---

# Understanding Chronicle

## **The Data Layer for Onchain Finance**
Chronicle is a data verification infrastructure provider started in 2017 within MakerDAO (Sky). Chronicle built the first oracle on Ethereum and has continuously operated its onchain data infrastructure through multiple market cycles, becoming an independent protocol in 2023. As onchain finance grows, institutions and platforms need a way to trust the data behind tokenized assets. That's the layer Chronicle provides, securing billions in assets across onchain markets.

## **What Chronicle Offers**

<div className="row">
  <div className="col col--4 margin-bottom--lg">
    <div className="card offering-card padding--lg">
      <h3>Proof of Asset</h3>
    </div>
    <p className="offering-description">Continuous onchain verification of tokenized assets and holdings-level data, including composition, valuation, liquidity, and yield.</p>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card offering-card padding--lg">
      <h3>Data Feeds</h3>
    </div>
    <p className="offering-description">High-integrity data feeds built for DeFi platforms, using transparent data models, high-quality data sources, and real-time monitoring across 1,500+ oracles.</p>
  </div>
  <div className="col col--4 margin-bottom--lg">
    <div className="card offering-card padding--lg">
      <h3>Chronicle Dashboard</h3>
    </div>
    <p className="offering-description">[A single interface](https://chroniclelabs.org/dashboard) for exploring Chronicle's onchain data. Verifiable and purpose-built for transparency.</p>
  </div>
</div>

## **Why Chronicle**
<details>
<summary>Cryptographic Verification of the Full Data Pipeline</summary>

Chronicle's **data is cryptographically verifiable**. The system produces signed data that can be checked onchain, so a user doesn't have to trust that a reported value is accurate. The [Proof of Asset Dashboard](https://chroniclelabs.org/dashboard/vaos) is the visualization layer, turning cryptographic attestations into a clear visual representation that anyone can inspect.
</details>
<details>
<summary>Unified Data Layer for Onchain Markets</summary>

Rather than offering fragmented tools across asset types, Chronicle provides a **unified data layer** that supports data verification for tokenized assets alongside native DeFi feeds. This allows protocols and institutions to rely on one data stack across hybrid financial systems, instead of stitching together separate pipelines for verification and market data.
</details>
<details>
<summary>Plug & Play</summary>

The protocol architecture prioritizes extensibility. Chronicle is a **blockchain-agnostic protocol** that can be deployed easily to almost any chain. Chronicle Oracles offer seamless integration capabilities via their modular design.
</details>
<details>
<summary>Reputable & Secure</summary>

Nine years of continuous, unbroken operation is hard to match. That longevity brings exposure to conditions no audit can fully reproduce, such as market volatility, real adversaries, and countless edge cases.

Chronicle's **[validators](https://chroniclelabs.org/validators/) are represented by a community of leading protocols**. This approach is unique to Chronicle and ensures that Oracle data is signed by some of the most trusted and reputable projects in the blockchain space, further reinforcing trust in the protocol.

Chronicle is the [second-largest oracle provider by Total Value Secured (TVS)](https://defillama.com/oracles), currently securing over **$15B** in DeFi and tokenized assets. Please note that DefiLlama currently tracks only DeFi assets for oracle TVS metrics.

Chronicle holds [ISO/IEC 27001:2022 certification](../Resources/Security/Certifications.md), the international standard for information security management. The certification was issued after an independent audit covering the design, development, operation, and support of Chronicle's oracle services end to end, including Proof of Asset, Data Feeds, and the Dashboard, along with the APIs, cloud environments, and other onchain and offchain infrastructure behind them.
</details>
<details>
<summary>Trusted by the World's Largest Asset Issuers</summary>

Chronicle Proof of Asset underpins some of the largest tokenized funds in the world, including [BlackRock's BUIDL](https://chroniclelabs.org/blog/buidl-tokenized-by-securitize-is-now-verified-onchain-by-chronicle-proof-of-asset) and the [Janus Henderson Anemoy Treasury Fund](https://chroniclelabs.org/dashboard/vao/janus-henderson-anemoy-treasury-fund). Check the [Chronicle Dashboard](https://chroniclelabs.org/dashboard/proof-of-asset) for the full list of issuers, funds, and protocols Chronicle works with.
</details>
<details>
<summary>Cost-Efficient</summary>

While other Oracles rely on the Elliptic Curve Digital Signature Algorithm (ECDSA), which creates a one-to-one relationship between the number of validators and their signatures, Scribe utilizes a novel application of **Schnorr Signature cryptography**. This allows the consolidation of signatures from a scalable set of validators into a single "super signature" that is then verified by ECDSA. The result? **A near-constant gas cost for Oracle updates, regardless of how many validators are involved.**
</details>

