import type {ESLint} from "eslint"

const generatedDeps = ["@qwik-city-plan", "@qwik-client-manifest"]

export default {
  extends: [
    "plugin:qwik/recommended",
    "./base.js"
  ],
  rules: {
    "import/no-extraneous-dependencies": ["error", {
      packageDir: [
        "@builder.io/qwik",
        "@builder.io/qwik-city"
      ],
      devDependencies: [
        "**/*.{test,spec,story}.{jsx,js}",
        "**/tests/**/*.jsx",
        "**/e2e/**/*.jsx"
      ]
    }],
    "import/no-unresolved": ["error", {
      ignore: Array.from(generatedDeps) // Ignored, because generated
    }]
  }
} satisfies ESLint.ConfigData
