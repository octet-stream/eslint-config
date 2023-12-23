import type {ESLint} from "eslint"

import createTsOverride from "../../overrides/typescript.js"

export default {
  extends: [
    "../base.js",
    "../react.js",
    "../esm.js",
    "../typescript.js"
  ],
  overrides: [
    createTsOverride("*.tsx")
  ]
} satisfies ESLint.ConfigData
