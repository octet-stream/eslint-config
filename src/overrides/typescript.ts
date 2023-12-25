import {createOverrideFactory} from "../utils/createOverrideFactory.js"

import tsSettings from "../settings/typescript.js"
import tsRules from "../rules/typescript.js"

export default createOverrideFactory({
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  settings: tsSettings,
  rules: tsRules
})
