---
"@octetstream/eslint-config": major
---

Separate AVA rules and plugin form main configs. You'll need to add it to your ESLint config manually:

```diff
{
  extends: [
    "@octetstream/eslint-config/esm",
+   "@octetstream/eslint-config/ava"
  ]
}
```
