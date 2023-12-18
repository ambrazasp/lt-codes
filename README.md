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
import { personalCode, companyCode } from 'lt-codes';
```

## Personal code

| Function                              | Description             |
| ------------------------------------- | ----------------------- |
| `personalCode.validate(code: string)` | Validates personal code |
| `personalCode.generate()`             | Generates personal code |

### Example

```js
const code = '39001010000'; // example
const generatedCode = personalCode.generate();
const { isValid, isException, error } = personalCode.validate(code);
```

### Response (example)

```json
{
  "isValid": true,
  "error": "",
  "isException": true
}
```

### Using Typescript

```ts
import { ValidationResult } from 'lt-codes';
const result: ValidationResult = personalCode.validate(code);
```

## Company code

| Function                             | Description            |
| ------------------------------------ | ---------------------- |
| `companyCode.validate(code: string)` | Validates company code |
| `companyCode.generate()`             | Generates company code |

### Example

```js
const code = '123456789'; // example
const generatedCode = companyCode.generate();
const { isValid, isException, error } = companyCode.validate(code);
```

### Response (example)

```json
{
  "isValid": true,
  "error": "",
  "isException": false
}
```

### Using Typescript

```ts
import { ValidationResult } from 'lt-codes';
const result: ValidationResult = companyCode.validate(code);
```

# Errors

You can import all error types from `lt-codes` as use as constants.

```js
import { ValidationError } from 'lt-codes';
```

`error` property returned by `validate()` can be empty or one of the following values:

| Value                                    | Description                         |
| ---------------------------------------- | ----------------------------------- |
| `ValidationError.EMPTY`                  | Code not passed (empty)             |
| `ValidationError.INVALID`                | Do not pass regex checker           |
| `ValidationError.INVALID_CONTROL_NUMBER` | Invalid control number (last digit) |
| `ValidationError.INVALID_DATE`           | Invalid user birth date             |
