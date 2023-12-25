import type {ESLint} from "eslint"

export default {
  extends: [
    "../react.js",
    "../esm.js"
  ]
} satisfies ESLint.ConfigData
