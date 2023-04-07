module.exports = {
  extends: ["airbnb-typescript", "./base.js"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  settings: {
    "import/resolver": {
      typescript: {}
    }
  },
  rules: {
    "@typescript-eslint/semi": 0,
    "@typescript-eslint/no-shadow": 0,
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/object-curly-spacing": ["error", "never"],
    "@typescript-eslint/comma-dangle": 0,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": ["error", {
      "argsIgnorePattern": "^_"
    }],

    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": [
        "**/*.test.{ts,tsx}",
        "**/__helper__/**/*.{ts,tsx}",
        "**/__fixture__/**/*.{ts,tsx}",
        "**/__macro__/**/*.{ts,tsx}"
      ]
    }],

    "ava/no-ignored-test-files": ["error", {
      "files": [
        "src/**/*.{ts,tsx}"
      ],
      "helpers": [
        "src/**/__macro__/**/*.{ts,tsx}",
        "src/**/__helper__/**/*.{ts,tsx}",
        "src/**/__fixture__/**/*.{ts,tsx}"
      ]
    }]
  }
}
