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

A valid [pair](#getpairs).

#### `scheme`

- _Optional_
- Default: `ECDSA`
- Type: [`Scheme`](./Types.md#scheme)

---

## `getPairs`

Provides a list of valid pairs that prices are available for.

```js
import { getPairs } from '@chronicleprotocol/pull-oracle';

const pairs = await getPairs({ scheme: 'ECDSA' });
```

### Parameters

#### `options`

- Type: `object`

The object of options to fetch pairs.

```js
{ scheme: "ECDSA" }
```

#### `scheme`
- Type: [`Scheme`](./Types.md#scheme)

---

### Returns

The keys of the `pairs` field are valid [`wat`](#wat) values.

```js
{
  "data": {
    "scheme": "ECDSA",
    "pairs": {
      "ETHX/ETH": {
        "bar": 13,
        "validators": [
          "0x130431b4560Cd1d74A990AE86C337a33171FF3c6",
          "0x15e6e59F95000e5039CBFF5f23FDa9c03d971F66",
          ...
        ]
      },
      ...
    }
  }
}
```
