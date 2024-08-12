---
sidebar_position: 3
description: How do PUSH Oracles Work?
keywords: [PUSH Oracle, Data Source]
---

# PUSH Oracles

**Chronicle uses a PUSH model for its Oracles.**

## How do PUSH Oracles Work?
PUSH oracles actively deliver data to smart contracts without needing an explicit request. Upon the occurrence of a specific event or condition, the PUSH oracle automatically triggers the smart contract with the relevant data. For example, a PUSH Oracle might send price data to a smart contract every X minutes/hours, or whenever the price deviates by a certain percentage from its previous value.


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
