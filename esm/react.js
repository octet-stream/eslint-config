module.exports = {
  extends: ["../react.js", "./esm.js"].map(path => require.resolve(path))
}
