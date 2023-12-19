import type {ESLint} from "eslint"

export default {
  extends: [
    "./base.js"
  ],
  rules: {
    "import/extensions": ["error", "ignorePackages"],
    "import/prefer-default-export": 0
  }
} satisfies ESLint.ConfigData
