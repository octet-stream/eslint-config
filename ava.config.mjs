export default {
  failFast: true,
  workerThreads: false, // Disable to make tsx work
  extensions: {
    ts: "commonjs"
  },
  files: [
    "tests/**/*.test.ts"
  ]
}
