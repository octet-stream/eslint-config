# @octetstream/eslint-config

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
