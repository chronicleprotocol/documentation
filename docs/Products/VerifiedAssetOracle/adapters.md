---
sidebar_position: 3
description: Adapters for Proof of Asset Oracles
keywords: [Proof of Asset, adapter, Chainlink, integration]
---

# Adapters

## Integrating a Chronicle Proof of Asset Oracles with a Chainlink Adapter
Chronicle's ChainlinkAdapter enables compatibility between Chronicle's Proof of Asset Oracles and Chainlink's `IChainlinkAggregatorV3` interface, exposing the standard Chainlink read functions: `latestAnswer()`, `latestRoundData()`, and `decimals()`.

To read data from a Proof of Asset oracle via its adapter, call the standard Chainlink functions on the adapter contract. No additional configuration is required.

If you are building a new integration, always use the adapter address rather than the router or uScribe oracle address directly.

## How Adapters Work

Adapters wrap a [Chronicle Router](./routers.md) and expose it through the `IChainlinkAggregatorV3` interface. When your contract calls a read function on an adapter, it forwards the request to the underlying Router, which in turn reads from the [uScribe oracle](../../Intro/Scribe/uScribe.md). The result is then returned in the format your integration expects.


```text
Customer Contract --reads from→ ChainlinkAdapter --reads from→ Router --reads from→ uScribe Oracle
```
:::important
When using the ChainlinkAdapter for Chainlink compatibility, read from the adapter address in your smart contract — not the underlying oracle or router address directly. Note that whitelisting still happens at the Router level.
:::

## Adapter Naming Convention

Adapter contract names follow this pattern:

```text
ChronicleVAO_<Issuer>_<AssetTicker>_ChainlinkAdapter_<Counter>
```

| Segment               | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| `ChronicleVAO`        | Chronicle Verified Asset Oracle prefix                            |
| `<Issuer>`            | The asset issuer or protocol (e.g., `Centrifuge`)                 |
| `<AssetTicker>`       | The asset identifier                                              |
| `ChainlinkAdapter`    | Identifies this contract as a Chainlink-compatible adapter        |
| `<Counter>`           | Incremental version counter                                       |

**Example:** `ChronicleVAO_Centrifuge_ACRDX_ChainlinkAdapter_1`

## Chainlink Adapter Addresses

The tables below list the Chainlink adapter contracts for each Chronicle Proof of Asset oracle, organized by chain.

:::info
For a full, up-to-date overview of all Proof of Asset integrations, see the [Chronicle Proof of Asset Dashboard](https://chroniclelabs.org/dashboard/proofofassets).
:::

<details>
<summary>Ethereum</summary>

| Oracle Name           | Adapter Name                                          | Chainlink Adapter Contract                                                                                                          |
| --------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Centrifuge ACRDX      | `ChronicleVAO_Centrifuge_ACRDX_ChainlinkAdapter_1`   | [0x486A0A7676e966a77A32359134F11D95BBcF77dd](https://etherscan.io/address/0x486A0A7676e966a77A32359134F11D95BBcF77dd#code)          |
| Centrifuge JAAA       | `ChronicleVAO_Centrifuge_JAAA_ChainlinkAdapter_1`    | [0x5A4BEEB8854442D69267C9a0a3A17BE60fDded04](https://etherscan.io/address/0x5A4BEEB8854442D69267C9a0a3A17BE60fDded04#code)          |
| Centrifuge JTRSY      | `ChronicleVAO_Centrifuge_JTRSY_ChainlinkAdapter`     | [0x22d9527ad4489D3C760A6380a3c4dD06114B09aE](https://etherscan.io/address/0x22d9527ad4489D3C760A6380a3c4dD06114B09aE#code)          |
| Centrifuge deJAAA     | `ChronicleVAO_Centrifuge_deJAAA_ChainlinkAdapter_1`  | [0xEC41d6BA0fCdae0E41A521F510907BF7E4a87694](https://etherscan.io/address/0xEC41d6BA0fCdae0E41A521F510907BF7E4a87694#code)          |
| Centrifuge deJTRSY    | `ChronicleVAO_Centrifuge_deJTRSY_ChainlinkAdapter_1` | [0xb71e0Da4C6853718C04dAf58CA2ec22eB0fC4517](https://etherscan.io/address/0xb71e0Da4C6853718C04dAf58CA2ec22eB0fC4517#code)          |
| Galaxy CLO            | `ChronicleVAO_Galaxy_CLO_ChainlinkAdapter_1`         | [0xA9D9fBB82900ec4F55Fe8d5213387456b7336974](https://etherscan.io/address/0xA9D9fBB82900ec4F55Fe8d5213387456b7336974#code)          |
| Keyring pACRDX        | `ChronicleVAO_Keyring_pACRDX_ChainlinkAdapter_1`     | [0x162D75665AA16526e4E509428333e4669A15119c](https://etherscan.io/address/0x162D75665AA16526e4E509428333e4669A15119c#code)          |
| Securitize BUIDL      | `ChronicleVAO_Securitize_BUIDL_ChainlinkAdapter_1`   | [0x35cE8603C90A4286CF91C4c05EfaE4565Daf7eFb](https://etherscan.io/address/0x35cE8603C90A4286CF91C4c05EfaE4565Daf7eFb#code)          |
| Securitize STAC       | `ChronicleVAO_Securitize_STAC_ChainlinkAdapter_1`    | [0xc5fc229d60c70420A0c5a64d0A7f59aA7F6f081d](https://etherscan.io/address/0xc5fc229d60c70420A0c5a64d0A7f59aA7F6f081d#code)          |
| Superstate USTB       | `ChronicleVAO_Superstate_USTB_ChainlinkAdapter_1`    | [0x5D2edCaD212E2f480CD8E97d839b7D539249b6E5](https://etherscan.io/address/0x5D2edCaD212E2f480CD8E97d839b7D539249b6E5#code)          |

</details>

<details>
<summary>Base</summary>

| Oracle Name              | Adapter Name                                               | Chainlink Adapter Contract                                                                                                          |
| ------------------------ | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Centrifuge deJAAA        | `ChronicleVAO_Centrifuge_deJAAA_ChainlinkAdapter_1`       | [0xEC41d6BA0fCdae0E41A521F510907BF7E4a87694](https://basescan.org/address/0xEC41d6BA0fCdae0E41A521F510907BF7E4a87694#code)          |
| Centrifuge deSPXA 7/24   | `ChronicleVAO_Centrifuge_deSPXA_7_24_ChainlinkAdapter_1`  | [0x97165Ad36D96567a521958cc46914160B968752b](https://basescan.org/address/0x97165Ad36D96567a521958cc46914160B968752b#code)          |
| Centrifuge deSPXA        | `ChronicleVAO_Centrifuge_deSPXA_ChainlinkAdapter_1`       | [0x914b2E2953C4EdB87C164Fe1fddBdB3F6F34F971](https://basescan.org/address/0x914b2E2953C4EdB87C164Fe1fddBdB3F6F34F971#code)          |

</details>
