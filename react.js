module.exports = {
  extends: ["airbnb", "airbnb/hooks", "./base"],
  rules: {
    "react/require-default-props": 0, // TOOD: Find out if there's a rule to enforce default params in props
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-multi-spaces": 0,
    "react/jsx-fragments": ["error", "element"],
    "react/jsx-props-no-spreading": 0,
    "react/function-component-definition": ["error", {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }],
  }
}
