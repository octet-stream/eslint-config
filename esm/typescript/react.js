module.exports = {
  extends: [
    "../../typescript/react.js", "./typescript.js"
  ].map(path => require.resolve(path))
}
