module.exports = {
  env: {
    node: true,
    browser: true
  },
  plugins: [
    "promise",
    "ava"
  ],
  extends: [
    "airbnb-base",
    "plugin:promise/recommended",
    "plugin:ava/recommended"
  ],
  rules: {
    camelcase: ["error"],
    semi: ["error", "never"],
    quotes: ["error", "double"],
    "max-len": ["error", {
      code: 80,
      ignoreRegExpLiterals: true,
      ignoreComments: true,
      ignoreUrls: true
    }],
    "prefer-const": ["error", {
      destructuring: "all"
    }],
    "operator-linebreak": ["error", "before"],
    "no-unused-vars": ["warn"],
    "require-yield": 0,
    "no-console": 0,
    "no-plusplus": 0,
    "no-trailing-spaces": ["error"],
    "object-curly-spacing": ["error", "never"],
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
    "object-curly-newline": ["error", {
      consistent: true
    }],

    "import/no-named-as-default-member": 0,
    "import/no-dynamic-require": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": [
        "**/*.test.{js,cjs,jsx}",
        "**/__helper__/**/*.{js,cjs,jsx}",
        "**/__fixture__/**/*.{js,cjs,jsx}",
        "**/__macro__/**/*.{js,cjs,jsx}"
      ]
    }],

    // TODO: Add react-specific config
    "react/jsx-filename-extension": 0,

    "ava/no-ignored-test-files": ["error", {
      "files": [
        "src/**/*.{js,cjs,jsx}"
      ],
      "helpers": [
        "src/**/__macro__/**/*.{js,cjs,jsx}",
        "src/**/__helper__/**/*.{js,cjs,jsx}",
        "src/**/__fixture__/**/*.{js,cjs,jsx}"
      ]
    }]
  }
}
