---
sidebar_position: 2
description: Pull Oracle - authenticate
keywords: [pull oracle]
---

# Authentication

## `signAuthToken`

A server-side function which creates an auth token to be used to [authenticate](#authenticate) [getLatestPrices](./getLatestPrices.md) requests.

### Usage

Generating authentication tokens on the server:
```js
import { signAuthToken } from '@chronicleprotocol/pull-oracle';

const { token, message } = signAuthToken({
  // private key is 0x prefixed 32 byte hex string
  privateKey: "0xabc..."
})
```

### Returns

```js
{ 
    token: "...", 
    message: {
        description: "Chronicle API token",
        version: 1,
        validFrom: 1730992419,
        validTo: 1730994251,
        signer: "0x...",
        nonce: 1077701,
    } 
}
```

- `token`: the authentication token
- `message`: the authentication token details
    - `description`: the description of the token
    - `version`: the authentication API version number
    - `validFrom`: unix timestamp starting from then the token is valid
    - `validTo`: unix timestamp until when the auth token is valid
    - `signer`: the address of the signer
    - `nonce`: unique number

---

## `authenticate`

A client-side function which validates and caches the auth token which was received from the server for future use with [getLatestPrices](./getLatestPrices.md).

### Usage

```js
import { authenticate } from '@chronicleprotocol/pull-oracle';

// token is received from the server
// `authenticate` caches the token in memory so it only needs to be called once per session
authenticate(token);
```

### Returns

- `boolean`: whether the provided auth token is _currently_ valid.

---

# `isAuthenticated`

A function to check whether the library has a currently valid auth token previously cached by the [authenticate](#authenticate) function.

### Usage

```js
import { isAuthenticated } from '@chronicleprotocol/pull-oracle';

// token from the cache is verified
const isAuthenticated = isAuthenticated()
```

### Returns

- `boolean`: whether the cached auth token is _currently_ valid.