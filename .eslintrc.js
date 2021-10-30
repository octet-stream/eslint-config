module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false
  },
  plugins: [
    "promise"
  ],
  extends: [
    "airbnb-base"
  ],
  rules: {
    camelcase: ["error"],
    semi: ["error", "never"],
    quotes: ["error", "double"],
    indent: ["error", 2, {
      SwitchCase: 1
    }],
    "max-len": ["error", {
      code: 80,
      ignoreComments: true
    }],
    "prefer-const": ["error", {
      destructuring: "all"
    }],
    "linebreak-style": ["error", "unix"],
    "eol-last": ["error", "unix"],
    "operator-linebreak": ["error", "before"],
    "require-yield": 0,
    "no-unused-vars": ["warn"],
    "no-console": 0,
    "no-multi-spaces": ["error"],
    "guard-for-in": ["error"],
    "no-empty": ["error"],
    "no-global-assign": ["error"],
    "no-eval": ["error"],
    "no-throw-literal": ["error"],
    yoda: ["error"],
    "no-with": ["error"],
    "no-new-require": ["error"],
    "no-tabs": ["error"],
    "no-trailing-spaces": ["error"],
    "no-inner-declarations": 0,
    "no-class-assign": 0,
    "no-unsafe-finally": ["error"],
    "yield-star-spacing": ["error", "after"],
    "object-curly-spacing": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "no-restricted-syntax": ["error", "WithStatement"],
    "no-unused-expressions": ["error", {
      allowShortCircuit: true,
      allowTernary: true
    }],
    "no-underscore-dangle": ["error", {
      allowAfterThis: true,
      allowAfterSuper: true
    }],
    "no-confusing-arrow": 0,
    "no-await-in-loop": 0,
    "class-methods-use-this": 0,
    "no-param-reassign": 0,
    "comma-dangle": 0,
    "no-return-assign": 0,
    "no-continue": 0,
    "consistent-return": 0,
    "global-require": 0,
    "no-void": 0,

    "func-names": ["error", "as-needed"],
    "function-paren-newline": ["error", "consistent"],
    "space-before-function-paren": ["error", {
      asyncArrow: "always",
      named: "never",
      anonymous: "always"
    }],
    "object-curly-newline": ["error", {
      consistent: true
    }],

    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default-member": 0,
    "import/no-dynamic-require": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0
  }
}
