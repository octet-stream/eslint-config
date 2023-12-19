import {fileURLToPath} from "node:url"

import ts from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macro__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/typescript/esm.js", import.meta.url)
)

test("Lints basic code example with TypeScript code w/ ESM", withAssertRules, {
  configPath,
  filePath: "test.ts",
  code: ts`
    export type StringOrNumber = string | number

    export const identifier: StringOrNumber = "some value"\n
  `,
  assert: {
    errorCount: 0,
    warningCount: 0
  }
})
