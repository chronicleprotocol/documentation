# Contract Example


The following is an example of our [IChronicle.sol](https://github.com/chronicleprotocol/chronicle-std/blob/ea9afe78a1d33245afcdbcc3f530ee9cbd7cde28/src/IChronicle.sol) contract, please see the comments under each function to better understand the utility each function provides. 

```js
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

@title IChronicle
@notice Interface for Chronicle Protocol's oracle products
*/

interface IChronicle {
/// @notice Returns the oracle's identifier.
/// @return wat The oracle's identifier.

function wat() external view returns (bytes32 wat);
/// @notice Returns the oracle's current value.
/// @dev Reverts if no value set.
/// @return value The oracle's current value.

function read() external view returns (uint value);
/// @notice Returns the oracle's current value and its age.
/// @dev Reverts if no value set.
/// @return value The oracle's current value.
/// @return age The value's age.

function readWithAge() external view returns (uint value, uint age);
/// @notice Returns the oracle's current value.
/// @return isValid True if value exists, false otherwise.
/// @return value The oracle's current value if it exists, zero otherwise.

function tryRead() external view returns (bool isValid, uint value);
/// @notice Returns the oracle's current value and its age.
/// @return isValid True if value exists, false otherwise.
/// @return value The oracle's current value if it exists, zero otherwise.
/// @return age The value's age if value exists, zero otherwise.

function tryReadWithAge()
external
view
returns (bool isValid, uint value, uint age);
}
```


