---
sidebar_position: 1
description: How do I get started with Chronicle Protocol?
keywords: [getting started, Chronicle]
---
import CallToActionButton from '@site/src/components/CallToActionButton';

# Getting Started
## How Do I start?

<div>
  <CallToActionButton
    style={{
      display: 'inline-block !important',
    }}
    icon="material-symbols:counter-1"
    color="black"
    target="_blank"
    link="Guides/whitelistAddress"
    text="Explore Chronicle Oracles on Testnet"
  />

{' '}

<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    fontSize: '3em',
  }}
>
  <p>↓</p>
</div>

{' '}

<CallToActionButton
  icon="material-symbols:counter-2"
  color="black"
  target="_blank"
  link="https://chroniclelabs.org/dashboard"
  text="Integrate Chronicle Oracles on Mainnet"
/>

  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      fontSize: '3em',
    }}
  >
    <p>↓</p>
  </div>
</div>

<CallToActionButton
  icon="material-symbols:counter-3"
  color="black"
  target="_blank"
  link="https://forms.gle/EANjn7THKKieSYaF7"
  text="Request a New Oracle/Chain"
/>
Currently, Chronicle Oracles provide real-time data to smart contract applications on ten chains. More ecosystems are coming soon!


To get started, begin testing on the Testnet and, once you're familiar, request access to Chronicle Oracles on Mainnet. **Chronicle contracts use a whitelist for read protection, so any address accessing Oracle data must first be whitelisted. On Testnet, you can self-whitelist using the [SelfKisser](https://github.com/chronicleprotocol/self-kisser) contract.**

If you need an Oracle not yet integrated, feel free to submit a request via [this form](https://forms.gle/EANjn7THKKieSYaF7) or to reach out on [Discord](https://discord.com/invite/CjgvJ9EspJ) through the 🆘｜support channel. 

**Note: Mainnet whitelisting is permissioned, so please contact us to proceed.**

# Developer Resources
To integrate Chronicle Oracles, here are some helpful resources:

- [Chronicle Testnet Addresses](../Developers/testnet.md)
- [Getting Read Access to Contracts](docs/Developers/Guides/whitelistAddress.md): Guide to whitelisting addresses via CAST (Foundry CLI) or Etherscan
- [Consuming Oracle Data](../Developers/tutorials/Remix.md): Tutorial on whitelisting addresses to access Chronicle Oracle data
- [Scaffold-Oracle-Reader](../Developers/tutorials/boilerplate.md): Boilerplate code using Scaffold-ETH2