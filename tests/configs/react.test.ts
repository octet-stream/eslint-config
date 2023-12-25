import {fileURLToPath} from "node:url"

import jsx from "dedent"
import test from "ava"

import {withAssertRules} from "../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../lib/configs/esm/react.js", import.meta.url)
)

test("Lints basic code example", withAssertRules, {
  configPath,
  filePath: "test.jsx",
  code: jsx`
    const MyComponent = () => <div>Some text</div>

    export default MyComponent\n
  `,
  assert: {
    errorCount: 0,
    warningCount: 0
  }
})

test("Prohibits file extensions other than .jsx", withAssertRules, {
  configPath,
  filePath: "test.js",
  code: jsx`
    export const MyComponent = () => <div>Some text</div>\n
  `,
  assert: {
    errorCount: 1,
    messages: [
      {
        ruleId: "react/jsx-filename-extension",
        messageId: "noJSXWithExtension",
        nodeType: "JSXElement",
        message: "JSX not allowed in files with extension '.js'"
      }
    ]
  }
})
