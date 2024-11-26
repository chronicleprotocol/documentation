---
sidebar_position: 1
description: Developer documentation for Chronicle's Pull Oracle
keywords: [pull oracle]
---
# Getting Started

Chronicle's pull oracles offer the absolute freshest pricing information on-demand. We provide an [SDK](https://npmjs.com/) for simple integrations. Authentication is handled via tokens based on the [Ethereum Signed Messages](https://eips.ethereum.org/EIPS/eip-191) protocol.

:::info
Your public signing key must be allow-listed on our servers before you can generate tokens.
:::

Generating authentication tokens on the server:
```js
import { signAuthToken } from '@chronicleprotocol/pull-oracle';

const { token, message } = signAuthToken({
  // private key is 0x prefixed 32 byte hex string
  privateKey: "0xabc..."
})
```

:::warning
We highly recommend following best practices for private key generation and storage. Use a unique private key for creating auth tokens. DO NOT re-use this private key for any other purpose!
:::

Once the auth token is generated on the server, pass it to the client and register it with the `authenticate` method of the `pull-oracle` module for automatic inclusion in future requests.

Authenticating a user session on the client and fetching prices:
```js
import { authenticate, getPrices } from '@chronicleprotocol/pull-oracle';

// token is received from the server
// `authenticate` caches the token in memory so it only needs to be called once per session
authenticate(token);

const prices = await getPrices([
  { wat: "MKR/USD" },
  { wat: "ETH/USD" }
]);
```
