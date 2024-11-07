---
sidebar_position: 5
description: Pull Oracle - Types
keywords: [pull oracle]
---

# Types

## Constants

### `Scheme`

Encryption scheme for price messages. Currently there is only one option, however more options may be offered in the future.

```js
enum Scheme {
  ECDSA
}
```

- `ECDSA`: Price messages are signed with [Elliptic Curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) encryption.

---

### `AuthTokenCodes`

Response codes for auth token verification.

```js
enum AuthTokenCode {
  VALID,
  EXPIRED,
  NOT_YET_VALID,
  INVALID_SIGNATURE,
  INVALID_VERSION,
  MALFORMED_TOKEN,
  SIGNER_NOT_AUTHORIZED
}
```

- `VALID`: Auth token is valid
- `EXPIRED`: Auth token end time has passed
- `NOT_YET_VALID`: Auth token start time has not yet occurred
- `INVALID_SIGNATURE`: The auth token `signer` field and recovered signature do not match
- `INVALID_VERSION`: The auth token is using an unrecognized version
- `MALFORMED_TOKEN`: The auth token has some other error not covered by the other codes
- `SIGNER_NOT_AUTHORIZED`: The token signer is not authorized by Chronicle
