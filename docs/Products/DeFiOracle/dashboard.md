---
sidebar_position: 4
description: The Chronicle Dashboard - full transparency over Oracle-reported data
keywords: [Chronicle Dashboard, verifiability]
---

# The Chronicle Dashboard
The **[Chronicle Dashboard](https://chroniclelabs.org/dashboard)** provides full transparency into Chronicle's oracle network.
On the dashboard, you will find 5 sections:
- **Dashbord:** high-level overview of Chronicle data
- **Proof of Asset:** Chronicle's Proof of Asset visualization layer, turning cryptographic attestations into a clear, visual representation that anyone can inspect
- **Oracles:** oracle-specific information like update thresholds, contract addresses, and data sources used for DeFi Oracles
- **Validators:** information on Chronicle's Validator set 
- **Points:**  track and manage your participation in Chronicle's Points program directly on the Chronicle Dashboard.


**Dashboard**

The Dashboard tab provides an overview of the Chronicle Dashboard. You can see the total number of oracles, a summary of the oracles available, and a snapshot of the validator set.

<div style={{textAlign: 'center'}}>
<img
    src="/img/Intro/dash.png"
    alt="Check Sources"
    width="700"
/>
</div>

**Oracles**

The Oracles tab allows users to find oracle addresses for specific chains. Inside this tab, you can toggle between Mainnets and Testnets to view oracle addresses for production and test environments. For each, you can select the specific chain you're interested in.

<div style={{textAlign: 'center'}}>
<img
    src="/img/Intro/oracles.png"
    alt="Check Sources"
    width="800"
/>
</div>


## Where is the Data Sourced From?

Using the dashboard, users can select a time interval on the graph and, for each validator, use the drop-down arrow to see the different data sources that have been used. Typically, the data sources are a mix of onchain and off-chain data sources with high liquidity.


<div style={{textAlign: 'center'}}>
<img
    src="/img/Intro/time.png"
    alt="Check Sources"
    width="600"
/>
</div>
<div style={{textAlign: 'center'}}>
<img
    src="/img/Intro/sources.png"
    alt="Check Sources"
    width="600"
/>
</div>

## Verifiability on Every Level

Users can cryptographically verify in the browser using the Dashboard any **Validator's Signature**, as well as the **Schnorr Signature** used to push the price onchain to the corresponding Oracle.

### The Validator Signature
The validator's signature allows users to verify the behaviour of the validator. Users can check the message that has been signed by each validator to calculate the price for the Oracle.

<div style={{textAlign: 'center'}}>
<img
    src="/img/Intro/non-manipulated.png"
    alt="Check Sources"

/>
</div>

Modifying even one character of the signature will result in an invalid signature. 
<div style={{textAlign: 'center'}}>
<img
    src="/img/Intro/manipulated.png"
    alt="Check Sources"
    width="600"
/>
</div>

### The Schnorr Signature of the Oracle

Users can also verify the authenticity of the Schnorr signature of the Oracle. This value is used to push data onchain. Unlike the validator's signature, the Schnorr signature allows users to verify the Oracle instead of a single validator.
<div style={{textAlign: 'center'}}>
<img
    src="/img/Intro/checkOracle.png"
    alt="Check Sources"
    width="500"
/>
</div>
<div style={{textAlign: 'center'}}>
<img
    src="/img/Intro/oracleVerification.png"
    alt="Check Sources"
    width="300"
/>
</div>