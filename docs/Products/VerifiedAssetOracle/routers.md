---
sidebar_position: 2
description: Routers for Proof of Asset Oracles
keywords: [Proof of Asset, uScribe, router, integration]
---

# Routers

## What Is a Router?

Every Proof of Asset oracle ([uScribe](../../Intro/Scribe/uScribe.md)) has an associated **Router contract**. Routers expose the same read interface as the underlying uScribe oracle, but serve as a stable integration point that decouples your contract from the oracle's internal verification logic.

## Integrating Proof of Asset Oracles and Their Associated Router

:::important
When integrating a Proof of Asset Oracle, your smart contract address will be whitelisted on the associated Router. **Make sure to integrate the Router address — not the oracle address directly — into your smart contract.**
:::

To read data from a Proof of Asset oracle via its router, call the same read functions you would on a uScribe oracle. No additional configuration is required.

If you are building a new integration, always use the router address rather than the uScribe oracle address directly.

For more details on available read functions, refer to the [uScribe documentation](../../Intro/Scribe/uScribe.md).

## How Routers Work

Routers sit between your smart contract and the uScribe oracle. When you call a read function on a router, it forwards the request to the corresponding uScribe oracle and returns the result. The interface is identical — you can interact with a router exactly as you would with the oracle directly.

```text
Customer Contract --reads from→ Router --reads from→ uScribe Oracle
```

## Router Naming Convention

Router contract names follow this pattern:

```
ChronicleVAO_<Issuer>_<AssetTicker>_<Role>_<Counter>
```

| Segment         | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| `ChronicleVAO`  | Chronicle Verified Asset Oracle prefix                              |
| `<Issuer>`      | The asset issuer or protocol (e.g., `Centrifuge`)                   |
| `<AssetTicker>` | The asset identifier                                                |
| `<Counter>`     | Incremental version counter                                         |

**Example:** `ChronicleVAO_Centrifuge_ACRDX_Router_1`

## Proof of Asset Router Addresses

The tables below list the router contracts for each Chronicle Proof of Asset oracle, organized by chain.

:::info
For a full, up-to-date overview of all Proof of Asset integrations, see the [Chronicle Proof of Asset Dashboard](https://chroniclelabs.org/dashboard/proofofassets).
:::

<details>
<summary>Ethereum</summary>

| Oracle              | Router Name                                          | Router Address                                                                                                                    |
| ------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Centrifuge ACRDX    | `ChronicleVAO_Centrifuge_ACRDX_Router_1`            | [0x87603527aeBbBDf46D73E524830bE81f93778FFa](https://etherscan.io/address/0x87603527aeBbBDf46D73E524830bE81f93778FFa#code)        |
| Centrifuge JAAA     | `ChronicleVAO_Centrifuge_JAAA_Router_1`             | [0x5D44916E0Db13EcD661b20Df4D645904E57589C8](https://etherscan.io/address/0x5D44916E0Db13EcD661b20Df4D645904E57589C8#code)        |
| Centrifuge JTRSY    | `ChronicleVAO_Centrifuge_JTRSY_Router_1`            | [0xE980a33EFA3EDDaa689eCbdCE4B2278D4DB94471](https://etherscan.io/address/0xE980a33EFA3EDDaa689eCbdCE4B2278D4DB94471#code)        |
| Centrifuge deJAAA   | `ChronicleVAO_Centrifuge_deJAAA_Router_1`           | [0x25563a9F085975CC6B86F66F3c010c24c12B3Ffa](https://etherscan.io/address/0x25563a9F085975CC6B86F66F3c010c24c12B3Ffa#code)        |
| Centrifuge deJTRSY  | `ChronicleVAO_Centrifuge_deJTRSY_Router`            | [0x2EdD943484f104760591E18184CaBD53cdfBfC21](https://etherscan.io/address/0x2EdD943484f104760591E18184CaBD53cdfBfC21#code)        |
| Centrifuge deSPXA   | `ChronicleVAO_Centrifuge_deSPXA_Router_1`           | [0x58AA442107ac268ffA1309D410fB9c6Be2b67783](https://etherscan.io/address/0x58AA442107ac268ffA1309D410fB9c6Be2b67783#code)        |
| Fission NAV         | `ChronicleVAO_Fission_NAV_Router_2`                 | [0xE7A65449bb4e68cBa274E92Df7607319DA669415](https://etherscan.io/address/0xE7A65449bb4e68cBa274E92Df7607319DA669415#code)        |
| Galaxy CLO          | `ChronicleVAO_Galaxy_CLO_Router`                    | [0xBAAC5e7e609930922E52ff0F3DE94903CC98A5ab](https://etherscan.io/address/0xBAAC5e7e609930922E52ff0F3DE94903CC98A5ab#code)        |
| Keyring pACRDX      | `ChronicleVAO_Keyring_pACRDX_Router_1`              | [0xa4A2E6472feb29b3b17f488Da6b5C5Fc1e34EC5A](https://etherscan.io/address/0xa4A2E6472feb29b3b17f488Da6b5C5Fc1e34EC5A#code)        |
| Superstate USTB     | `ChronicleVAO_Superstate_USTB_Router_2`             | [0xDf8deCbDB89C95297ee6ef816Bd8A7B66973f254](https://etherscan.io/address/0xDf8deCbDB89C95297ee6ef816Bd8A7B66973f254#code)        |
| Securitize STAC     | `ChronicleVAO_Securitize_STAC_Router_1`             | [0x802CaCc19B9b3eb474C7DEf6f28c64AB67fb0753](https://etherscan.io/address/0x802CaCc19B9b3eb474C7DEf6f28c64AB67fb0753#code)        |
| Securitize BUIDL    | `ChronicleVAO_Securitize_BUIDL_Router_1`            | [0x8c68E0CacB61a065b99E2104457aCC829d61cbB0](https://etherscan.io/address/0x8c68E0CacB61a065b99E2104457aCC829d61cbB0#code)        |

</details>

<details>
<summary>Base</summary>

| Oracle                  | Router Name                                                    | Router Address                                                                                                                       |
| ----------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Centrifuge deJAAA       | `ChronicleVAO_Centrifuge_deJAAA_Router_1`                     | [0x25563a9F085975CC6B86F66F3c010c24c12B3Ffa](https://basescan.org/address/0x25563a9F085975CC6B86F66F3c010c24c12B3Ffa#code)           |
| Centrifuge deSPXA 7/24  | `ChronicleVAO_Centrifuge_deSPXA_7_24_Router_1`                | [0x7F316A3Da70b0b7ea3C450978c7c143e0Caf0469](https://basescan.org/address/0x7F316A3Da70b0b7ea3C450978c7c143e0Caf0469#code)           |
| Centrifuge deSPXA       | `ChronicleVAO_Centrifuge_deSPXA_Router_1`                     | [0x58AA442107ac268ffA1309D410fB9c6Be2b67783](https://basescan.org/address/0x58AA442107ac268ffA1309D410fB9c6Be2b67783#code)           |

</details>
