---
sidebar_position: 3
description: How do PUSH Oracles Work?
keywords: [PUSH Oracle, Data Source]
---

# PUSH Oracle

## How Does a  PUSH Oracle Work?

Protocol validators fetch data from different sources. The data used is verifiable and identifiable to the its underlying source. This functionality is available to both decentralized sources (like DEXes) and centralized sources (like CEXes). Validators sign and publish this data on an offchain peer-to-peer network. After publication, the data is aggregated through an aggregation mechanism (e.g. the median of medians), to eliminate outliers and determine the final value to be published onchain. Data is then published onchain based on a [predefined threshold](#oracle-updates). Once onchain, this data can be consumed by any dApps that read from the oracle smart contract.

<div style={{textAlign: 'center'}}>
    <img
    src="  ../img/Products/push.png"
    alt="PUSH Oracle Illustration"
    />
</div>
    

### When Does an Oracle Update? {#oracle-updates}

PUSH oracles actively deliver data to smart contracts without requiring an explicit request. Upon the occurrence of a specific event or condition, the PUSH oracle automatically updates the oracle smart contract with the new data. For example, a PUSH Oracle might update price data every X minutes/hours, or whenever the underlying price deviates beyond a specified threshold.

```mermaid
sequenceDiagram
  
    participant DS as Data Source<br />(offchain)
    participant PO as PUSH Oracle<br />(offchain)
    participant OC as Oracle Smart Contract<br />(onchain)
    participant SC as Smart Contract

    DS->>PO: Event or condition occurs
    PO->>OC: Push data to Oracle Smart Contract
    OC->>OC: Process data and update the state
    SC->>OC: Request data from Oracle
    OC->>SC: Deliver data to Smart Contract
    SC->>SC: Process and use data
```

