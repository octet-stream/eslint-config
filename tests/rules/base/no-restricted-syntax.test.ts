import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/base.js", import.meta.url)
)

test("Allows for...of loops", withAssertRules, {
  configPath,
  overrideConfig: {
    rules: {
      "no-console": "off"
    }
  },
  code: js`
    for (const value of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      console.log(value)
    }\n
  `,
  assert: {
    errorCount: 0
  }
})

test("Prohibits WithStatement", withAssertRules, {
  configPath,
  overrideConfig: {
    parserOptions: {
      sourceType: "script"
    },
    rules: {
      "no-console": "off",
      "no-undef": "off" // false-positive
    }
  },
  code: js`
    const user = {
      firstName: "John",
      lastName: "Doe"
    }

    with (user) {
      console.log(\`\${firstName} \${lastName}\`)
    }\n
  `,
  assert(t, result) {
    const [actual] = result.messages

    t.is(actual.ruleId, "no-restricted-syntax")
    t.is(actual.messageId, "restrictedSyntax")
    t.is(actual.nodeType, "WithStatement")
  }
})
