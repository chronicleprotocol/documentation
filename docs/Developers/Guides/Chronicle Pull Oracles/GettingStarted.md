---
sidebar_position: 1
description: Developer documentation for Chronicle's Pull Oracle
keywords: [pull oracle]
---
# Getting started

Chronicle's pull oracles offer the absolute freshest pricing information on-demand. We provide an [npm module](https://npmjs.com/) interface to simplify use.

Authentication is handled via tokens based on the [Ethereum Signed Messages](https://eips.ethereum.org/EIPS/eip-191) protocol. Once we have allow-listed your public signing address on our servers, you will be able to generate auth tokens to retrieve oracle prices.

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

Once the auth token is generated on the server, pass it to the client side and register it with the `authenticate` methods of the `pull-oracle` module for automatic inclusion in future requests

```js
import { authenticate } from '@chronicleprotocol/pull-oracle';

// token is received from server. `authenticate` caches the token in memory so it only needs to be called once per session
authenticate(token);

const prices = await getLatestPrices([
  { wat: "MKR/USD" },
  { wat: "ETH/USD" }
]);
```
