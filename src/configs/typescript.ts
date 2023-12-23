import type {ESLint} from "eslint"

import tsRules from "../rules/typescript.js"
import tsSettings from "../settings/typescript.js"

export default {
  extends: [
    "./base.js",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: {
      ts: "@typescript-eslint/parser",
      tsx: "@typescript-eslint/parser"
    }
  },
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.cts", "*.mts"],
      settings: tsSettings,
      rules: tsRules
    }
  ]
} satisfies ESLint.ConfigData
