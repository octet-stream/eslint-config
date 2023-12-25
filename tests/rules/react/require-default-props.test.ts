import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/esm/react.js", import.meta.url)
)

test("Passes with ES syntax for default props", withAssertRules, {
  configPath,
  filePath: "test.jsx",
  overrideConfig: {
    rules: {
      "import/no-extraneous-dependencies": "off"
    }
  },
  code: js`
    import PropTypes from "prop-types"

    export const Message = ({text = "Hello, world!"}) => (
      <span>{text}</span>
    )

    Message.propTypes = {
      text: PropTypes.string
    }\n
  `,
  assert: {
    errorCount: 0
  }
})

test("Fails with FC.defaultProps for default props", withAssertRules, {
  configPath,
  filePath: "test.jsx",
  overrideConfig: {
    rules: {
      "import/no-extraneous-dependencies": "off"
    }
  },
  code: js`
    import PropTypes from "prop-types"

    export const Message = ({text}) => (
      <span>{text}</span>
    )

    Message.propTypes = {
      text: PropTypes.string
    }

    Message.defaultProps = {
      text: "Hello, world!"
    }\n
  `,
  assert(t, result) {
    const [actual] = result.messages

    t.is(actual.ruleId, "react/require-default-props")
    t.is(actual.messageId, "noDefaultPropsWithFunction")
  }
})
