import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macro__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/base.cjs", import.meta.url)
)

test("Fails on extra semi", withAssertRules, {
  configPath,
  overrideConfig: {
    rules: {
      "no-console": 0
    }
  },
  code: js`
    console.log("Should have error because of extra ; at the end of the line");\n
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
