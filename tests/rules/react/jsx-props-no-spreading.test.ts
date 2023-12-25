import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/esm/react.js", import.meta.url)
)

test("Passes with multi spaces between props", withAssertRules, {
  configPath,
  filePath: "test.jsx",
  code: js`
    export const MyButton = props => (
      <button {...props} type="button" />
    )\n
  `,
  assert: {
    errorCount: 0
  }
})
