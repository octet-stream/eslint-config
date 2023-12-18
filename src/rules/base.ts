import type {ESLintRules} from "eslint/rules"

export default {
  camelcase: "error",
  quotes: ["error", "double"],

  // Semicolons
  semi: ["error", "never"],
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

  indent: ["error", 2, {
    SwitchCase: 1
  }],

  "comma-dangle": ["error", "never"],

  // Prefer `const` over `let`, unless value is mutable
  "prefer-const": ["error", {
    destructuring: "all"
  }],

  // Allow `++` operator
  "no-plusplus": "off",

  // Prohibit spaces inside braces
  "object-curly-spacing": ["error", "never"],

  "object-curly-newline": ["error", {
    consistent: true
  }],

  "arrow-parens": ["error", "as-needed"]
} satisfies Partial<ESLintRules>
