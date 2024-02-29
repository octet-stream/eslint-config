import type {ESLint} from "eslint"

import tsOverride from "../../overrides/typescript.js"
import tsRules from "../../rules/typescript.js"

export default {
  extends: [
    "../base.js",
    "../esm.js",
    "../typescript.js"
  ],
  overrides: [
    tsOverride(["*.ts", "*.mts"], {
      ...tsRules,

      "import/no-extraneous-dependencies": ["error", {
        devDependencies: [
          "*.config.{ts,mts}",
          "**/*.{test,spec}.{ts,mts}",
          "**/tests/**/*.{ts,mts}",
          "**/e2e/**/*.{ts,mts}"
        ]
      }]
    })
  ],
  rules: {
    // Prohibit `.ts`, `.tsx`, `.mts`, and `.cts` extensions.
    "import/extensions": ["error", "ignorePackages", {
      ts: "never",
      mts: "never",
      cts: "never",
      js: "ignorePackages"
    }]
  }
} satisfies ESLint.ConfigData
