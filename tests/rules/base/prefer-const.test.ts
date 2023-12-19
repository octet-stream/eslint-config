import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macro__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/base.cjs", import.meta.url)
)

test("Requires `const` for immutable value", withAssertRules, {
  configPath,
  overrideConfig: {
    rules: {
      "no-unused-vars": 0
    }
  },
  code: js`
    let identifier = "This statement is invalid because of prefer-const"\n
  `,
  assert: {
    errorCount: 1,
    messages: [
      {
        ruleId: "prefer-const",
        messageId: "useConst"
      }
    ]
  }
})

test("Allows `let` for mutable values", withAssertRules, {
  configPath,
  overrideConfig: {
    rules: {
      "no-unused-vars": 0
    }
  },
  code: js`
    let mutableValue = 42

    mutableValue = 451\n
  `,
  assert: {
    errorCount: 0
  }
})

test(
  "Allows let when one of the destructuring "
    + "assignment members is mutable",

  withAssertRules,

  {
    configPath,
    overrideConfig: {
      rules: {
        "no-unused-vars": 0
      }
    },
    code: js`
      const object = {a: 1, b: 2}

      let {a, b} = object

      a = 1\n
    `,
    assert: {
      errorCount: 0
    }
  }
)
