import {fileURLToPath} from "node:url"

import tsx from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/typescript/esm/react.js", import.meta.url)
)

test("Lints basic code example", withAssertRules, {
  configPath,
  filePath: "test.tsx",
  overrideConfig: {
    rules: {
      "import/no-extraneous-dependencies": "off"
    }
  },
  code: tsx`
    import type {FC} from "react"

    export const HelloWorld: FC = () => <div>Hello, World!</div>\n
  `,
  assert: {
    errorCount: 0,
    warningCount: 0
  }
})
