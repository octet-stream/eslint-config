import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macro__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/esm.js", import.meta.url)
)

test("Allows 2 spaces", withAssertRules, {
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

test("Prohibits tabs", withAssertRules, {
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

test("Requires one more level within SwitchCase statement", withAssertRules, {
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
  assert(t, result) {
    const [actual] = result.messages

    t.is(actual.ruleId, "indent")
    t.is(actual.messageId, "wrongIndentation")
    t.is(actual.message, "Expected indentation of 2 spaces but found 0.")
    t.is(actual.line, 4)
    t.is(actual.column, 1)
  }
})
