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
} satisfies ESLint.ConfigData
