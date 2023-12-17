import {ESLint} from "eslint"

import baseRules from "../rules/base.js"

export default {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    parser: {
      js: "espree",
      jsx: "espree"
    }
  },
  extends: "./base.cjs",
  rules: {
    ...baseRules
  }
} satisfies ESLint.ConfigData
