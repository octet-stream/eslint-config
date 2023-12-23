import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/esm.js", import.meta.url)
)

test("Passes on camel case", withAssertRules, {
  configPath,
  code: js`
    export const someVariable = 123

    export function someFunction() { }

    export const someObject = {
      someKey: "some value"
    }

    export class SomeClass { }\n
  `,
  assert: {
    errorCount: 0
  }
})

test("Fails on underscore case", withAssertRules, {
  configPath,
  overrideConfig: {
    rules: {
      "no-unused-vars": 0
    }
  },
  code: js`
    export const some_variable = 123

    export function some_function() { }

    export const some_object = {
      someKey: "some value"
    }

    export class Some_Class { }\n
  `,
  assert: {
    errorCount: 4,
    messages: new Array(4).fill({
      ruleId: "camelcase",
      messageId: "notCamelCase"
    })
  }
})
