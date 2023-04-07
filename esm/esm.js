module.exports = {
  extends: ["../base.js"],
  rules: {
    "import/extensions": ["error", "ignorePackages"],
    "import/prefer-default-export": 0,

    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": [
        "**/*.test.{js,cjs,mjs,jsx}",
        "**/__helper__/**/*.{js,cjs,mjs,jsx}",
        "**/__fixture__/**/*.{js,cjs,mjs,jsx}",
        "**/__macro__/**/*.{js,cjs,mjs,jsx}"
      ]
    }],

    "ava/no-ignored-test-files": ["error", {
      "files": [
        "src/**/*.{js,cjs,mjs,jsx}"
      ],
      "helpers": [
        "src/**/__macro__/**/*.{js,cjs,mjs,jsx}",
        "src/**/__helper__/**/*.{js,cjs,mjs,jsx}",
        "src/**/__fixture__/**/*.{js,cjs,mjs,jsx}"
      ]
    }]
  }
}
