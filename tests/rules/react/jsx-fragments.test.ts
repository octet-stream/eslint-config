import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/esm/react.js", import.meta.url)
)

test("Passes <Fragment> element", withAssertRules, {
  configPath,
  filePath: "test.jsx",
  overrideConfig: {
    rules: {
      "import/no-extraneous-dependencies": "off"
    }
  },
  code: js`
    import {Fragment} from "react"

    export const Message = () => (
      <Fragment>
        <div>Some element</div>
        <div>Some other element</div>
      </Fragment>
    )\n
  `,
  assert: {
    errorCount: 0
  }
})
