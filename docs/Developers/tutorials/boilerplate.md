# Boilerplate

## Scaffold-ETH2 + Chronicle

<div style={{textAlign: 'center'}}>
<img
    src="/img/Developers/Boilerplate/OracleReader.png"
    alt="Oracle Reader"
/>
</div>

:::info
Please be aware that, as the project currently stands, you should use **Foundry** in terms of programming environments, and deploy your contracts to the **Sepolia** network.
:::

Please refer to the following [GitHub Repo](https://github.com/chronicleprotocol/scaffold-oracle-reader) to take advantage of the boilerplate we have created in conjunction with [Scaffold-ETH2](https://scaffoldeth.io/). 


To find our `OracleReader.sol` contract, follow the following path: 

```
- packages
    - foundry
        - contracts
            - OracleReader.sol
```
    Below is an example of the contract integrated into the repo:

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

/**
 * @title OracleReader
 * @notice A simple contract to read from Chronicle oracles
 * @dev Addresses in this contract are hardcoded for the Sepolia testnet.
 * For other supported networks, check https://chroniclelabs.org/dashboard/oracles.
 */
contract OracleReader {
    ///  @notice The Chronicle ETH/USD oracle.
    IChronicle public immutable chronicle;

    /// @notice The SelfKisser granting access to Chronicle oracles.
    ISelfKisser public immutable selfKisser;

    constructor(address chronicle_, address selfKisser_) {
        chronicle = IChronicle(chronicle_);
        selfKisser = ISelfKisser(selfKisser_);

        // Note to add address(this) to chronicle oracle's whitelist.
        // This allows the contract to read from the chronicle oracle.
        selfKisser.selfKiss(address(chronicle));
    }

    /// @notice Function to read the latest data from the Chronicle oracle.
    /// @return val The current value returned by the oracle.
    function read() external view returns (uint256 val) {
        return chronicle.read();
    }
}

// Copied from [chronicle-std](https://github.com/chronicleprotocol/chronicle-std/blob/main/src/IChronicle.sol).
interface IChronicle {
    /**
     * @notice Returns the oracle's current value.
     * @dev Reverts if no value set.
     * @return value The oracle's current value.
     * /
    function read() external view returns (uint256 value);
}

// Copied from [self-kisser](https://github.com/chronicleprotocol/self-kisser/blob/main/src/ISelfKisser.sol).
interface ISelfKisser {
    /// @notice Kisses caller on oracle `oracle`.
    function selfKiss(address oracle) external;
}
```

Add your environment variables in the `.env.example` file and rename it to `.env`:
```
- packages
    - foundry
         - .env.example
```

```js
/* 
* Template for environment variables.
* To use this template, copy this file, rename it .env, and fill in the values.
* The Chronicle ETH/USD Oracle on Sepolia.
*/

DEPLOYER_PRIVATE_KEY=
ETHERSCAN_API_KEY=
ALCHEMY_API_KEY=

# The Chronicle ETH/USD Oracle on Sepolia.
CHRONICLE_ORACLE=0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603
# The Chronicle SelfKisser contract on Sepolia.
SELF_KISSER=0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d
```


