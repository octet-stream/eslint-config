import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../__macro__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../lib/configs/react.cjs", import.meta.url)
)

test("Lints basic code example", withAssertRules, {
  configPath,
  filePath: "test.jsx",
  code: js`
    const MyComponent = () => <div>Some text</div>

    module.exports = MyComponent\n
  `,
  assert: {
    errorCount: 0,
    warningCount: 0
  }
})
