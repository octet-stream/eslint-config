# @octetstream/eslint-config

AirBnb-based ESlint config, tweaked for my needs.

## Installation

For basic usage you only need two dependencies:

```bash
pnpm add -D eslint @octetstream/eslint-config
```

## Usage

Create an `.eslintrc.json` at the root of your project and add following content:

```json5
{
  "extends": "@octetstream"
}
```

This will import `basic` config rules. Use can use other configs via submodules, like this:

```json5
{
  "extends": "@octetstream/eslint-config/typescript"
}
```

If you use [`AVA`](https://avajs.dev/) for testing, there's a config for you too.
But unlike with other configs, this does not extend any of them, so you must use it together with the others:

```json5
{
  "extends": ["@octetstream/eslint-config/esm", "@octetstream/eslint-config/ava"]
}
```

### Available configs

Here's list of available configs:

* `/` — base config for JavaScript rules. It extends [`eslint-config-airbnb-base`](https://npmjs.com/package/eslint-config-airbnb-base) config;
* `/esm` - extends `/` config with ESM rules;
* `/react` - extends `eslint-config-airbnb` config with hooks support and `jsx-runtime`;
* `/ava` - adds [eslint-plugin-ava](https://npmjs.com/package/eslint-plugin-ava) with recommemded rules. This config **does not** extend `/` config and must be used in conjunction with other configs;
* `/typescript` - extends `/` config with recommended TypeScript ESlint rules;
* `/typescript/esm` - extends `/typescript` config with ESM rules;
* `/typescript/react` - extends `/typescript` with `/react` config;
* `/typescript/ava` - extends `/ava` config with TypeScript support. Use it together with other `typescript/*` configs;
* `/typescript/esm/react` - extends `/typescript/esm` with `/react` config;

### Rules

This section contains the list of rules that I changed comparad to AirBnb config.

1. Avoid semicolon, until it's necessary: [`semi`](https://eslint.org/docs/rules/semi)

```js
// Good 👍

const string = "On Soviet Moon landscape see binoculars through you!"

const add = (a, b) => a + b

// The line starts from semicolon, because of array declaration
;["SIGTERM", "SIGINT"].forEach(signal => process.on(signal, () => { process.exitCode = 0 }))

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
