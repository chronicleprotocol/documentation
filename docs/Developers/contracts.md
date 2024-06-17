# IChronicle Contract Implementation Example

:::info
You can find an example of our IChronicle.sol interface [here](https://github.com/chronicleprotocol/chronicle-std/blob/ea9afe78a1d33245afcdbcc3f530ee9cbd7cde28/src/IChronicle.sol#L4) . Please see the comments corresponding to each function to better understand the utility it provides. 
:::


# Example Contract

The Example contract is a basic implementation of the [IChronicle interface](https://github.com/chronicleprotocol/chronicle-std/blob/ea9afe78a1d33245afcdbcc3f530ee9cbd7cde28/src/IChronicle.sol#L4).  It demonstrates basic interaction with an oracle interface defined by IChronicle.
The contract has no protections, and should only be used for **learning purposes**. 
## Key Features

<details>
    <summary>1. State Variables:</summary>

    `_val`: Stores the current value from the oracle.

    `_age`: Stores the age of the value.
</details>

<details>
   <summary>2. Immutable Variables:</summary>
  
    `wat`: A public immutable variable set during contract deployment that represents the Oracle's identifier.

</details>

<details>
    <summary>3. Functions:</summary>

**`read()`**:
    Returns the current value of the Oracle stored in `_val`.

**`tryRead()`**:
    Checks if `_val` is non-zero and returns a tuple with a boolean result and the value of `_val`.
    If `_val` is non-zero, it returns `(true, val)`; otherwise, it returns `(false, val)`.

**`readWithAge()`**:
    Retrieves the values of `_val` and `_age`, checks that `_val` is non-zero, and returns a tuple with these two values. If `_val` is zero, the function call will fail, and no values will be returned.

**`tryReadWithAge()`**:
     Checks if `_val` is non-zero and returns a tuple indicating the result of this check along with the values of `_val` and `_age` (or zeros if `_val` is zero). 

**`poke()`**:
    Allows an external caller to update the values of the state variables `_val` and `_age`. This function can be used to set or change the Oracle's value and its age.

</details>

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import {IChronicle} from "chronicle-std/IChronicle.sol";

// This contract has ZERO protections, never use for anything other than learning!
contract Example is IChronicle {
    uint private _val;
    uint32 private _age;

    /// @inheritdoc IChronicle
    /// The Oracle identifier; mostly asset pairs, e.g. ETH/USD
    bytes32 public immutable wat;

    constructor(bytes32 _wat) {
          wat = _wat;        
    }

    /// @inheritdoc IChronicle
    function read() external view returns (uint) {
          return _val;
    }

    /// @inheritdoc IChronicle
    function tryRead() external view returns (bool, uint) {
        uint val = _val;
        return (val != 0, val);
    }

    /// @inheritdoc IChronicle
    /// @return value The oracle's current value.
    /// @return age The value's age.
    function readWithAge() external view returns (uint, uint) {
        uint val = _val;
        uint age = _age;
        require(val != 0);
        return (val, age);
    }

    /// @inheritdoc IChronicle
    function tryReadWithAge() external view returns (bool, uint, uint)
    {
        uint val = _val;
        uint age = _age;
        return val != 0 ? (true, val, age) : (false, 0, 0);
    }

    function poke(uint val, uint32 age) external {
        _val = val;
        _age = age;
    }
}

```
