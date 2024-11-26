---
sidebar_position: 4
description: Pull Oracle - Types
keywords: [pull oracle]
---
# Types & Constants

## Types

### `APIResponseError`

Occurs when the API successfully receives a response from the server, but the response is an error.

```typescript
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

```typescript
type AuthTokenMessage {
  description: string;
  version: number;
  validFrom: number;
  validTo: number;
  signer: Address;
  nonce: number;
}
```

- `description`: the description of the token
- `version`: the authentication API version number
- `validFrom`: unix epoch timestamp starting from then the token is valid
- `validTo`: unix epoch timestamp until when the auth token is valid
- `signer`: the address of the signer
- `nonce`: unique number


---

### `PairData`

The data structure returned from [`getPairs`](./getPairs.md)

```typescript
type PairData = {
  scheme: Scheme;
  pairs: Record<string, { bar: number; validators: Hex[] }>;
}
```

---

### `PriceData`

The data structure returned from [`getPrices`](./getPrices.md)

```typescript
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

```typescript
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

```typescript
type PriceRequest {
  wat: string;
  scheme?: Scheme;
}
```

---

### `ValidatorData`

The data structure returned from [`getPairs`](./getPairs.md)

```typescript
type ValidatorData {
  scheme: Scheme;
  validators: Validator[];
}
```

---

# Constants

### `Scheme`

Encryption scheme for price messages. Currently there is only one option, however more options may be offered in the future.

```typescript
enum Scheme {
  ECDSA
}
```

- `ECDSA`: Price messages are signed with [Elliptic Curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) encryption.

---

### `AuthTokenCodes`

Response codes for auth token verification.

```typescript
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

```typescript
enum APIErrorCode {
  FAILED_REQUEST
}
```

- `FAILED_REQUEST`: The API request failed to receive a valid response from the server
