import {ESLint} from "eslint"

import baseRules from "../rules/base.js"

export default {
  env: {
    node: true
  },
  parser: "espree",
  parserOptions: {
    ecmaVersion: "latest"
  },
  plugins: [
    "promise"
  ],
  extends: [
    "airbnb-base",
    "plugin:promise/recommended"
  ],
  rules: baseRules
} satisfies ESLint.ConfigData
