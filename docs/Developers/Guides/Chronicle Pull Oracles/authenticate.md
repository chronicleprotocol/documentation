# `authenticate`

Validates and caches the auth token for future use with [`getLatestPrices`](./getLatestPrices.md).

# Usage

```js
import { authenticate } from '@chronicleprotocol/pull-oracle';

// token is received from the server
// `authenticate` caches the token in memory so it only needs to be called once per session
authenticate(token);
```

---

# Returns

`boolean`: whether the provided auth token is _currently_ valid.