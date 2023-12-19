import {defineBuildConfig} from "unbuild"

export default defineBuildConfig({
  declaration: false,
  outDir: "lib",
  entries: [
    {
      input: "src",
      builder: "mkdist",
      format: "cjs",
      ext: "js"
    }
  ]
})
