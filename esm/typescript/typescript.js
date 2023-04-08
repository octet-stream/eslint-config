module.exports = {
  extends: [
    "../esm.js",
    "../../typescript/typescript.js"
  ].map(path => require.resolve(path)),
  rules: {
    // import plugin expects .ts extension for some reason
    // so I disable this rule for .ts, .tsx, .cts, .mts extensions
    "import/extensions": ["error", "ignorePackages", {
      ts: "never", tsx: "never", mts: "never", cts: "never"
    }],
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": [
        "**/*.test.{ts,mts,cts,tsx}",
        "**/__helper__/**/*.{ts,mts,cts,tsx}",
        "**/__fixture__/**/*.{ts,mts,cts,tsx}",
        "**/__macro__/**/*.{ts,mts,cts,tsx}"
      ]
    }],

    "ava/no-ignored-test-files": ["error", {
      "files": [
        "src/**/*.{ts,mts,cts,tsx}"
      ],
      "helpers": [
        "src/**/__macro__/**/*.{ts,mts,cts,tsx}",
        "src/**/__helper__/**/*.{ts,mts,cts,tsx}",
        "src/**/__fixture__/**/*.{ts,mts,cts,tsx}"
      ]
    }]
  }
}
