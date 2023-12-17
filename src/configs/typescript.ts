import type {ESLint} from "eslint"

export default {
  extends: [
    "./base.cjs", // TODO: Add resolveConfigBase or emit cjs only
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
