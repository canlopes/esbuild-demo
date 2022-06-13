#!/usr/bin/env node
require("esbuild").build({
  entryPoints: ["index.js"],
  outfile: "dist/main.js",
  bundle: true,
  loader: { ".js": "js" },
  minify: false
})
  .then(() => console.log("⚡ Done Scripts"))
  .catch(() => process.exit(1));
