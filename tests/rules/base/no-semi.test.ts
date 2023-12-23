import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/esm.js", import.meta.url)
)

test("Fails on extra semi", withAssertRules, {
  configPath,
  code: js`
    export default "Should have error because of extra ; at the end of the line";\n
  `,
  assert: {
    errorCount: 1,
    messages: [
      {
        ruleId: "semi",
        messageId: "extraSemi"
      }
    ]
  }
})
