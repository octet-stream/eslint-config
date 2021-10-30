# @octetstream/eslint-config

Airbnb-based ESlint config.

## Installation

```
pnpm add --dev @octetstream/eslint-config eslint
```

## Usage

Create an `.eslintrc.json` at the root of your project and add the following content:

```json
{
  "extends": [
    "@octetstream"
  ]
}
```

### Rules

This section contains the list of rules that I changed comparad to AirBnb config.

1. Never use the semicolon, until it's necessary: [`semi`](https://eslint.org/docs/rules/semi#require-or-disallow-semicolons-instead-of-asi-semi)

```js
// Good 👍

const string = "On Soviet Moon landscape see binoculars through you!"

const doSomething = () => {}; // Good

["SIGTERM", "SIGINT"].forEach(signal => process.on(signal, () => { process.exitCode = 0 }))

// Bad 👎

const number = 42;
const person = {
  firstName: "Luke",
  lastName: "Skywalker"
};
```
