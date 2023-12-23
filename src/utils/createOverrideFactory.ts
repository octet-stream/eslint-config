import type {Linter} from "eslint"

type CreateOverrideInput = Omit<Linter.ConfigOverride, "files">

export const createOverrideFactory = (
  params: CreateOverrideInput
) => <T extends string | string[]>(
  files: T
): Linter.ConfigOverride => ({...params, files})
