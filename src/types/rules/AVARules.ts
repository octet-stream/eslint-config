import type {Linter} from "eslint"

import type {RuleWithPrefix} from "../../utils/RuleWithPrefix.js"
import type {Simplify} from "../../utils/Simplify.js"

export type AVARules = Linter.RulesRecord | Simplify<RuleWithPrefix<"ava", {
  /**
   * Enforces passing the right number of arguments to assertion methods like t.is().
   * This rule can optionally also enforce or forbid the use of assertion messages.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/assertion-arguments.md
   */
  "assertion-arguments": Linter.RuleEntry<[{
    /**
     * A string which could be either "always" or "never".
     * If set to "always", all assertions will need to have an assertion message.
     * If set to "never", no assertion may have an assertion message.
     * If omitted, no reports about the assertion message will be made.
     */
    message?: "always" | "never"
  }]>,

  /**
   * Ensures that hooks are placed before any tests and in the proper semantic order.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/hooks-order.md
   */
  "hooks-order": Linter.RuleLevel,

  /**
   * Limit the amount of assertions in a test to enforce splitting up large tests into smaller ones.
   *
   * The rule takes one option, a number, which is the maximum number of assertions for each test. The default is 5.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/max-asserts.md
   */
  "max-asserts": Linter.RuleEntry<[number]>,

  /**
   * AVA comes with built-in support for async functions (async/await). This allows you to write shorter and clearer tests.
   *
   * Declaring an async test without using the `await` keyword means that either a Promise is not awaited on as intended,
   * or that the function could have been declared as a regular function, which is confusing and slower.
   *
   * This rule will report an error when it finds an async test which does not use the `await` keyword.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/no-async-fn-without-await.md
   */
  "no-async-fn-without-await": Linter.RuleLevel,

  /**
   * Prevent the use of duplicate [test modifiers](https://github.com/avajs/ava/blob/main/docs/01-writing-tests.md).
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/no-duplicate-modifiers.md
   */
  "no-duplicate-modifiers": Linter.RuleLevel,

  /**
   * Disallow tests with identical titles as it makes it hard to differentiate them.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/no-identical-title.md
   */
  "no-identical-title": Linter.RuleLevel,

  /**
   * This rule will verify that files which create tests are treated as test files by AVA.
   * It will consider the root of the project to be the closest folder containing a `package.json` file,
   * and will not do anything if it can't find one.
   * Test files in `node_modules` will not be linted as they are ignored by ESLint.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/no-ignored-test-files.md
   */
  "no-ignored-test-files": Linter.RuleEntry<[{
    /**
     * An array of extensions of the files that AVA recognizes as test files or helpers.
     * Overrides both the `babel.extensions` and `extensions` configuration otherwise used by AVA itself.
     */
    extensions: string[],

    /**
     * An array of glob patterns to select test files.
     * Overrides the `files` configuration otherwise used by AVA itself.
     */
    files: string[],

    /**
     * An array of glob patterns to select helper files.
     * Overrides the `helpers` configuration otherwise used by AVA itself.
     */
    helpers: string[]
  }]>,

  /**
   * This rule will verify that you don't import any test files.
   * It will consider the root of the project to be the closest folder containing a `package.json` file,
   * and will not do anything if it can't find one.
   * Test files in `node_modules` will not be linted as they are ignored by ESLint.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/no-import-test-files.md
   */
  "no-import-test-files": Linter.RuleEntry<[{
    /**
     * An array of extensions of the files that AVA recognizes as test files or helpers.
     * Overrides both the `babel.extensions` and `extensions` configuration otherwise used by AVA itself.
     */
    extensions: string[],

    /**
     * an array of glob patterns to select test files.
     * Overrides the `files` configuration otherwise used by AVA itself.
     */
    files: string[]
  }]>,

  /**
   * The `deepEqual` and `notDeepEqual` assertions are unnecessary when comparing primitives.
   * Use `is` or `not` instead.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/no-incorrect-deep-equal.md
   */
  "no-incorrect-deep-equal": Linter.RuleLevel,

  /**
   * The test implementation should not purely consist of an inline assertion as assertions do not return a value and having them inline also makes the tests less readable.
   *
   * This rule is fixable. It will wrap the assertion in braces `{}`. It will not do any whitespace or style changes.
   */
  "no-inline-assertions": Linter.RuleLevel,

  /**
   * In AVA, you cannot nest tests, for example, create tests inside of other tests. Doing so will lead to odd behavior.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/no-nested-tests.md
   */
  "no-nested-tests": Linter.RuleLevel,

  /**
   * It's easy to run only one test with `test.only()` and then forget about it.
   * It's visible in the results, but still easily missed.
   * Forgetting to remove `.only`, means only this one test in the whole file will run,
   * and if not caught, can let serious bugs slip into your codebase.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/no-only-test.md
   */
  "no-only-test": Linter.RuleLevel,

  /**
   * Ensure no assertions are skipped.
   *
   * It's easy to make an assertion skipped with `t.skip.xyz()` and then forget about it.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/no-skip-assert.md
   */
  "no-skip-assert": Linter.RuleLevel,

  /**
   * Ensure no tests are skipped.
   *
   * It's easy to make a test skipped with `test.skip()` and then forget about it.
   * It's visible in the results, but still easily missed.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/no-skip-test.md
   */
  "no-skip-test": Linter.RuleLevel,

  /**
   * Ensure test.todo() is not given an implementation function.
   *
   * [test.todo()](https://github.com/avajs/ava/blob/main/docs/01-writing-tests.md#test-placeholders-todo) is intended for planning tests.
   * It's not meant to be passed a function to implement the test,
   * and if given one, AVA will throw an error.
   * If you added an implementation, you probably meant to remove the `.todo` modifier.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/no-todo-implementation.md
   */
  "no-todo-implementation": Linter.RuleLevel,

  /**
   * Ensure no `test.todo()` is used.
   *
   * Disallow the use of `test.todo()`. You might want to do this to only ship features with specs fully written and passing.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/no-todo-test.md
   */
  "no-todo-test": Linter.RuleLevel,

  /**
   * Disallow the use of unknown test modifiers.
   *
   * Prevent the use of unknown [test modifiers](https://github.com/avajs/ava/blob/main/docs/01-writing-tests.md).
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/no-unknown-modifiers.md
   */
  "no-unknown-modifiers": Linter.RuleLevel,

  /**
   * Prefer using async/await instead of returning a Promise.
   *
   * AVA comes with built-in support for async functions (async/await). This allows you to write shorter and clearer tests.
   *
   * This rule will report an error when it finds a test that returns an expression that
   * looks like a Promise (containing a `.then()` call),
   * which could be simplified by using the async/await syntax.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/prefer-async-await.md
   */
  "prefer-async-await": Linter.RuleLevel,

  /**
   * Enforce the use of the asserts that have no [power-assert](https://github.com/power-assert-js/power-assert) alternative.
   *
   * This rule enables only following assertions:
   *
   * * [t.assert()](https://github.com/avajs/ava/blob/main/docs/03-assertions.md#assertvalue-message)
   * * [t.deepEqual()](https://github.com/avajs/ava/blob/main/docs/03-assertions.md#deepequalvalue-expected-message)
   * * [t.notDeepEqual()](https://github.com/avajs/ava/blob/main/docs/03-assertions.md#notdeepequalvalue-expected-message)
   * * [t.like()](https://github.com/avajs/ava/blob/main/docs/03-assertions.md#likevalue-selector-message)
   * * [t.throws()](https://github.com/avajs/ava/blob/main/docs/03-assertions.md#throwsfn-expected-message)
   * * [t.notThrows()](https://github.com/avajs/ava/blob/main/docs/03-assertions.md#notthrowsfn-message)
   * * [t.pass()](https://github.com/avajs/ava/blob/main/docs/03-assertions.md#passmessage)
   * * [t.fail()](https://github.com/avajs/ava/blob/main/docs/03-assertions.md#failmessage)
   *
   * Useful for people wanting to fully embrace the power of [power-assert](https://github.com/power-assert-js/power-assert).
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/prefer-power-assert.md
   */
  "prefer-power-assert": Linter.RuleLevel,

  /**
   * Prefer using `t.regex()` to test regular expressions.
   *
   * The AVA [t.regex() assertion](https://github.com/avajs/ava/blob/main/docs/03-assertions.md#regexcontents-regex-message) can test a string against a regular expression.
   *
   * This rule will enforce the use of `t.regex()` instead of manually using `RegExp#test()`,
   * which will make your code look clearer and produce better failure output.
   *
   * This rule is fixable. It will replace the use of `RegExp#test()`, `String#match()`, or `String#search()` with `t.regex()`.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/prefer-t-regex.md
   */
  "prefer-t-regex": Linter.RuleLevel,

  /**
   * Ensure test titles have a certain format.
   *
   * This rule is useful when you want to make sure all test titles match a common pattern to increase readability when tests fail.
   *
   * For example, titles like `'Should throw when invalid.'`, `'Should fail when called.'` or `'Should pass when using any number.'` could be enforced with the following pattern `'^Should (pass|fail|throw) when [\\w ]+\\.$'` (Note the escaped \).
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/test-title-format.md
   */
  "test-title-format": Linter.RuleEntry<[{
    /**
     * A regular expression string to match against the test titles.
     */
    format: string
  }]>,

  /**
   * Ensure tests have a title.
   *
   * Tests should have a title.
   * AVA [v1.0.1](https://github.com/avajs/ava/releases/tag/v1.0.1) and later enforces this at runtime.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/test-title.md
   */
  "test-title": Linter.RuleLevel,

  /**
   * Ensure that `t.throwsAsync()` and `t.notThrowsAsync()` are awaited.
   *
   * When you use the `t.throwsAsync()` and `t.notThrowsAsync()` assertions,
   * you must await the promise they return.
   * If the test function completes before the assertions do, the test will fail.
   *
   * This rule is fixable inside `async` functions.
   * It will insert `await` before `t.throwsAsync()` and t.notThrowsAsync().
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/use-t-throws-async-well.md
   */
  "use-t-throws-async-well": Linter.RuleLevel,

  /**
   * Disallow the incorrect use of `t`.
   *
   * Prevent the use of unknown assertion methods and the access to members
   * other than the assertion methods and `.context`, as well as some known misuses of `t`.
   *
   * This rule is partly fixable.
   * It can fix most misspelled assertion method names and incorrect usages of `.skip`.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/use-t-well.md
   */
  "use-t-well": Linter.RuleLevel,

  /**
   * Ensure test functions use `t` as their parameter.
   *
   * The convention is to have the parameter in AVA's test function be named `t`.
   * Most rules in `eslint-plugin-ava` are based on that assumption.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/use-t.md
   */
  "use-t": Linter.RuleLevel,

  /**
   * Ensure that AVA is imported with `test` as the variable name.
   *
   * The convention is to import AVA and assign it to a variable named `test`.
   * Most rules in `eslint-plugin-ava` are based on that assumption.
   * In a TypeScript file (`.ts` or `.tsx`) AVA can be assigned to a variable named `anyTest`
   * in order to define the types of `t.context` (see [Typing t.context](https://github.com/avajs/ava/blob/main/docs/recipes/typescript.md#typing-tcontext)).
   * Type-only imports (`import type ... from "ava"`) are not linted.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/use-test.md
   */
  "use-test": Linter.RuleLevel,

  /**
   * Ensure that `t.true()`/`t.false()` are used instead of `t.truthy()`/`t.falsy()`.
   *
   * `t.true()` and `t.false()` are stricter in their checks than `t.truthy()` and `t.falsy()`.
   * For example: if you have a function `foo()` which normally returns `true`,
   * but suddenly returns `1` instead, `t.truthy(foo())` would not catch the change, but `t.true(foo())` would.
   * This rule enforces the use of the former when the tested expression is known to result in a boolean value.
   *
   * @link https://github.com/avajs/eslint-plugin-ava/blob/main/docs/rules/use-true-false.md
   */
  "use-true-false": Linter.RuleLevel
}>>
