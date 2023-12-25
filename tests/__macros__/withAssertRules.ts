/* eslint-disable @typescript-eslint/indent */

import dedent from "dedent"
import test from "ava"

import type {ExecutionContext} from "ava"
import {ESLint, type Linter} from "eslint"

import type {Simplify} from "../__helpers__/Simplify.js"

export type MessageAssertions = Partial<
  Pick<
    Linter.LintMessage,

    | "messageId"
    | "ruleId"
    | "severity"
    | "fatal"
    | "suggestions"
    | "message"
    | "nodeType"
    | "line"
    | "column"
    | "endLine"
    | "endColumn"
  >
>

export type WithMessageAssertions<T> =
  Omit<T, "messages"> & {messages: Simplify<MessageAssertions>[]}

export type ResultAssertions = Simplify<
  Partial<
    Pick<
      WithMessageAssertions<ESLint.LintResult>,

      "messages" | "errorCount" | "fatalErrorCount" | "warningCount"
    >
  >
>

type AssertImplementationResultArg = Simplify<Required<ResultAssertions>>

type AssertImplementation =
  | (
      (
        t: ExecutionContext,
        result: AssertImplementationResultArg
      ) => Promise<void>
  )
  | (
    (
      t: ExecutionContext,
      result: AssertImplementationResultArg
    ) => void
  )

interface Params {
  code: string
  configPath: string
  filePath?: string,
  overrideConfig?: Linter.Config,
  assert: ResultAssertions | AssertImplementation
}

export const withAssertRules = test.macro(async (t, params: Params) => {
  const {
    code,
    assert,
    configPath,
    overrideConfig,
    filePath = "test.js"
  } = params

  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: configPath,
    overrideConfig
  })

  const [result] = await eslint.lintText(code, {filePath})

  if (!result) {
    return t.fail("ESlint returned no result")
  }

  if (typeof assert === "function") {
    return assert(t, result)
  }

  // Set plan to the number of keys in `assert` object + amount of messages
  t.plan(Object.keys(assert).length + (assert.messages?.length || 0))

  if (assert.errorCount != null) {
    t.is(
      result.errorCount,

      assert.errorCount,

      dedent`
        Errors count mismatch.
        Linter result:

        ${JSON.stringify(result, null, 2)}
      `
    )
  }

  if (assert.warningCount != null) {
    t.is(
      result.warningCount,

      assert.warningCount,

      dedent`
        Warnings count mismatch
        Linter result:

        ${JSON.stringify(result, null, 2)}
      `
    )
  }

  if (assert.messages) {
    t.is(result.messages.length, assert.messages.length, "Messages count mismatch")

    assert.messages.forEach((message, i) => {
      const keys = Object.keys(message)
      const actual = Object.fromEntries(
        Object
          .entries(result.messages[i] ?? {})
          .filter(([key]) => keys.includes(key))
      )

      t.deepEqual(actual, message)
    })
  }
})
