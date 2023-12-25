import type {Linter} from "eslint"

type CreateOverrideInput = Omit<Linter.ConfigOverride, "files">

export const createOverrideFactory = (
  params: CreateOverrideInput
) => <TFiles extends string | string[], TRules extends Linter.RulesRecord>(
  files: TFiles,
  rules?: TRules
): Linter.ConfigOverride => ({
  ...params,

  files,
  rules: {
    ...params.rules,
    ...rules
  }
})
