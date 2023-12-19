import type {ESLintRules} from "eslint/rules"
import type {ESLint} from "eslint"

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
  settings: {
    "import/resolver": {
      typescript: {}
    }
  },
  rules: {
    // Disable no-unused-vars, because TS can validate such cases
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",

    // Disable consistent return, because it's unnecessary for TypeScript
    "consistent-return": "off"
  } satisfies Partial<ESLintRules>
} satisfies ESLint.ConfigData
