---
sidebar_position: 6
description: Pull Oracle - Types
keywords: [pull oracle]
---
# Types & Constants

## Types

### `APIResponseError`

Occurs when there is an error processing the request.

```ts
interface APIResponseError {
  error: true;
  data?: any;
  message: string;
  code: AuthTokenCode | APIErrorCode;
}
```

---

### `AuthTokenMessage`

The message returned from [`signAuthToken`](./authenticate.md#signauthtoken).

```ts
type AuthTokenMessage {
  description: string;
  version: number;
  validFrom: number;
  validTo: number;
  signer: Address;
  nonce: number;
}
```

- `description`: the description of the token, e.g. "Chronicle API token"
- `version`: the authentication API version number
- `validFrom`: unix epoch timestamp starting from then the token is valid, inclusive
- `validTo`: unix epoch timestamp until when the auth token is valid, inclusive
- `signer`: the address of the signer
- `nonce`: unique number


---

### `Blockchain`

A blockchain identifier of either the `shortName` or `chainId` per [chainid.network](https://chainid.network/chains.json).

```ts
type Blockchain = string | number;
```

---

### `PairData`

The data structure returned from [`getPairs`](./getPairs.md)

```ts
type PairData = {
  scheme: Scheme;
  blockchain: Blockchain;
  pairs: Pairs;
}
```

---

### `Pairs`

The data structure containing pairs.

```ts
type Pairs = Record<string, { bar: number; validators: Address[] }>;
```

Example:
```ts
{
  "BTC/USD": {
    bar: 13,
    validators: [
      "0xabc123...",
      "0xabc123...",
      "0xabc123...",
      ...
    ]
  }
}
```

---

### `PriceData`

The data structure returned from [`getPrices`](./getPrices.md)

```ts
type PriceData = {
  wat: string;
  scheme: Scheme;
  bar: number;
  messages: PriceMessage[];
}
```

---

### `PriceMessage`

The data structure of an individual price message. A batch of price messages makes up a single oracle price.

```ts
type PriceMessage {
  wat: string;
  val: string;
  age: number;
  r: string;
  s: string;
  v: string;
}
```

---

### `PriceRequest`

The data structure of the argument passed to [`getPrices`](./getPrices.md)

```ts
type PriceRequest {
  wat: string;
  scheme?: Scheme;
}
```

---

### `ValidatorData`

The data structure returned from [`getPairs`](./getPairs.md)

```ts
type ValidatorData {
  scheme: Scheme;
  validators: Validator[];
}
```

---

## Constants

:::info
Note: all enum values are identical to their keys, but only keys are shown here for simplicity
:::


### `Scheme`

Encryption scheme for price messages. Currently there is only one option, however more options may be offered in the future.

```ts
enum Scheme {
  ECDSA
}
```
- `ECDSA`: Price messages are signed with [Elliptic Curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) encryption.

---

### `AuthTokenCodes`

Response codes for auth token verification.

```ts
enum AuthTokenCode {
  VALID,
  EXPIRED,
  NOT_YET_VALID,
  DURATION_EXCEEDS_MAX,
  INVALID_SIGNATURE,
  INVALID_VERSION,
  MALFORMED_TOKEN,
  SIGNER_NOT_AUTHORIZED
}
```

- `VALID`: Auth token is valid
- `EXPIRED`: Auth token end time has passed
- `NOT_YET_VALID`: Auth token start time has not yet occurred
- `DURATION_EXCEEDS_MAX`: The period between auth token start and end times is too long
- `INVALID_SIGNATURE`: The auth token `signer` field and recovered signature do not match
- `INVALID_VERSION`: The auth token is using an unrecognized version
- `MALFORMED_TOKEN`: The auth token has some other error not covered by the other codes
- `SIGNER_NOT_AUTHORIZED`: The token signer is not authorized by Chronicle

---

### `APIErrorCode`

Response codes for API errors.

```ts
enum APIErrorCode {
  FAILED_REQUEST,
  SCHEME_NOT_SUPPORTED,
  BLOCKCHAIN_NOT_SUPPORTED,
  PAIR_NOT_SUPPORTED,
  MISSING_REQUIRED_PARAMETER,
  METHOD_NOT_ALLOWED,
  INVALID_REQUEST_DATA,
}
```

- `FAILED_REQUEST`: The API request failed to receive a valid response from the server
- `SCHEME_NOT_SUPPORTED`: The API request was made for a [Scheme](#scheme) that is not supported
- `BLOCKCHAIN_NOT_SUPPORTED`: The API request was made for a [Blockchain](#blockchain) that is not supported
- `PAIR_NOT_SUPPORTED`: The API request was made for a [Pair](#pair) that is not supported
- `MISSING_REQUIRED_PARAMETER`: The API request was missing a required parameter and was therefore unable to complete
- `METHOD_NOT_ALLOWED`: The HTTP method used to access the API is not allowed
- `INVALID_REQUEST_DATA`: The request data was not parseable or inadequate to complete the request

