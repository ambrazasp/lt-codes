# Lithuanian codes

## Personal & company code validator and generator

_Lietuviškų asmens kodo / įmonės kodo tikrinimo bei generavimo funkcijos_

# Table of Contents

- [Instalation](#instalation)
- [Usage](#usage)
  - [Initialize in project](#initialize)
  - [Personal code](#personal-code)
  - [Company code](#company-code)
- [Errors](#errors)

# Instalation

## Setup

```bash
npm install ambrazasp/lt-codes
yarn add ambrazasp/lt-codes
```

# Usage

## Initialize

```js
import { personalCode, companyCode } from "lt-codes";
```

## Personal code

| Function                 | Description             |
| ------------------------ | ----------------------- |
| `validate(code: string)` | Validates personal code |
| `generate()`             | Generates personal code |

### Example

```js
const code = "39001010000"; // example
const generatedCode = personalCode.generate();
const { valid, isException, error } = personalCode.validate(code);
```

### Response

```json
{
  "valid": true,
  "error": "",
  "isException": true
}
```

## Company code

| Function                 | Description            |
| ------------------------ | ---------------------- |
| `validate(code: string)` | Validates company code |
| `generate()`             | Generates company code |

### Example

```js
const code = "123456789"; // example
const generatedCode = companyCode.generate();
const { valid, isException, error } = companyCode.validate(code);
```

### Response

```json
{
  "valid": true,
  "error": "",
  "isException": false
}
```

# Errors

You can import all error types from `lt-codes` as use as constants.

```js
import { errorTypes } from "lt-codes";
```

| Key                      | Description                         |
| ------------------------ | ----------------------------------- |
| `EMPTY`                  | Code not passed (empty)             |
| `INVALID`                | Do not pass regex checker           |
| `INVALID_CONTROL_NUMBER` | Invalid control number (last digit) |
| `INVALID_DATE`           | Invalid user birth date             |
