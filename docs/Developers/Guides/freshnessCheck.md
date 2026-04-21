---
sidebar_position: 4
description: How to verify Oracle data freshness at the application level.
keywords: [freshness, readWithAge, tryReadWithAge, oracle]
---

# Verifying Oracle Data Freshness

When consuming onchain oracle data, consumers should implement their own checks at the application level to confirm the data is fresh enough for their use case. Oracle updates can be delayed due to network conditions, gas costs, or other factors, and acting on stale data can lead to incorrect behavior in your application.

Chronicle provides two functions that return both the oracle value and its **age** (the Unix timestamp of the last update), enabling builders to implement freshness checks at the application level.

:::warning
Skipping a freshness check means your contract may silently act on outdated data. Always validate `age` before using the returned value in any logic that affects user funds or protocol state.
:::

## `readWithAge()` Function

`readWithAge()` returns `(val, age)`:

- `val` — the oracle's current value (18 decimals)
- `age` — the Unix timestamp of the last update

The time elapsed since the last update is `block.timestamp - age`.

## `tryReadWithAge()` Function

`tryReadWithAge()` returns a tuple of `(bool, val, age)` and **never reverts**.

This variant is useful when you want to handle the absence of a value gracefully rather than relying on reverts.

## Implementing a Freshness Check

The example below shows an example for reading from a Chronicle Oracle and enforcing a maximum data age:

**Using `readWithAge()`** 

```
(uint256 val, uint256 age) = chronicle.readWithAge();

require(
    block.timestamp - age <= maxAge,
    "data freshness < freshness check"
);
```

**Using `tryReadWithAge()`** — never reverts, returns `(false, 0, 0)` if the value is missing:

```
(bool ok, uint256 val, uint256 age) = chronicle.tryReadWithAge();

if (!ok || block.timestamp - age > maxAge) {
    // handle missing or stale value
}
```

:::tip
The right value for `maxAge` depends on the update frequency of the specific feed you're reading and the data freshness needs of your application. Check the feed's update threshold on the [Dashboard](https://chroniclelabs.org/dashboard/oracles) by selecting a given oracle, and then looking at its `Update Threshold`.
:::

