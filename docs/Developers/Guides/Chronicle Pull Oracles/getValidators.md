---
sidebar_position: 5
description: Pull Oracle - getValidators
keywords: [pull oracle]
---

# Getting Validators

## `getValidators`

Returns the validators supported on a given [`Blockchain`](./Types.md#blockchain), and optionally with a given [`Scheme`](./Types.md#scheme).

### Usage

```ts
import { getValidators } from '@chronicleprotocol/pull-oracle';

const validators = await getValidators({ blockchain });
```

---

### Returns

Returns a promise that provides the [`Blockchain`](./Types.md#blockchain), [`Scheme`](./Types.md#scheme), and a [`Validators`](./Types.md#validators) array of addresses.

```ts
interface ValidatorData {
  blockchain: Blockchain;
  scheme: Scheme;
  validators: Address[];
}
```

#### Example

```ts
{
  blockchain: "ETH",
  scheme: "ECDSA",
  validators: [
    "0xabc123...",
    "0xabc123...",
    "0xabc123...",
    ...
  ]
}
```

### Parameters

#### `blockchain`
- Type: [`Blockchain`](./Types.md#blockchain)

A blockhain identifier indicating on which chain the validators are going to be used.

#### `scheme`
- _Optional_
- Type: [`Scheme`](./Types.md#scheme)
- Default: `ECDSA`

The encryption scheme used for price messages of these validators

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
