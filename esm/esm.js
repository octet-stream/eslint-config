module.exports = {
  extends: ["../base.js"],
  rules: {
    "import/extensions": ["error", "ignorePackages"],
    "import/prefer-default-export": 0,

    "ava/no-ignored-test-files": ["error", {
      "files": [
        "src/**/*.{js,mjs,cjs,jsx}"
      ],
      "helpers": [
        "src/**/__macro__/**/*.{js,mjs,cjs,jsx}",
        "src/**/__helper__/**/*.{js,mjs,cjs,jsx}",
        "src/**/__fixture__/**/*.{js,mjs,cjs,jsx}"
      ]
    }]
  }
}
