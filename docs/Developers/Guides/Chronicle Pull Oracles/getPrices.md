---
sidebar_position: 3
description: Pull Oracle - getPrices
keywords: [pull oracle]
---

# Getting Prices

## `getPrices`

Fetches the latest price messages for one or more pairs on a given blockchain.

### Usage

:::info
`getPrices` requires that you [authenticate](./authenticate.md#authenticate) with a valid auth token first
:::

```ts
import { getPrices } from '@chronicleprotocol/pull-oracle';

const prices = await getPrices([
  { wat: "MKR/USD", blockchain: "ETH" },
  { wat: "ETH/USD", blockchain: "ETH" }
]);
```

### Returns

Returns a promise that provides an array of objects corresponding to the input array of [`wats`](#wats).

```ts
[
  {
    wat: string,
    scheme: Scheme,
    blockchain: Blockchain,
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

### Parameters

#### `wats`
- Type: `array`

The list of pairs to fetch.

```ts
[{ wat: "ETH/USD", blockchain: "ETH" }, ...]
```

#### `wat`
- Type: `string`

A valid [pair](./getPairs.md).

#### `blockchain`
- Type: [`Blockchain`](./Types.md#blockchain)

A blockhain identifier indicating on which chain the messages are going to be verified.

#### `scheme`
- _Optional_
- Default: `ECDSA`
- Type: [`Scheme`](./Types.md#scheme)

The encryption scheme used for price messages

### Errors

In the event of an error, the return object will be provided with `error: true` and an [error code](./Types.md#authtokencode).

```ts
{
  error: true,
  message: "Invalid authorization token: EXPIRED",
  data: {
    wat: "ETH/USD",
    scheme: "ECDSA",
    blockchain: "ETH"
  },
  code: "EXPIRED"
}
```
