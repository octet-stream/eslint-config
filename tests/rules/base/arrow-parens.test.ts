import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macro__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/esm.js", import.meta.url)
)

test("Passes w/o arrow parens if there's only 1 argument", withAssertRules, {
  configPath,
  code: js`
    export const someFunc = a => a\n
  `,
  assert: {
    errorCount: 0
  }
})
