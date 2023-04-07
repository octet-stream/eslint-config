module.exports = {
  extends: ["../react.js", "./typescript.js"],
  rules: {
    "react/prop-types": 0 // Useless rule when using typescript
  }
}
