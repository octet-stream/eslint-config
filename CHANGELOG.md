# @octetstream/eslint-config

## 8.0.0

### Major Changes

- [#10](https://github.com/octet-stream/eslint-config/pull/10) [`752f746`](https://github.com/octet-stream/eslint-config/commit/752f7469f1b0e121967889915f3530b762d53a13) Thanks [@octet-stream](https://github.com/octet-stream)! - Rewrite configs with TypeScript

- [#10](https://github.com/octet-stream/eslint-config/pull/10) [`f939944`](https://github.com/octet-stream/eslint-config/commit/f9399447fbb0711cba9e3d7023575c1390c259b2) Thanks [@octet-stream](https://github.com/octet-stream)! - Separate AVA rules and plugin form main configs. You'll need to add it to your ESLint config manually:

  ```diff
  {
    extends: [
      "@octetstream/eslint-config/esm",
  +   "@octetstream/eslint-config/ava"
    ]
  }
  ```
