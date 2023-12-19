import type {ESLint} from "eslint"

export default {
  extends: [
    "../base.js",
    "../react.js",
    "../esm.js",
    "../typescript.js"
  ]
} satisfies ESLint.ConfigData
