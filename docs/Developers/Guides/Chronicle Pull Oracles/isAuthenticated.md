# `isAuthenticated`

Indicates whether the library has a currently valid auth token previously cached by the [authenticate](./authenticate.md) function.

# Usage

```js
import { isAuthenticated } from '@chronicleprotocol/pull-oracle';

// token from the cache is verified
const isAuthenticated = isAuthenticated()
```

---

# Returns

`boolean`: whether the cached auth token is _currently_ valid.