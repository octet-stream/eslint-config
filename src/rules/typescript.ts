import type {ESLintRules} from "eslint/rules"

import type {TypeScriptRules} from "../types/rules/TypeScriptRules.js"

import baseRules from "./base.js"

export default {
  indent: "off",
  "@typescript-eslint/indent": baseRules.indent,

  // Disable no-unused-vars, because TS can validate such cases
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": "error",

  // Disable consistent return, because it's unnecessary for TypeScript
  "consistent-return": "off"
} satisfies Partial<ESLintRules & TypeScriptRules>
