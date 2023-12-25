import type {ESLintRules} from "eslint/rules"

import type {TypeScriptRules} from "../types/rules/TypeScriptRules.js"

export default {
  // Allow named exports when there's only one export
  "import/prefer-default-export": "off"
} satisfies Partial<ESLintRules & TypeScriptRules>
