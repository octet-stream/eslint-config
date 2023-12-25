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

* `/` — base config for JavaScript rules. It extends [eslint-config-airbnb-base](https://npmjs.com/package/eslint-config-airbnb-base) config;
* `/esm` - extends `/` config with ESM rules;
* `/react` - extends [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) config with hooks support and `jsx-runtime`;
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

JavaScript have specification for [Automatic Semicolon Inservion](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-automatic-semicolon-insertion), so most of the time you don't need to place a semicolon yourself.
While misuse and misunderstanding may lead you to unpredictable behaviour of your scripts,
both ESLint and TypeScript can help you to avoid those mistakes. So, don't waste your time writing unnecessary code.

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

If semicolon is absolutely necessary, then place it at the beginning of line, but generally you should avoid use of semicolon in your code.

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

#### [`camelcase`](https://eslint.org/docs/rules/camelcase)

Use [camelCase](https://en.wikipedia.org/wiki/Camel_case) for [identifiers](https://developer.mozilla.org/en-US/docs/Glossary/Identifier) to align better with JavaScript's standard library naming convention.

##### 👍 Do

```js
const someImmutableVariable = 42

const someObject = {
  someKey: "Some value"
}

function someFunction() { }

class SomeClass {
  somePropery = "Some value"

  someMethod() { }
}
```

##### 👎 Don't

```js
const some_immutable_variable = 42

const some_object = {
  some_key: "Some value"
}

function some_function() { }

class Some_Class {
  some_propery = "Some value"

  some_method() { }
}
```

#### [`quotes`](https://eslint.org/docs/rules/quotes)

Use double quotes by default.

##### 👍 Do

```js
const fullName = "John Doe"

const message = `Hello, ${fullName}!`
```

##### 👎 Don't

```js
const fullName = 'John Doe'

const message = `Hello, ${fullName}!`
```

#### [`max-len`](https://eslint.org/docs/rules/max-len)

The code must have **at most** 80 symbols per line.
This rule does not apply to commens, RegExp, urls, strings, and template literals.

##### 👍 Do

```js
// Try to keep names simple and code complexity low
function someFunction() {
  return "some result"
}

// Comments length also ignored:
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula interdum ex imperdiet imperdiet. Integer placerat luctus dui ut blandit. Donec nunc nunc, mollis id vestibulum nec, gravida sit amet ante. Maecenas vehicula nibh dui, consectetur placerat lorem congue eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum arcu et sapien mattis scelerisque. Pellentesque risus arcu, eleifend sed dictum at, porta at justo. Curabitur tristique justo sed odio euismod blandit. Aenean lacinia eget diam et posuere. Nulla eget placerat lectus. Quisque placerat rhoncus purus, a interdum velit facilisis ac. Donec volutpat laoreet tristique. Quisque ac commodo nibh, in ornare dolor. Etiam eros quam, aliquet eu odio non, tristique malesuada lacus. Aenean maximus risus eu finibus rutrum.

// This is still valid
const monthsRegex = /^(january|february|march|april|may|june|july|august|september|october|november|december)$/i
```

##### 👎 Don't

```js
function thisFunctionNameIsVeryVerlyLongYouShouldNeverDoThisBecauseItsHardToReadAndBecauseThisRuleRestrictsCodeFromBeingThisLong() {
  return "O_O"
}
```

#### [`indent`](https://eslint.org/docs/rules/indent)

Use 2 spaces per indent level.
Never use tabs for indent and never mix tabs and spaces for indent.

#### [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle)

Don't keep trailing commas.

##### 👍 Do

```js
const object = {
  a: "a",
  b: "b",
  c: "c"
}
```

##### 👎 Don't

```js
const object = {
  a: "a",
  b: "b",
  c: "c",
}
```

#### [`prefer-const`](prefer-const)

Use `const` for *immutable* variables and `let` for *mutable*.
Never use `var`.

##### 👍 Do

```js
const immutable = "This value is immutable"

let mutable = "This value is mutable"

mutable = "This value can be changed later in the same module"
```

##### 👎 Don't

```js
let immutable = "This value is immutable, so use const for it"

var mutable = "This value is mutable"

mutable = "This value can be changed later in the same module"
```

#### [`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)

The `++` operator is allowed to use:

```js
let count = 1
while (count <= 10) {
  console.log(count++)
}
```

#### [`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing)

Never use spaces inside curly braces.

##### 👍 Do

```js
import {something} from "some-package"

const object = {a: "a", b: "b"}
```

##### 👎 Don't

```js
import { something } from "some-package"

const object = { a: "a", b: "b" }
```

#### [`object-curly-newline`](https://eslint.org/docs/rules/object-curly-newline)

Use consistent style for newline in objects.

#### [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens)

Don't use parenthesis in arrow function arguments until necessary.

##### 👍 Do

```js
const showMessage = text => console.log(text)

const add = (a, b) => a + b
```

##### 👎 Don't

```js
const showMessage = (text) => console.log(text)
```

#### [`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)

Do not wrap arrow funcrtion's body in parenthesis unless necessary.

##### 👍 Do

```js
const x = a => 1 ? 2 : 3
```

##### 👎 Don't

```js
const x = a => (1 ? 2 : 3)
```

#### [`no-await-in-loop`](https://eslint.org/docs/rules/no-await-in-loop)

Use `await` in loops in needed.

```js
import {setTimeout} from "node:timers/promises"

const intervals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => x * 1000)

for (const ms of intervals) {
  console.log(await setTimeout(ms, ms))
}
```

But you should remember that this can be slower.
In case if your tasks can be done concurrently, you can use [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) or [`Promise.allSettled`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) for greater performance.

```js
import {setTimeout} from "node:timers/promises"

const intervals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => x * 1000)

const tasks = []
for (const ms of intervals) {
  tasks.push(setTimeout(ms, ms))
}

console.log(await Promise.all(tasks))
```

#### [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)

The use of [with](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with) statement is discouraged.

### `/esm`

This config extends the base `/` config with ES Modules support.

#### [`import/extensions`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md)

Always use `.js` file extension for module imports.

##### 👍 Do

```js
import {something} from "./path/to/a/module.js"
```

This rule does not apply to packages.

```js
import {someFunction} from "some-spackage"
```

##### 👎 Don't

```js
import {something} from "./path/to/a/module"
```

#### [`import/prefer-default-export`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md)

The use of default and named exports are not restricted.
