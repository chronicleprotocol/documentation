---
sidebar_position: 3
description: How to integrate a Proof of Asset oracle into your smart contract
keywords: [Proof of Asset, interface, VAO, integration]
---

# Integrating Proof of Asset Oracles

Chronicle Proof of Asset oracles expose the `IChronicleVAO_Reader` interface — the same read pattern used across Chronicle's oracle products (see the [IChronicle example](./contracts.md)), extended for Proof of Asset data.

Proof of Asset oracles are built on [uScribe](../../Intro/Scribe/uScribe.md), Chronicle's universal oracle framework capable of delivering any arbitrary data payload onchain.

:::important
Always use the address of the [Router](../../Products/VerifiedAssetOracle/integratingPOAs/routers.md) corresponding to the Proof of Asset oracle you want to integrate. Whitelisting also happens at this level, not on the oracle itself.
:::

## The `IChronicleVAO_Reader` Interface

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IChronicleVAO_Reader {
    /// @notice Returns the oracle's current value.
    /// @dev Reverts if:
    ///      - Not yet poked
    /// @return val The oracle's current value.
    function read() external view returns (uint val);

    /// @notice Returns the oracle's current value.
    /// @return ok True if previously poked, false otherwise.
    /// @return val The oracle's current value if it exists, zero otherwise.
    function tryRead() external view returns (bool ok, uint val);

    /// @notice Returns the oracle's current value and its age.
    /// @dev Reverts if:
    ///      - Not yet poked
    /// @return val The oracle's current value.
    /// @return age The value's age.
    function readWithAge() external view returns (uint val, uint age);

    /// @notice Returns the oracle's current value and its age.
    /// @return ok True if previously poked, false otherwise.
    /// @return val The oracle's current value if it exists, zero otherwise.
    /// @return age The value's age if value exists, zero otherwise.
    function tryReadWithAge()
        external
        view
        returns (bool ok, uint val, uint age);
}
```

### Function Reference

<details>
    <summary><code>read()</code></summary>

Returns the oracle's current value. **Reverts** if the oracle has never been poked (i.e., no value has been published yet). Use this when your integration can safely revert on a missing value.
</details>

<details>
    <summary><code>tryRead()</code></summary>

Returns a tuple `(bool ok, uint val)` and **never reverts**. `ok` is `true` if a value has been published; `val` is that value, or zero if none exists. Use this when you want to handle a missing value gracefully instead of reverting.
</details>

<details>
    <summary><code>readWithAge()</code></summary>

Returns `(uint val, uint age)`, where `age` is the Unix timestamp of the last update. **Reverts** if the oracle has never been poked.
</details>

<details>
    <summary><code>tryReadWithAge()</code></summary>

Returns `(bool ok, uint val, uint age)` and **never reverts**. Combines the non-reverting behavior of `tryRead()` with the freshness data from `readWithAge()`.
</details>

## Example Consumer Contract

The example below shows a minimal contract that consumes a Proof of Asset Router through the `IChronicleVAO_Reader` interface. It has no protections beyond a freshness check and should only be used for **learning purposes**.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {IChronicleVAO_Reader} from "./IChronicleVAO_Reader.sol";

// This contract has ZERO protections beyond a freshness check, never use for anything other than learning!
contract VAOConsumer {
    IChronicleVAO_Reader public immutable vao;
    uint public maxAge;

    constructor(address vaoRouter, uint _maxAge) {
        vao = IChronicleVAO_Reader(vaoRouter);
        maxAge = _maxAge;
    }

  
    function read() external view returns (uint val) {
        return vao.read();
    }

    function tryRead() external view returns (bool ok, uint val) {
        return vao.tryRead();
    }

    function readWithAge() external view returns (uint val, uint age) {
        (val, age) = vao.readWithAge();
        require(block.timestamp - age <= maxAge, "value is stale");
    }

    function tryReadWithAge() external view returns (bool ok, uint val, uint age) {
        (ok, val, age) = vao.tryReadWithAge();
        if (ok && block.timestamp - age > maxAge) {
            ok = false;
        }
    }
}
```

`vaoRouter` should be set to the address of the [Router](../../Products/VerifiedAssetOracle/integratingPOAs/routers.md) associated with the Proof of Asset oracle you want to integrate. You can find the Router address on the corresponding Proof of Asset page via [the dashboard](https://chroniclelabs.org/dashboard/proof-of-asset).

## Integrating a Proof of Asset Oracle

1. **Find the oracle and its Router address.** Browse the [Proof of Asset Dashboard](https://chroniclelabs.org/dashboard/proofofassets) to identify the oracle you want to consume, then locate its [Router](../../Products/VerifiedAssetOracle/integratingPOAs/routers.md) address.

   <img
       src="/img/guides/router.png"
       alt="Router Address"
       width="500"
   />

2. **Get your consuming contract whitelisted.** Proof of Asset oracles are read-protected. Whitelisting happens on the Router, and is permissioned on production networks — fill out the [following form](https://form.typeform.com/to/KvmNbtrw) to request access for your contract address.
3. **Read from the Router** using the interface shown above.

 