import {ESLint} from "eslint"

export default {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/jsx-runtime",
    "./base.js"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    parser: {
      js: "espree",
      jsx: "espree"
    }
  },
  rules: {
    "react/jsx-filename-extension": ["error", {
      extensions: ["jsx"]
    }],
    "react/state-in-constructor": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-multi-spaces": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-fragments": ["error", "element"],
    "react/require-default-props": ["error", {
      "functions": "defaultArguments"
    }],
    "react/function-component-definition": ["error", {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }]
  }
} satisfies ESLint.ConfigData
