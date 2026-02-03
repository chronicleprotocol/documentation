---
sidebar_position: 2
description: Reading from Chronicle Oracles on Testnet
keywords: [oracles, read]
---
# Getting Read Access to Chronicle Oracles - Process Explained

:::info
We know how much builders have to juggle when bringing a project to life. To support builders, Chronicle has partnered with several ecosystems to offer **waived-fee access to existing oracles on select chains.**

This currently applies to:

   - **Mantle**

   - **Optimism**

   - **zkSync**

If you're building on any of these chains and need production oracle access, reach out in the 🆘｜support channel—we're here to help.

:::

## Reading from Chronicle Oracles on **Testnet** in 4 Steps

<div style={{textAlign: 'center'}}>
<img
    src="/img/guides/whitelistingProcess.png"
/>
</div>



### 1 Select the chain you want to use.
Chronicle Oracles are live on several chains, with more integrations rolling out regularly. Using the [Dashboard](https://chroniclelabs.org/dashboard/oracles), you can quickly find the available chains.

### 2 Select the Oracle(s) to use and its address
Before reading from an Oracle, the address making the call needs to be whitelisted for that Oracle. To find the Testnet addresses for the Oracles, simply select the `Testnets` tab on the [Dashboard](https://chroniclelabs.org/dashboard/oracles), then select the desired chain.

### 3 Get the address of the SelfKisser for the selected chain
Chronicle Oracles are read protected by a whitelist. On Testnet networks, you can whitelist yourself using the [SelfKisser](https://github.com/chronicleprotocol/self-kisser/blob/main/src/SelfKisser.sol) contract. **Ensure you're using the correct SelfKisser address for each chain.**

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



*If you need to read from multiple Oracles, make sure that you repeat the whitelisting process for each Oracle.*

### 4 Using the SelfKisser, whitelist the address used to read from the oracle
The [ISelfKisser](https://github.com/chronicleprotocol/self-kisser/blob/main/src/ISelfKisser.sol) interface defines 2 function for whitelisting:
-  `function selfKiss(address oracle) external;` - whitelist your own address (msg.sender)
-  ` function selfKiss(address oracle, address who) external;` - specifies a different address to whitelist, such as a smart contract  

In most cases, you'll use the second option to whitelist another address.

Ensure you have sufficient funds for the whitelisting process, as it’s a write operation requiring gas to complete.

On Mainnet, the process is similar, but the whitelisting is permissioned. To get whitelisted, please open a ticket on [Discord](https://discord.com/invite/CjgvJ9EspJ) via the 🆘 ｜ support channel to reach out to the team.