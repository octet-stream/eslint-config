# @octetstream/eslint-config

AirBnb-based ESlint config, tweaked for my needs.

## Installation

```
pnpm add -D @octetstream/eslint-config eslint
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

This package includes configs for typescript and ES Modules, and also for React.

ESM:

```json
{
  "extends": [
    "@octetstream/eslint-config/esm"
  ]
}
```

TypeScript (CJS):

```json
{
  "extends": [
    "@octetstream/eslint-config/typescript"
  ]
}
```

TypeScript (ESM):

```json
{
  "extends": [
    "@octetstream/eslint-config/esm/typescript"
  ]
}
```

React (CJS):

```json
{
  "extends": [
    "@octetstream/eslint-config/react"
  ]
}
```

React (ESM):

```json
{
  "extends": [
    "@octetstream/eslint-config/esm/react"
  ]
}
```

React + TypeScript (CJS):

```json
{
  "extends": [
    "@octetstream/eslint-config/typescript/react"
  ]
}
```

React + TypeScript (ESM):

```json
{
  "extends": [
    "@octetstream/eslint-config/esm/typescript/react"
  ]
}
```

React configuration requires additional dependencies: `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y`.

### Rules

This section contains the list of rules that I changed comparad to AirBnb config.

1. Never use the semicolon, until it's necessary: [`semi`](https://eslint.org/docs/rules/semi)

```js
// Good 👍

const string = "On Soviet Moon landscape see binoculars through you!"

const doSomething = () => {}; // Good, because the next expression starts with an array declaration, but does not have an assignment

["SIGTERM", "SIGINT"].forEach(signal => process.on(signal, () => { process.exitCode = 0 }))

// Bad 👎

const number = 42;
const person = {
  firstName: "Luke",
  lastName: "Skywalker"
};
```

2. Use double quotes by default. [`quotes`](https://eslint.org/docs/rules/quotes)

```js
// Good 👍

const firstString = "Just a string with double quotes."
const secondString = "This string contains \"escaped quotes\" in it."
const thirdString = 'This string also contains "quotes" in it.'
const fourthString = `Use template literal only if you need ${interpolation}.`

// Bad 👎

const fifthString = 'Do not use signle quotes for strings.'
const sixthString = `Do not use template literal without interpolation.`
```

3. Prefer `const` over `let` if assigned value is not meant to be changed. Avoid `var`. Use `const` in destructuring only if none of values are meant to be changed. [`prefer-const`](https://eslint.org/docs/rules/prefer-const)

```js
// Good 👍

const number = 42

let string = "Initial string value"

string = "Updated string value"

// Bad 👎

var someVariable = 451
```
