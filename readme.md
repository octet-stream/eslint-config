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

## Available configs

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

## Rules

This config overrides some of the rules from AitBnb config.
This section contains a full list of the changed rules for each config.

### `/`

This config extends [`eslint-config-airbnb-base`](https://npmjs.com/package/eslint-config-airbnb-base)

#### [`semi`](https://eslint.org/docs/rules/semi)

Avoid semicolon, until it's necessary.

##### 👍 Do

```js
const humber = 42
const string = "On Soviet Moon landscape see binoculars through you!"
const person = {
  firstName: "Luke",
  lastName: "Skywalker"
}
```

##### 👎 Don't

```js
const number = 42;
const string = "On Soviet Moon landscape see binoculars through you!"
const person = {
  firstName: "Luke",
  lastName: "Skywalker"
};
```

#### [`semi-style`](https://eslint.org/docs/rules/semi-style)

If semicolon is absolutely necessary, then place it at the beginning of line.

##### 👍 Do

```js
const add = (a, b) => a + b

// The line starts from semicolon, because of array declaration
;["SIGTERM", "SIGINT"].forEach(signal => process.on(signal, () => { process.exitCode = 0 }))
```

##### 👎 Don't

```js
const add = (a, b) => a + b;

["SIGTERM", "SIGINT"].forEach(signal => process.on(signal, () => { process.exitCode = 0 }))
```
