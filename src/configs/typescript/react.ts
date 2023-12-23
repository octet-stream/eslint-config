import type {ESLint} from "eslint"

import tsRules from "../../rules/typescript.js"
import tsSettings from "../../settings/typescript.js"

export default {
  extends: [
    "../base.js",
    "../react.js",
    "../esm.js",
    "../typescript.js"
  ],
  overrides: [
    {
      files: "*.tsx",
      settings: tsSettings,
      rules: tsRules
    }
  ]
} satisfies ESLint.ConfigData
