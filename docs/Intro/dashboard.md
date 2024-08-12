---
sidebar_position: 4
description: The Chronicle Dashboard - full transparency over Oracle-reported data
keywords: [Chronicle Dashboard, verifiability]
---

# The Chronicle Dashboard
The **[Chronicle Dashboard](https://chroniclelabs.org/dashboard)** enables full transparency over where the Oracle-reported data was sourced and who reported/signed it.

## Where is the Data Sourced From?

Using the dashboard, users can select a time interval on the graph and, for each validator, use the drop-down arrow to see the different data sources that have been used. Typically, the data sources are a mix of onchain and off-chain data sources with high liquidity.


<div style={{textAlign: 'center'}}>
<img
    src="/img/Intro/time.png"
    alt="Check Sources"
    width="500"
/>
</div>
<div style={{textAlign: 'center'}}>
<img
    src="/img/Intro/sources.png"
    alt="Check Sources"
    width="500"
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
    width="500"
/>
</div>

Modifying even one character of the signature will result in invalidating the signature.
<div style={{textAlign: 'center'}}>
<img
    src="/img/Intro/manipulated.png"
    alt="Check Sources"
    width="500"
/>
</div>

### The Schnorr Signature

Users can also verify the authenticity of the Schnorr signature of the Oracle. This value is used to push data onchain. Unlike the validator's signature, the Schnorr signature allows to verify the Oracle instead of a single validator.
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
/>
</div>




