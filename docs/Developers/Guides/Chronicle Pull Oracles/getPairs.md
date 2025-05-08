---
sidebar_position: 4
description: Pull Oracle - getPairs
keywords: [pull oracle]
---

# Getting Pairs

## `getPairs`

Returns the pairs supported on a given [`Blockchain`](./Types.md#blockchain), and optionally with a given [`Scheme`](./Types.md#scheme).

### Usage

```ts
import { getPairs } from '@chronicleprotocol/pull-oracle';

const pairs = await getPairs({ blockchain });
```

---

### Returns

Returns a promise that provides the [`Blockchain`](./Types.md#blockchain), [`Scheme`](./Types.md#scheme), and a [`Pairs`](./Types.md#pairs) object.

```ts
interface PairData {
  blockchain: Blockchain,
  scheme: Scheme,
  pairs: {
    [pair: string]: {
      bar: number,
      validators: Address[]
    },
    ...
  }
}
```

#### Example

```ts
{
  blockchain: "ETH",
  scheme: "ECDSA",
  pairs: {
    "BTC/USD": {
      bar: 13,
      validators: [
        "0xabc123...",
        "0xabc123...",
        "0xabc123...",
        ...
      ]
    },
    "ETH/USD": {
      bar: 13,
      validators: [
        "0xabc123...",
        "0xabc123...",
        "0xabc123...",
        ...
      ]
    },
    ...
  }
}
```

### Parameters

#### `blockchain`
- Type: [`Blockchain`](./Types.md#blockchain)

A blockhain identifier indicating on which chain the pairs are going to be used.

#### `scheme`
- _Optional_
- Type: [`Scheme`](./Types.md#scheme)
- Default: `ECDSA`

The encryption scheme used for price messages of these pairs

### Errors

In the event of an error, the return object will be an [`APIResponseError`](./Types.md#apiresponseerror).

#### Example
```ts
{
  error: true,
  message: `VADER blockchain not supported`,
  data: {
    scheme: "ECDSA",
    blockchain: "VADER"
  },
  code: APIErrorCode.BLOCKCHAIN_NOT_SUPPORTED
}
```
