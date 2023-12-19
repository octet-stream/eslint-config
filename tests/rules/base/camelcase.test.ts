import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macro__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/base.js", import.meta.url)
)

test("Passes on camel case", withAssertRules, {
  configPath,
  overrideConfig: {
    rules: {
      "no-unused-vars": 0
    }
  },
  code: js`
    const someVariable = 123

    function someFunction() { }

    const someObject = {
      someKey: "some value"
    }

    class SomeClass { }\n
  `,
  assert: {
    errorCount: 0
  }
})

test("Passes on underscore case", withAssertRules, {
  configPath,
  overrideConfig: {
    rules: {
      "no-unused-vars": 0
    }
  },
  code: js`
    const some_variable = 123

    function some_function() { }

    const some_object = {
      someKey: "some value"
    }

    class Some_Class { }\n
  `,
  assert: {
    errorCount: 4,
    messages: new Array(4).fill({}).map(() => ({
      ruleId: "camelcase",
      messageId: "notCamelCase"
    }))
  }
})
