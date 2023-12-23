import type {Linter} from "eslint"

export type RuleWithPrefix<
  TPrefix extends string,
  TRules extends Linter.RulesRecord,
  TSep extends string = "/"
> = {
  [
  K in keyof TRules as `${TPrefix}${TSep}${K extends string ? K : never}`
  ]: TRules[K]
}
