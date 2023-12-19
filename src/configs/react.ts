import {ESLint} from "eslint"

import baseRules from "../rules/base.js"

export default {
  extends: "./base.js",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    parser: {
      js: "espree",
      jsx: "espree"
    }
  },
  rules: {
    ...baseRules
  }
} satisfies ESLint.ConfigData
