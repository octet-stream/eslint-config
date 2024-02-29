import type {ESLint} from "eslint"

export default {
  extends: [
    "../esm.js",
    "../react.js"
  ],
  rules: {
    // Prohibit `.ts`, `.tsx`, `.mts`, and `.cts` extensions.
    "import/extensions": ["error", "ignorePackages", {
      ts: "never",
      tsx: "never",
      mts: "never",
      cts: "never",
      jsx: "never",
      js: "ignorePackages"
    }]
  }
} satisfies ESLint.ConfigData
