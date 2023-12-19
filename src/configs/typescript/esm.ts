import type {ESLint} from "eslint"

export default {
  extends: [
    "../base.js",
    "../esm.js",
    "../typescript.js"
  ],
  rules: {
    // Prohibit `.ts`, `.tsx`, `.mts`, and `.cts` extensions.
    "import/extensions": ["error", "ignorePackages", {
      ts: "never",
      tsx: "never",
      mts: "never",
      cts: "never"
    }]
  }
} satisfies ESLint.ConfigData
