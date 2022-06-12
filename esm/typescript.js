module.exports = {
  extends: ["./esm.js", "../typescript.js"],
  rules: {
    // import plugin expects .ts extension for some readon
    // so I forbid extensions this rule for .ts, .tsx
    "import/extensions": ["error", "ignorePackages", {ts: "never", tsx: "never"}]
  }
}
