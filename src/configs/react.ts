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
    // Restrict JSX usage to `.jsx` files only.
    "react/jsx-filename-extension": ["error", {
      extensions: ["jsx"]
    }],

    // Allow to create state both as prop and inside of component's constructor
    "react/state-in-constructor": "off",

    // Allow multiple jsx expressions per line
    "react/jsx-one-expression-per-line": "off",

    // Allow multiple spaces between props
    "react/jsx-props-no-multi-spaces": "off",

    // Allow object rest spread for props in jsx expressions
    "react/jsx-props-no-spreading": "off",

    // Force to use `<Fragment>` component directly instead of `<></>` shortcut
    "react/jsx-fragments": ["error", "element"],

    // Prefer standard ES syntax for props defaults
    "react/require-default-props": ["error", {
      functions: "defaultArguments"
    }],

    // Prefer arrow function components and `React.FC`
    "react/function-component-definition": ["error", {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function"
    }]
  }
} satisfies ESLint.ConfigData
