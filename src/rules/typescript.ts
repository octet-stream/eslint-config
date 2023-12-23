import type {ESLintRules} from "eslint/rules"

export default {
  // Disable no-unused-vars, because TS can validate such cases
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": "off",

  // Disable consistent return, because it's unnecessary for TypeScript
  "consistent-return": "off"
} satisfies Partial<ESLintRules>
