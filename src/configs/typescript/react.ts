import type {ESLint} from "eslint"

import tsRules from "../../rules/typescript.js"
import createTsOverride from "../../overrides/typescript.js"

export default {
  extends: [
    "../base.js",
    "../react.js",
    "../esm.js",
    "../typescript.js"
  ],
  overrides: [
    createTsOverride("*.tsx", {
      ...tsRules,

      "import/no-extraneous-dependencies": ["error", {
        devDependencies: [
          "**/*.{test,spec}.tsx",
          "**/tests/**/*.tsx",
          "**/e2e/**/*.tsx"
        ]
      }]
    })
  ]
} satisfies ESLint.ConfigData
