module.exports = {
  extends: ["./esm.js", "../typescript.js"],
  "globals": {
    "NodeJS": true
  },
  rules: {
    // import plugin expects .ts extension for some readon
    // so I forbid extensions this rule for .ts, .tsx
    "import/extensions": ["error", "ignorePackages", {ts: "never", tsx: "never"}],
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": [
        "**/*.test.{ts,tsx}",
        "**/__helper__/**/*.{ts,tsx}",
        "**/__fixture__/**/*.{ts,tsx}",
        "**/__macro__/**/*.{ts,tsx}"
      ]
    }]
  }
}
