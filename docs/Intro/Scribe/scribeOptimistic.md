---
sidebar_position: 1
description: Scribe Optimistic - Scribe with additional optimistic poke functionality on Layer 1 blockchains
keywords: [Scribe Optimistic, L1, optimistic poke]
---
# ScribeOptimistic

## Background

[ScribeOptimistic](https://github.com/chronicleprotocol/scribe/blob/41f25a8a40f1a1d2ef62d6a073f98a3c57d23579/src/ScribeOptimistic.sol) is a contract that builds upon [Scribe](https://github.com/chronicleprotocol/scribe/blob/41f25a8a40f1a1d2ef62d6a073f98a3c57d23579/src/Scribe.sol), providing additional optimistic poke functionality on **Layer 1 blockchains**. 

### Problem Statement

On Layer 1 blockchains, computation is expensive, and signature aggregation is a gas-intensive process. This makes the onchain verification of the Schnorr aggregated signature costly, as it requires a significant amount of gas.

### Solution

ScribeOptimistic addresses this issue by introducing the `opPoke()` function, which enables offchain verification of the Schnorr aggregated signature. This allows for a more efficient and cost-effective way to verify signatures on Layer 1 blockchains.

## How Does it Work?
With  ScribeOptimistic all values optimistically proposed by validators are put into a public “buffer” and get automatically accepted after the challenge period.

During the challenge period, anyone can verify the signature offchain. If you find a signature to be invalid you can additionally call `opChallenge()` to collect an ETH reward by having the Oracle verify the signature onchain. `OpChallenge()` can be called at any time, but only successful challenges will procure the reward.  
Upon a successful challenge, the challenger will receive a reward in ETH, the optimistic answer gets dropped, and the validator responsible for the answer will be removed.


<div style={{textAlign: 'center'}}>
<img
    src="/img/Intro/Scribe/scribeOp.png"
    alt="Scribe Optimistic"
/>
</div>

The ETH reward is sent directly inside the `opChallenge()` transaction to the challenger if the opPoke is invalid. In other words, Chronicle Protocol will pay you to monitor their Oracles and challenge invalid data. 

To check the current challenge period, you can check the `opChallengePeriod`’s value using `opChallengePeriod()` which returns a value in seconds. Similarly, you can check the reward for successfully challenging the opPoke using the `challengeReward()`.

## `OpPoke()`

The `opPoke()`allows a validator to sign a (value, age) tuple and a corresponding Schnorr signature, using ECDSA. Here, the value represents the data that the validators reached consensus on as the next data for the Oracle to deliver, and the age is the timestamp of this value.

### Steps:

- Each validator collects a set of data from multiple trusted data sources and signs an aggregated value (median). All of these values and signatures are aggregated into a single Schnorr signature  aggregated again into a final proposed value (median).
- The signed data (median of medians) is then sent by a validator to the `opPoke()`.
- `OpPoke()` binds the validator to the signed data. A public callable `opChallenge()` can be called to challenge the data.
- The validator is now associated with the signed data, and the data is considered "poked" after the challenge period ends without a successful challenge.

## `OpChallenge()`

The `opChallenge()` function is a public callable function that can be called at any time. Its purpose is to verify the current optimistically poked data to remove any potential invalid opPokes and remove the validator that submitted an invalid `opPoke()`.

### Steps:

- `OpChallenge()` is called, which triggers the verification process.
- The function performs the Schnorr signature verification of the currently opPoked data.
- If the verification succeeds, the data is finalized.
- If the verification fails, the validator bound to the data is removed, the data is deleted, and the challenger gets an ETH reward.

## How does ScribeOptmistic differ from Scribe?
Scribe Oracles provide instant updates and are optimized for Layer 2 (L2) networks that prioritize speed, where gas costs are low. This means that as soon as a new price is published, it becomes available.

ScribeOptimistic Oracles are tailored for Layer 1 (L1) networks, where computation costs are significantly higher. With ScribeOptimistic, an incoming price is not finalized until the challenge period has concluded.  You can think of it as a delayed oracle. The shorter the challenge period, the less phase-shifted the oracle becomes.

<div style={{textAlign: 'center'}}>
<img
    src="/img/Intro/Scribe/buffer.png"
    alt="Scribe Optimistic"
  
/>
</div>

Currently, Chronicle's challenge period is set to 20 minutes, though this value is customizable. Once the challenge period ends, the optimistic price is finalized and published on the oracle, even if the market price has shifted in the meantime.