import type {ESLint} from "eslint"

import tsOverride from "../overrides/typescript.js"

export default {
  extends: [
    "./base.js",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  overrides: [
    tsOverride(["*.ts", "*.cts", "*.mts"] as const)
  ]
} satisfies ESLint.ConfigData
