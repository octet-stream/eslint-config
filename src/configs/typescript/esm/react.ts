import type {ESLint} from "eslint"

export default {
  extends: [
    "../esm.js",
    "../react.js"
  ]
} satisfies ESLint.ConfigData
