import type {ESLint} from "eslint"

import type {AVARules} from "../../types/rules/AVARules.js"

export default {
  extends: "../ava.js",
  rules: {
    "ava/no-ignored-test-files": ["error", {
      files: [
        "**/*.{ts,cts,mts,tsx}",
        "**/{tests,unit}/**/*.{ts,cts,mts,tsx}",
        "!e2e"
      ],
      helpers: [
        "**/__{macros,helpers,fixtures}__/**"
      ]
    }]
  }
} satisfies ESLint.ConfigData<AVARules>
