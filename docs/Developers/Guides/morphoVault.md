---
sidebar_position: 4
description: Using a Chronicle Oracle for Morpho Markets
keywords: [oracles, read]
---
# Deploy a Chronicle Oracle for Morpho Markets
Chronicle's Oracles are partially compatible with Chainlink oracles implementing the most widely used (and not deprecated) functions of the IChainlinkAggregatorV3 interface such as latestRoundData(), decimals(), and latestAnswer().

To integrate Chronicle Oracles into Morpho Markets, you can deploy the [Morpho Chainlink Adapter](https://github.com/morpho-org/morpho-blue-oracles/blob/main/src/morpho-chainlink/MorphoChainlinkOracleV2.sol). This adapter enables compatibility between Chronicle’s Oracles and Morpho's infrastructure.

For easier deployment, you can use the [MorphoChainlinkOracleV2Factory](https://github.com/morpho-org/morpho-blue-oracles/blob/main/src/morpho-chainlink/MorphoChainlinkOracleV2.sol). A step-by-step guide is available in [Morpho’s documentation](https://docs.morpho.org/curation/tutorials/deploying-oracle/).

:::warning
    **Before deploying the Morpho Chainlink Adapter using the MorphoChainlinkOracleV2Factory, the target address of the Adapter must be whitelisted (also referred to as "kissed")** by the Chronicle team. Read access will fail if the requesting address is not whitelisted, as Chronicle's oracles are protected by a whitelist. To get the address whitelisted, get in touch with the team by [opening a ticket on Discord](https://discord.com/invite/CjgvJ9EspJ), and check below the details needed for the whitelist.
:::
## Getting Read Access for the Adapter

Chronicle oracles enforce read protection via a whitelist. To request read access for your Adapter:

    - [Open a ticket on Discord](https://discord.com/invite/CjgvJ9EspJ)

    - Share the address to be whitelisted with the Chronicle team.

Since the Adapter hasn’t been deployed yet, you’ll need to **pre-compute its address**. There are two ways to do this:

### Option 1: Simulate Deployment

    - Deploy the oracle adapter locally or on a forked network (e.g., Tenderly, Anvil). The failing deployment attempt will reveal the pre-computed address.

    - Send that resulting address to the Chronicle team for whitelisting.

### Option 2: Provide Deployment Parameters

If you prefer not to simulate the deployment, send the following instead:

    - The address of the MorphoChainlinkOracleV2Factory.

    - The [salt](https://github.com/morpho-org/morpho-blue-oracles/blob/main/src/morpho-chainlink/MorphoChainlinkOracleV2Factory.sol#L37) you intend to use for the oracle deployment.

The Chronicle team will use this information to whitelist the address ahead of time.
:::note
If you need any additional help with the process mentioned above, feel free to mention it in the [Discord ticket]((https://discord.com/invite/CjgvJ9EspJ)) you open — we're happy to support you with the deployment.
:::

Once you receive the confirmation form the Chronicle team that the target address has been whitelisted, you can proceed with the actual deployment of the Adapter using the Factory. 
