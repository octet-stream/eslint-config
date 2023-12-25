import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/esm/react.js", import.meta.url)
)

test("Passes with state in constructor", withAssertRules, {
  configPath,
  filePath: "test.jsx",
  overrideConfig: {
    rules: {
      "import/no-extraneous-dependencies": "off"
    }
  },
  code: js`
    import {Component} from "react"

    export class MyComponent extends Component {
      constructor() {
        super()

        this.state = {
          count: 0
        }
      }

      render() {
        const {count} = this.state

        return (
          <div>Count {count}</div>
        )
      }
    }\n
  `,
  assert: {
    errorCount: 0
  }
})
