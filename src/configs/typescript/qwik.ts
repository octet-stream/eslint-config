import type {ESLint} from "eslint"

import createTsOverride from "../../overrides/typescript.js"

import tsRules from "../../rules/typescript.js"

export default {
  extends: [
    "../base.js",
    "../typescript.js",
    "../qwik.js"
  ],
  overrides: [
    createTsOverride(["*.ts", "*.tsx"], {
      ...tsRules,

      "import/no-extraneous-dependencies": ["error", {
        devDependencies: [
          "**/*.{test,spec,stories}.{tsx,ts}",
          "**/tests/**/*.tsx",
          "**/e2e/**/*.tsx",
          "*.config.{ts,cts,js,mjs}",
          "*rc.{ts,cts,js,mjs}"
        ]
      }]
    })
  ]
} satisfies ESLint.ConfigData
