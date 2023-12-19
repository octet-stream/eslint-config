import {fileURLToPath} from "node:url"

import jsx from "dedent"
import test from "ava"

import {withAssertRules} from "../__macro__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../lib/configs/react.js", import.meta.url)
)

test("Lints basic code example", withAssertRules, {
  configPath,
  filePath: "test.jsx",
  code: jsx`
    const MyComponent = () => <div>Some text</div>

    module.exports = MyComponent\n
  `,
  assert: {
    errorCount: 0,
    warningCount: 0
  }
})
