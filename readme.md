# @octetstream/eslint-config

AirBnb-based ESlint config, tweaked for my needs.

## Installation

For basic usage you only need two dependencies:

```bash
pnpm add -D eslint @octetstream/eslint-config
```

TypeScript configuration requires path to `tsconfig.json` and following dependencies: `typescript`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint-config-airbnb-typescript`, `eslint-import-resolver-typescript`:

```bash
pnpm add -D eslint @octetstream/eslint-config typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript eslint-import-resolver-typescript
```

React configuration requires additional dependencies: `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y`.

```bash
pnpm add -D eslint @octetstream/eslint-config eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

## Usage

Create an `.eslintrc.json` at the root of your project and add the following content:

```json5
{
  "extends": [
    "@octetstream"
  ]
}
```

This package includes configs for typescript and ES Modules, and also for React.

ESM:

```json5
{
  "extends": [
    "@octetstream/eslint-config/esm"
  ]
}
```

TypeScript (CJS):

```json5
{
  "extends": [
    "@octetstream/eslint-config/typescript"
  ],
  "parserOptions": {
    "project": "./tsconfig.json" // Path to tsconfig is required in every TypeScript config!
  }
}
```

TypeScript (ESM):

```json5
{
  "extends": [
    "@octetstream/eslint-config/esm/typescript"
  ],
  "parserOptions": {
    "project": "./tsconfig.json" // Path to tsconfig is required in every TypeScript config!
  }
}
```

React (CJS):

```json5
{
  "extends": [
    "@octetstream/eslint-config/react"
  ]
}
```

React (ESM):

```json5
{
  "extends": [
    "@octetstream/eslint-config/esm/react"
  ]
}
```

React + TypeScript (CJS):

```json5
{
  "extends": [
    "@octetstream/eslint-config/typescript/react"
  ],
  "parserOptions": {
    "project": "./tsconfig.json" // Path to tsconfig is required in every TypeScript config!
  }
}
```

React + TypeScript (ESM):

```json5
{
  "extends": [
    "@octetstream/eslint-config/esm/typescript/react"
  ],
  "parserOptions": {
    "project": "./tsconfig.json" // Path to tsconfig is required in every TypeScript config!
  }
}
```

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