import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/esm/react.js", import.meta.url)
)

test("Passes with arrow function component", withAssertRules, {
  configPath,
  filePath: "test.jsx",
  overrideConfig: {
    rules: {
      "import/no-extraneous-dependencies": "off"
    }
  },
  code: js`
    export const HelloWorld = () => (
      <div>Hello, World!</div>
    )\n
  `,
  assert: {
    errorCount: 0
  }
})

test("Passes with anonymous arrow function component", withAssertRules, {
  configPath,
  filePath: "test.jsx",
  overrideConfig: {
    rules: {
      "import/no-extraneous-dependencies": "off"
    }
  },
  code: js`
    export default () => (
      <div>Hello, World!</div>
    )\n
  `,
  assert: {
    errorCount: 0
  }
})

test("Fails with function declaration component", withAssertRules, {
  configPath,
  filePath: "test.jsx",
  overrideConfig: {
    rules: {
      "import/no-extraneous-dependencies": "off",
      "func-names": "off"
    }
  },
  code: js`
    export function HelloWorld() {
      return (
        <div>Hello, World!</div>
      )
    }\n
  `,
  assert: {
    errorCount: 1,
    warningCount: 0,
    messages: [
      {
        ruleId: "react/function-component-definition",
        messageId: "arrow-function"
      }
    ]
  }
})

test("Fails with anonymous function declaration component", withAssertRules, {
  configPath,
  filePath: "test.jsx",
  overrideConfig: {
    rules: {
      "import/no-extraneous-dependencies": "off",
      "func-names": "off"
    }
  },
  code: js`
    export default function () {
      return (
        <div>Hello, World!</div>
      )
    }\n
  `,
  assert: {
    errorCount: 1,
    warningCount: 0,
    messages: [
      {
        ruleId: "react/function-component-definition",
        messageId: "arrow-function"
      }
    ]
  }
})
