import type {ESLintRules} from "eslint/rules"

export default {
  // Enforce camelCase for identifiers for consistensy with the language itself
  camelcase: "error",

  // Enforce double quotes by default
  quotes: ["error", "double"],

  // Enforce no semicolon, until it absolutely nrcessary
  semi: ["error", "never"],

  // If semicolon is necessary, enforce to put it at the beginning of the line
  "semi-style": ["error", "first"],

  // Max length per line
  "max-len": ["error", {
    code: 80,
    ignoreComments: true,
    ignoreUrls: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreRegExpLiterals: true
  }],

  // Enforce indent to use 2 spaces per level
  indent: ["error", 2, {
    SwitchCase: 1, // Require one more indent level within `SwitchCase` statements
    flatTernaryExpressions: false,
    ignoredNodes: [
      "PropertyDefinition[decorators]"
    ]
  }],

  // Enforce no comma dangle
  "comma-dangle": ["error", "never"],

  // Prefer `const` over `let`, unless value is mutable
  "prefer-const": ["error", {
    destructuring: "all"
  }],

  // Allow `++` operator
  "no-plusplus": "off",

  // Prohibit spaces inside braces
  "object-curly-spacing": ["error", "never"],

  // Enforce consistent style for object literals
  "object-curly-newline": ["error", {
    consistent: true
  }],

  // Allow to omit arrow parens
  "arrow-parens": ["error", "as-needed"],

  // Avoid unnecessary parenthesis for arrow function body
  "no-confusing-arrow": "off",

  // Allow `await` within loops, because it is useful in many caases
  "no-await-in-loop": "off",

  // Override this rules to allow `for...of` loops, because they're native and prohibit `WithStatement`
  "no-restricted-syntax": ["error", "WithStatement"],

  // Allow param reassign, sometimes it can be useful
  "no-param-reassign": "off",

  // Allow class methods w/o use of `this`
  "class-methods-use-this": "off",

  // Allow use of the `void` operator
  "no-void": "off"
} satisfies Partial<ESLintRules>
