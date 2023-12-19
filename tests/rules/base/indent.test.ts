import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macro__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/esm.js", import.meta.url)
)

test("Passes with 2 spaces indent", withAssertRules, {
  configPath,
  code: js`
    module.exports = function add(a, b) {
      return a + b
    }\n
  `,
  assert: {
    errorCount: 0
  }
})

test("Fails with tab indent", withAssertRules, {
  configPath,
  code: (js`
    module.exports = function add(a, b) {
      return a + b
    }\n
  `).replace("  ", "\t"),
  assert: {
    messages: [
      {
        ruleId: "no-tabs",
        messageId: "unexpectedTab"
      },
      {
        ruleId: "indent",
        messageId: "wrongIndentation"
      }
    ]
  }
})

// TODO: Rewrite macro to support `assert` field function
test.failing("Requires a level of indent within SwitchCase statement", withAssertRules, {
  configPath,
  overrideConfig: {
    rules: {
      "no-console": "off"
    }
  },
  code: js`
    const test = 1

    switch (test) {
    case 1:
      console.log("first")
      break
    case 2:
      console.log("second")
      break
    default:
      console.log("default")
    }\n
  `,
  assert: {
    messages: Array.from({length: 8}).fill({}).map(() => ({
      ruleId: "indent",
      messageid: "wrongIndentation",
      message: "Expected indentation of 4 spaces but found 2."
    }))
  }
})
