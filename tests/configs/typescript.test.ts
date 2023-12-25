import {fileURLToPath} from "node:url"

import ts from "dedent"
import test from "ava"

import {withAssertRules} from "../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../lib/configs/typescript.js", import.meta.url)
)

test("Lints basic code example with TypeScript code", withAssertRules, {
  configPath,
  filePath: "test.ts",
  code: ts`
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
  code: ts`
    const someNumber = 42

    module.exports = someNumber\n
  `,
  assert: {
    errorCount: 0,
    warningCount: 0
  }
})
