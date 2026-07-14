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
Currently, Chronicle Oracles provide real-time data to smart contract applications on [several chains](https://chroniclelabs.org/dashboard/data-feeds), with new integrations and supported networks added on a regular basis.


To get started, begin testing on Testnet networks. Once you're familiar, request access to Chronicle Oracles on Mainnet.

 **Chronicle contracts use a whitelist for read protection. Any address that needs to read oracle data must first be whitelisted. On Testnet, you can [self-whitelist](../Developers/Guides/whitelistAddress.md) using the [SelfKisser](https://github.com/chronicleprotocol/self-kisser) contract.**

**Note: Mainnet whitelisting is permissioned, so please [contact the Chronicle team](https://form.typeform.com/to/KvmNbtrw) to proceed.**

To request access to an existing Chronicle oracle on Mainnet, request a new oracle, or discuss a new integration, please submit a request via [this form](https://form.typeform.com/to/KvmNbtrw). A member of the Chronicle team will get in touch with you.

# Developer Resources
To integrate Chronicle Oracles, here are some helpful resources:

- [Chronicle Testnet Addresses](../Developers/testnet.md)
- [Getting Read Access to Contracts](docs/Developers/Guides/whitelistAddress.md): Guide to whitelisting addresses via CAST (Foundry CLI) or Etherscan
- [Consuming Oracle Data](../Developers/tutorials/Remix.md): Tutorial on whitelisting addresses to access Chronicle Oracle data
- [Scaffold-Oracle-Reader](../Developers/tutorials/boilerplate.md): Boilerplate code using Scaffold-ETH2