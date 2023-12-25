import type {ESLint} from "eslint"

import type {AVARules} from "../types/rules/AVARules.js"

export default {
  plugins: ["ava"],
  extends: "plugin:ava/recommended",
  rules: {
    "ava/no-ignored-test-files": ["error", {
      files: [
        "**/*.{js,mjs,cjs,jsx}",
        "**/{tests,unit}/**/*.{js,mjs,cjs,jsx}",
        "!e2e"
      ],
      helpers: [
        "**/__{macros,helpers,fixtures}__/**"
      ]
    }]
  }
} satisfies ESLint.ConfigData<AVARules>
