import {fileURLToPath} from "node:url"

import ts from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/typescript/esm.js", import.meta.url)
)

test("Passes with single named export", withAssertRules, {
  configPath,
  filePath: "test.ts",
  code: ts`
    export function add(a: number, b: number): number {
      return a + b
    }\n
  `,
  assert: {
    errorCount: 0
  }
})
