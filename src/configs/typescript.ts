import type {ESLint} from "eslint"

export default {
  extends: "./base",
  parserOptions: {
    ecmaVersion: "latest",
    parser: {
      ts: "@typescript-eslint/parser",
      tsx: "@typescript-eslint/parser"
    }
  },
  plugins: ["@typescript-eslint"],
} satisfies ESLint.ConfigData
