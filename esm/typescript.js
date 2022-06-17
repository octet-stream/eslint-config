module.exports = {
  extends: ["./esm.js", "../typescript.js"],
  "globals": {
    "NodeJS": true
  },
  rules: {
    // import plugin expects .ts extension for some reason
    // so I disable this rule for .ts, .tsx extensions
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
