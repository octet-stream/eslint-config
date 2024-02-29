import type {ESLint} from "eslint"

import tsRules from "../../rules/typescript.js"
import createTsOverride from "../../overrides/typescript.js"

export default {
  extends: [
    "../base.js",
    "../react.js",
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
      }],

      // Disabled due to validation via TypeScript
      "react/prop-types": "off",
      "react/require-default-props": "off"
    })
  ],
  rules: {
    // Restrict JSX usage to `.jsx` and `.tsx` files only.
    "react/jsx-filename-extension": ["error", {
      extensions: [".jsx", ".tsx"]
    }],
    "import/extensions": "off"
  }
} satisfies ESLint.ConfigData
