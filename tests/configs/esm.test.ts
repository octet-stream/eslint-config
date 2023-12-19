import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../__macro__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../lib/configs/esm.js", import.meta.url)
)

test("Passes with signle named export", withAssertRules, {
  configPath,
  code: js`
    export function add(a, b) {
      return a + b
    }\n
  `,
  assert: {
    errorCount: 0,
    warningCount: 0
  }
})

test("Passes with signle default export", withAssertRules, {
  configPath,
  code: js`
    export default function add(a, b) {
      return a + b
    }\n
  `,
  assert: {
    errorCount: 0,
    warningCount: 0
  }
})
