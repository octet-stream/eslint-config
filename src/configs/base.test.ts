import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../__macro__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../lib/configs/base.cjs", import.meta.url)
)

test("Lints basic code example", withAssertRules, {
  configPath,
  overrideConfig: {
    rules: {
      "no-console": 0
    }
  },
  code: js`
    const someNumber = 42

    console.log(someNumber)\n
  `,
  assert: {
    errorCount: 0,
    warningCount: 0
  }
})
