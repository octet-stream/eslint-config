import type {ESLint} from "eslint"

import importRules from "../rules/import"

const generatedDeps = ["@qwik-city-plan", "@qwik-client-manifest"]

export default {
  extends: [
    "plugin:qwik/recommended",
    "./base.js"
  ],
  rules: {
    ...importRules,

    "import/no-extraneous-dependencies": ["error", {
      devDependencies: [
        "**/*.{test,spec,stories}.{jsx,js,mjs,cjs}",
        "**/tests/**/*.jsx",
        "**/e2e/**/*.jsx",
        "*.config.{js,mjs,cjs}",
        "*rc.{js,mjs,cjs}"
      ]
    }],
    "import/no-unresolved": ["error", {
      ignore: Array.from(generatedDeps) // Ignored, because generated
    }]
  }
} satisfies ESLint.ConfigData
