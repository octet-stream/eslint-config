# @octetstream/eslint-config

## 8.2.5

### Patch Changes

- [`e229d5e`](https://github.com/octet-stream/eslint-config/commit/e229d5ebb69dbc57efd7a03d72d1bdae631f5b08) Thanks [@octet-stream](https://github.com/octet-stream)! - Fix for import/no-extraneous-dependencies rule for qwik configs

## 8.2.4

### Patch Changes

- [`1e7d247`](https://github.com/octet-stream/eslint-config/commit/1e7d247174698d9cf5bcbd010983cedb1a8848f9) Thanks [@octet-stream](https://github.com/octet-stream)! - Fix a typo in qwik configs

## 8.2.3

### Patch Changes

- [`8457dec`](https://github.com/octet-stream/eslint-config/commit/8457dec85939bac21dbc6082d3409632b050b930) Thanks [@octet-stream](https://github.com/octet-stream)! - Add base import rules to qwik config

## 8.2.2

### Patch Changes

- [`673d454`](https://github.com/octet-stream/eslint-config/commit/673d454b2340fc9356d6b794b934d86de6d7fdf3) Thanks [@octet-stream](https://github.com/octet-stream)! - Fixes for qwik configs

## 8.2.1

### Patch Changes

- [`bd0c5c1`](https://github.com/octet-stream/eslint-config/commit/bd0c5c1d299571dfb865dc65e1bb9fe85a5b963f) Thanks [@octet-stream](https://github.com/octet-stream)! - Fix a typo in base qwik config

## 8.2.0

### Minor Changes

- [#21](https://github.com/octet-stream/eslint-config/pull/21) [`d0abbfb`](https://github.com/octet-stream/eslint-config/commit/d0abbfbb09e5d7dcbe7be8ec08a2a93824dab37a) Thanks [@octet-stream](https://github.com/octet-stream)! - Add qwik configs

## 8.1.0

### Minor Changes

- [#18](https://github.com/octet-stream/eslint-config/pull/18) [`c7d94b1`](https://github.com/octet-stream/eslint-config/commit/c7d94b1baeb84742d1decd9dfe6d6379a84e1e51) Thanks [@octet-stream](https://github.com/octet-stream)! - Fixes for `typescript` and `typescript/react` rules

## 8.0.2

### Patch Changes

- [#14](https://github.com/octet-stream/eslint-config/pull/14) [`9677ef4`](https://github.com/octet-stream/eslint-config/commit/9677ef46b4013e645488a47cb94ac621534d5062) Thanks [@octet-stream](https://github.com/octet-stream)! - Disable no-param-reassign, class-methods-use-this and no-void rules

## 8.0.1

### Patch Changes

- [#12](https://github.com/octet-stream/eslint-config/pull/12) [`bd08b57`](https://github.com/octet-stream/eslint-config/commit/bd08b57fc53863ea48328a12193351977e23a10f) Thanks [@octet-stream](https://github.com/octet-stream)! - Move `build` script call from `postinstall` to `prepare`, because it breaks package's installation

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
