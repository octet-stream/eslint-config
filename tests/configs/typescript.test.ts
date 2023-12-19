import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../__macro__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../lib/configs/typescript.js", import.meta.url)
)

test("Lints basic code example with TypeScript code", withAssertRules, {
  configPath,
  filePath: "test.ts",
  code: js`
    type StringOrNumber = string | number

    const identifier: StringOrNumber = "some value"

    module.exports = identifier\n
  `,
  assert: {
    errorCount: 0,
    warningCount: 0
  }
})

test("Supports JavaScript linting", withAssertRules, {
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
