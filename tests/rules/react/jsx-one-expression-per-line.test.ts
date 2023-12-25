import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/esm/react.js", import.meta.url)
)

test("Passes with multiple jsx expressions per line", withAssertRules, {
  configPath,
  filePath: "test.jsx",
  code: js`
    export const Text = () => (
      <span>This text has <i>formatting</i></span>
    )\n
  `,
  assert: {
    errorCount: 0
  }
})
