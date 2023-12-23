import type {ESLint} from "eslint"

export default {
  extends: "./base.js",
  rules: {
    "import/extensions": ["error", "ignorePackages"],
    "import/prefer-default-export": "off"
  }
} satisfies ESLint.ConfigData
