import type {ESLint} from "eslint"

import createTsOverride from "../../overrides/typescript.js"

import tsRules from "../../rules/typescript.js"
import qwik from "../qwik"

export default {
  extends: [
    "../base.js",
    "../qwik.js",
    "../typescript.js"
  ],
  overrides: [
    createTsOverride(["*.ts", "*.tsx"], {
      ...tsRules,

      "import/no-extraneous-dependencies": ["error", {
        packageDir: qwik.rules["import/no-extraneous-dependencies"][1].packageDir,
        devDependencies: [
          "**/*.{test,spec,story}.{tsx,ts}",
          "**/tests/**/*.tsx",
          "**/e2e/**/*.tsx"
        ]
      }]
    })
  ]
} satisfies ESLint.ConfigData
