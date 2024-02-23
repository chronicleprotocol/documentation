# Boilerplate

## Scaffold Eth 2 + Chronicle

Please refer to the following github repo to take advantage of the boiler plate we have created in conjuction with scaffold eth 2. 
link: https://github.com/chronicleprotocol/scaffold-oracle-reader

The following repo has a cooked in OracleReader contract. 
Follow the path to view the contract 
- packages
    - hardhat
        - contracts
            - OracleReader.sol

    Below is an example of the contract cooked into the repo

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

/**
 * @title OracleReader
 *
 * @notice A simple contract to read from Chronicle oracles
 *
 * @dev Addresses in this contract are hardcoded for the Sepolia testnet.
 *      For other supported networks, see https://docs.chroniclelabs.org/.
 */
contract OracleReader {
    /// @notice The Chronicle ETH/USD oracle.
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
    /// @notice Returns the oracle's current value.
    /// @dev Reverts if no value set.
    /// @return value The oracle's current value.
    function read() external view returns (uint256 value);
}

// Copied from [self-kisser](https://github.com/chronicleprotocol/self-kisser/blob/main/src/ISelfKisser.sol).
interface ISelfKisser {
    /// @notice Kisses caller on oracle `oracle`.
    function selfKiss(address oracle) external;
}
```

The .env.example file also includes some boiler plate code to get you up and running sooner than later 

```
# Template for Hardhat environment variables.

# To use this template, copy this file, rename it .env, and fill in the values.

# If not set, we provide default values (check `hardhat.config.ts`) so developers can start prototyping out of the box,
# but we recommend getting your own API Keys for Production Apps.

# The Chronicle ETH/USD oracle on Sepolia.

CHRONICLE_ORACLE=0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603

# The Chronicle SelfKisser contract on Sepolia.
SELF_KISSER=0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d

# To access the values stored in this .env file you can use: process.env.VARIABLENAME
ALCHEMY_API_KEY=
DEPLOYER_PRIVATE_KEY=
ETHERSCAN_API_KEY=
```

The ETH/USD oracle and self-kisser addresses have been added to the .env.example file.

If you would run a sepolia fork and deploy the contract now via 

```yarn deploy --tags OracleReader```

:::tip
Please note as the project currently stands, you must switch to the Sepolia network using hardhat.

:::

