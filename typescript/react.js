module.exports = {
  extends: [
    "../react.js",
    "./typescript.js"
  ].map(path => require.resolve(path)),
  rules: {
    "react/prop-types": 0, // Useless rule when using typescript
    "react/jsx-filename-extension": ["error", {
      extensions: ["tsx"]
    }],
    "react/require-default-props": 0
  }
}
