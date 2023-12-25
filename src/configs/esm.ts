import type {ESLint} from "eslint"

import importRules from "../rules/import.js"

export default {
  extends: "./base.js",
  rules: {
    ...importRules,

    "import/extensions": ["error", "ignorePackages"]
  }
} satisfies ESLint.ConfigData
