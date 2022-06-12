module.exports = {
  extends: ["airbnb-typescript", "./base.js"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/semi": 0,
    "@typescript-eslint/no-shadow": 0,
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/object-curly-spacing": ["error", "never"],
    "@typescript-eslint/comma-dangle": 0
  }
}
