import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macro__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/esm.js", import.meta.url)
)

test("Allows ++i operator", withAssertRules, {
  configPath,
  overrideConfig: {
    rules: {
      "no-unused-vars": 0
    }
  },
  code: js`
    let i = 0

    ++i\n
  `,
  assert: {
    errorCount: 0
  }
})

test("Allows i++ operator", withAssertRules, {
  configPath,
  overrideConfig: {
    rules: {
      "no-unused-vars": 0
    }
  },
  code: js`
    let i = 0

    ++i\n
  `,
  assert: {
    errorCount: 0
  }
})
