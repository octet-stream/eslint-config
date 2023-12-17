import {ESLint} from "eslint"

import baseRules from "../rules/base.js"

export default {
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: "latest",
    parser: {
      js: "espree",
      jsx: "espree"
    }
  },
  plugins: [
    "promise",
    "ava"
  ],
  extends: [
    "airbnb-base",
    "plugin:promise/recommended",
    "plugin:ava/recommended"
  ],
  rules: {
    ...baseRules
  }
} satisfies ESLint.ConfigData
