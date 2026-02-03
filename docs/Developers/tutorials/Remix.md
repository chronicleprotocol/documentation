---
sidebar_position: 1
description: Consuming Oracle Data using Remix IDE.
keywords: [Remix, read access]
---
# Consuming Oracle Data

import Button from '@site/src/components/Button';

Chronicle oracles are read-protected by a whitelist, meaning you won't be able to read them on-chain without your address being added to the whitelist.

:::info

On Testnet, the [SelfKisser contract](https://github.com/chronicleprotocol/self-kisser) allows users to whitelist themselves, whimsically termed 'kiss' themselves.

On Mainnet, to get access to production Oracles, please open a ticket on [Discord](https://discord.com/invite/CjgvJ9EspJ) via the 🆘 ｜ support channel.

:::

| Testnet Network               | SelfKisser Address                                                                                                                           |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Ethereum Sepolia              | [0x9eE458DefDc50409DbF153515DA54Ff5B744e533](https://sepolia.etherscan.io/address/0x9eE458DefDc50409DbF153515DA54Ff5B744e533#code)           |
| Base Sepolia                  | [0x7D62Def8478c21B82aA7fcbc2E7f8B404Ac6c565](https://sepolia.basescan.org/address/0x7D62Def8478c21B82aA7fcbc2E7f8B404Ac6c565#code)           |
| Arbitrum Sepolia              | [0x4BAe02bED4b49DE3344878b0B0B2d6A58D47ddC5](https://sepolia.arbiscan.io/address/0x4BAe02bED4b49DE3344878b0B0B2d6A58D47ddC5#code)            |
| Gnosis Mainnet                | [0xE24c5cd952193eDA44BE71c19b35a9CB83cd1E24](https://gnosisscan.io/address/0xE24c5cd952193eDA44BE71c19b35a9CB83cd1E24#code)                  |
| Mantle Testnet                | [0x165dC3e99E3491b8914CF65b4CBC4E98755da53e](https://explorer.sepolia.mantle.xyz/address/0x165dC3e99E3491b8914CF65b4CBC4E98755da53e#code)    |
| Scroll Sepolia                | [0xCE26246F859512CD22faE6037fb0371960B68a0C](https://sepolia.scrollscan.com/address/0xCE26246F859512CD22faE6037fb0371960B68a0C#code)         |
| zkSync Sepolia                | [0x8253Bb923473E84D0C0013F3742D2F4E49D9f4eb](https://sepolia.explorer.zksync.io/address/0x8253Bb923473E84D0C0013F3742D2F4E49D9f4eb#contract) |
| Optimism Sepolia              | [0x84c2dD149026327f95A7947d788Dff49D8B24E26](https://sepolia-optimism.etherscan.io/address/0x84c2dD149026327f95A7947d788Dff49D8B24E26#code)  |
| Berachain Bepolia              | [0x584914a893aBefB95abC02A5604338c0390F328B](https://bepolia.beratrail.io/address/0x584914a893aBefB95abC02A5604338c0390F328B)            |
| Superseed Sepolia             | [0x174d08990e95aa7C025cA7B44e41768c15616041](https://sepolia-explorer.superseed.xyz/address/0x174d08990e95aa7C025cA7B44e41768c15616041#code) |
| Plume Testnet            | [0xd6de00f82738c966c88F55017e8aCcA192AF42a1](https://testnet-explorer.plumenetwork.xyz/address/0xd6de00f82738c966c88F55017e8aCcA192AF42a1) |
| Monad Testnet           | [0xFdDB9A201d8E0E7fF6Fe835cfa0105efe6275EA1](https://monad-testnet.socialscan.io/address/0xFdDB9A201d8E0E7fF6Fe835cfa0105efe6275EA1) |
| Unichain Sepolia        | [0x7AB42CC558fc92EC990B22E663E5a7bc5879fc9f](https://unichain-sepolia.blockscout.com/address/0x7AB42CC558fc92EC990B22E663E5a7bc5879fc9f) |
| Avalanche Fuji Testnet|	[0x371A53bB4203Ad5D7e60e220BaC1876FF3Ddda5B](https://testnet.snowtrace.io/address/0x371A53bB4203Ad5D7e60e220BaC1876FF3Ddda5B) |
|Linea Testnet|[0xBa1386329Dea3850Aedc07D387014494619F615D](https://sepolia.lineascan.build/address/0xBa1386329Dea3850Aedc07D387014494619F615D#code) |
|Plasma Testnet|[0xB3bf22c657a2d1EDEf447CA8D863C10989e047B0](https://testnet.plasmascan.to/address/0xB3bf22c657a2d1EDEf447CA8D863C10989e047B0) |


### Consuming Oracle Data (Remix)

An example contract named `OracleReader.sol` allows you to consume Oracle data and can be quickly deployed on [Remix](https://remix.ethereum.org/). Remix is a web-based integrated development environment (IDE) for creating, running, and debugging smart contracts directly in your browser. 

:::info
- In the table above you can find the address of the SelfKisser on different chains.
- Addresses in this contract are hardcoded for the **Sepolia testnet**.
- For other supported networks, please check the [Dashboard](https://chroniclelabs.org/dashboard), under the `Testnets` tab. 
:::

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

/**
 * @title OracleReader
 * @notice A simple contract to read from Chronicle oracles
 * @dev To see the full repository, visit https://github.com/chronicleprotocol/OracleReader-Example.
 * @dev Addresses in this contract are hardcoded for the Sepolia testnet.
 * For other supported networks, check the https://chroniclelabs.org/dashboard/oracles.
 */
contract OracleReader {
    /**
    * @notice The Chronicle oracle to read from.
    * Chronicle_ETH_USD_3:0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603
    * Network: Sepolia
    */

    IChronicle public chronicle = IChronicle(address(0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603));

    /** 
    * @notice The SelfKisser granting access to Chronicle oracles.
    * SelfKisser_2:0x9eE458DefDc50409DbF153515DA54Ff5B744e533
    * Network: Sepolia
    */
    ISelfKisser public selfKisser = ISelfKisser(address(0x9eE458DefDc50409DbF153515DA54Ff5B744e533));

    constructor() {
        // Note to add address(this) to chronicle oracle's whitelist.
        // This allows the contract to read from the chronicle oracle.
        selfKisser.selfKiss(address(chronicle));
    }

    /** 
    * @notice Function to read the latest data from the Chronicle oracle.
    * @return val The current value returned by the oracle.
    * @return age The timestamp of the last update from the oracle.
    */
    function read() external view returns (uint256 val, uint256 age) {
        (val, age) = chronicle.readWithAge();
    }
}

// Copied from [chronicle-std](https://github.com/chronicleprotocol/chronicle-std/blob/main/src/IChronicle.sol).
interface IChronicle {
    /** 
    * @notice Returns the oracle's current value.
    * @dev Reverts if no value set.
    * @return value The oracle's current value.
    */
    function read() external view returns (uint256 value);

    /** 
    * @notice Returns the oracle's current value and its age.
    * @dev Reverts if no value set.
    * @return value The oracle's current value using 18 decimals places.
    * @return age The value's age as a Unix Timestamp .
    * */
    function readWithAge() external view returns (uint256 value, uint256 age);
}

// Copied from [self-kisser](https://github.com/chronicleprotocol/self-kisser/blob/main/src/ISelfKisser.sol).
interface ISelfKisser {
    /// @notice Kisses caller on oracle `oracle`.
    function selfKiss(address oracle) external;
}
```
<Button label="Try on Remix" link="https://remix.ethereum.org/#url=https://github.com/chronicleprotocol/chronicle-foundry-template/blob/main/src/OracleReader.sol&lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.26+commit.8a97fa7a.js" size="lg"/>

Ensure your environment is set to **Remix VM - Sepolia Fork** (since this example is hardcoded for Sepolia).

import deploy from '../../../static/img/remix_deploy.png'
import result from '../../../static/img/remix_result.png'

<div class="text--center"> 
<img src={deploy} alt="remix deploy image" style={{width: 300}} />
</div>
<!-- ![Example banner](../../../static/img/remix_deploy.png) -->

Deploy the `OracleReader.sol` contract and you should see the following:
- **chronicle**: returns ` 0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603`, which is the address of the `Chronicle_ETH_USD_3` Oracle
- **read**: returns the current price (3533995000000000000000) and its age (1718091840) at the moment of calling.

Note: the price uses 18 decimals, meaning that the actual price is 3533.995. Age uses Unix Timestamp, meaning that 1718091840 corresponds to 'Tue Jun 11 2024 07:44:00 GMT'.

- **selfKisser**: returns the address of the SelfKisser `0x9eE458DefDc50409DbF153515DA54Ff5B744e533`

<div style={{textAlign: 'center'}}>
<img
    src="/img/Developers/Tutorials/OracleReader.png"
    alt="Example of Connect to Web3 button"
    width="300"
/>
</div>
