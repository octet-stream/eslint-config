import {fileURLToPath} from "node:url"

import js from "dedent"
import test from "ava"

import {withAssertRules} from "../../__macros__/withAssertRules.js"

const configPath = fileURLToPath(
  new URL("../../../lib/configs/esm.js", import.meta.url)
)

test("Passes w/o arrow parens if there's only 1 argument", withAssertRules, {
  configPath,
  code: js`
    import {setTimeout} from "node:timers/promises"

    const tasks = [1, 2, 3, 4, 5].map(value => value * 1000)

    for (const task of tasks) {
      await setTimeout(task)
    }\n
  `,
  assert: {
    errorCount: 0
  }
})
