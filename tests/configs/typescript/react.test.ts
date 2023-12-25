import {fileURLToPath} from "node:url"

import jsx from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/typescript/esm/react.js", import.meta.url)
)

test("Lints basic code example", withAssertRules, {
  configPath,
  filePath: "test.tsx",
  code: jsx`
    export const MyComponent = () => <div>Some text</div>\n
  `,
  assert: {
    errorCount: 0,
    warningCount: 0
  }
})
