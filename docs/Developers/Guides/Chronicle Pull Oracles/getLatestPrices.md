---
sidebar_position: 3
description: Pull Oracle - getLatestPrices
keywords: [pull oracle]
---

# Getting Prices

## `getLatestPrices`

A function to fetch the latest price messages for one or more pairs.

### Usage

:::info
`getLatestPrices` requires that you [authenticate](./authenticate.md#authenticate) with a valid auth token first
:::

```js
import { getLatestPrices } from '@chronicleprotocol/pull-oracle';

const prices = await getLatestPrices([
  { wat: "MKR/USD" },
  { wat: "ETH/USD" }
]);
```

---

### Returns

Returns a promise that provides an array of objects.

```js
[
  {
    wat: string,
    scheme: string,
    bar: number,
    messages: [
      {
        wat: string,
        val: string,
        age: number,
        r: string,
        s: string,
        v: string,
        validator: Address
      }
    ],
    callData: Hex
  }
]
```

### Errors

In the event of an error, the return object will be provided with `error: true` and an [error code](./Types.md#authtokencode).

```js
{
  "error": true,
  "message": "Invalid authorization token: EXPIRED",
  "data": {
    "wat": "ETH/USD",
    "scheme": "ECDSA"
  },
  "code": "EXPIRED"
}
```

---

### Parameters

#### `wats`

- Type: `array`

The list of pairs to fetch.

```js
[{ wat: "ETH/USD" }, ...]
```

#### `wat`
- Type: `string`

A valid [pair](./getPairs).

#### `scheme`

- _Optional_
- Default: `ECDSA`
- Type: [`Scheme`](./Types.md#scheme)
