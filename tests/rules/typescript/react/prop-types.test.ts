import {fileURLToPath} from "node:url"

import tsx from "dedent"
import test from "ava"

import {withAssertRules} from "../../../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../../lib/configs/typescript/esm/react.js", import.meta.url)
)

test("Passes with TS type as prop-types", withAssertRules, {
  configPath,
  filePath: "test.tsx",
  overrideConfig: {
    rules: {
      "import/no-extraneous-dependencies": "off"
    }
  },
  code: tsx`
    import type {FC} from "react"

    interface Props {
      firstName: string
      lastName: string
    }

    export const User: FC<Props> = ({firstName, lastName}) => (
      <h1>Hello, {\`\${firstName} \${lastName}\`}!</h1>
    )\n
  `,
  assert: {
    errorCount: 0,
    warningCount: 0
  }
})
