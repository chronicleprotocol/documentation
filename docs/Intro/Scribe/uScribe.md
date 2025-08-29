---
sidebar_position: 3
description: uScribe  - Universal Scribe 
keywords: [uScribe]
---
# Universal Scribe

## Background
uScribe is a universal Oracle that is able to deliver any arbitrary data, building on Chronicle's cost-efficient [Scribe Oracle](/Intro/Scribe/scribe.md). 

Unlike the original Scribe, which focuses on standard price feed updates, uScribe can support **any arbitrary data payload** onchain.

The uScribe oracle allows for unique customization via its [consumer](#consumers) architecture, giving data providers a chance to define onchain enforced rules over their data - all while enjoying the high security of the underlying _Chronicle Protocol_.

This is achieved via separating the data integrity verification from the data update and access logic, giving data providers the ability to enforce unique rulesets about their data directly onchain. By separating the highly complex cryptographic verification from the application logic, uScribe enables building oracles with full flexibility.


## Key advantages:
- **Supports arbitrary data types:** Supports any `bytes` payload of unrestricted size.
- **Flexible consumer pattern:** Application-specific logic is implemented in downstream “consumer” contracts.
- **High security:** Leverages the [Chronicle Protocol reputable validator set](https://chroniclelabs.org/validators) for verifying the data.
- **Separation of concerns:** Cryptographic verification is handled in uScribe, leaving [consumer](#consumers) to define their own rules for data use.
- **Customizable data access:** Consumers can implement arbitrary read functions (e.g.: provide access to historical data, grant access based on specific conditions an address must fulfill, or even restrict access during times of uncertainty).

## Consumers
A **consumer** is a downstream contract that:
- Inherits from [`UScribe.sol`](https://github.com/chronicleprotocol/uscribe/blob/main/src/UScribe.sol).
- Implement application specific logic.
- Implements the internal [_poke(bytes calldata payload)](https://github.com/chronicleprotocol/uscribe/blob/main/src/UScribe.sol#L81-L116) function.
- Defines the actual data being poked

In `poke()`:
- **You** define the state update logic for when new data arrives.
- Data integrity has already been verified by Chronicle.
- You **only** need to handle application-specific requirements (e.g., parsing payloads, storing values).

The internal [`_poke(bytes calldata payload)`](https://github.com/chronicleprotocol/uscribe/blob/main/src/UScribe.sol#L81-L116) function must be overwritten to define the data deserialization and state update executed when new data is being published.

Example of data types that can be defined to be `poked()` by the consumer:
- `uint256 price`
- `uint256[] prices`
-  `struct MyData {
      uint timestamp;
      uint price;
      int rate;
    }`

## Security

The data integrity verification is based on the battle-tested [Scribe](https://github.com/chronicleprotocol/scribe/) codebase which runs without security issues in production since 2023 and uses the most efficient [Schnorr multi-signature verification](https://github.com/chronicleprotocol/scribe/blob/main/docs/Schnorr.md) live on Ethereum up to this date.


## GitHub Repository
You can access the associated Github repository [here](https://github.com/chronicleprotocol/uscribe).