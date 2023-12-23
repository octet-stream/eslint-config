import type {ESLintRules} from "eslint/rules"
import type {Linter} from "eslint"

import type {RuleWithPrefix} from "../../utils/RuleWithPrefix.js"
import type {Simplify} from "../../utils/Simplify.js"

type ReusedRules = Pick<ESLintRules, "indent" | "no-unused-vars">

export type TypeScriptRules =
  | Linter.RulesRecord
  | Simplify<RuleWithPrefix<"@typescript-eslint", ReusedRules>>
