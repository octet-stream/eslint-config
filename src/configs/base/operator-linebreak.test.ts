import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macro__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/base.cjs", import.meta.url)
)

test("When operator at the EOL", withAssertRules, {
  configPath,
  code: js`
    module.exprots = "this line is pretty long and also " +
      "it was split in two pieces"\n
  `,
  assert: {
    errorCount: 1,
    messages: [
      {
        ruleId: "operator-linebreak",
        messageId: "operatorAtBeginning"
      }
    ]
  }
})
