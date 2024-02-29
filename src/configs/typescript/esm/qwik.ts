import type {ESLint} from "eslint"

export default {
  extends: [
    "../esm.js",
    "../qwik.js"
  ],
  rules: {
    // Prohibit `.ts`, `.tsx`, `.mts`, `.cts` and `.jsx` extensions.
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
