import type {ESLint} from "eslint"

import tsOverride from "../overrides/typescript.js"
import tsRules from "../rules/typescript.js"
import importRules from "../rules/import.js"

export default {
  extends: [
    "./base.js",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  overrides: [
    tsOverride(["*.ts", "*.cts"] as const, {
      ...tsRules,

      "import/no-extraneous-dependencies": ["error", {
        devDependencies: [
          "*.config.{ts,cts}",
          "**/*.{test,spec}.{ts,cts}",
          "**/tests/**/*.{ts,cts}",
          "**/e2e/**/*.{ts,mts}"
        ]
      }]
    })
  ],
  rules: importRules
} satisfies ESLint.ConfigData
