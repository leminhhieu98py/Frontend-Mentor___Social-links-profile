import { defineConfig } from "@rsbuild/core";
import { pluginLess } from "@rsbuild/plugin-less";

export default defineConfig({
  source: {
    entry: {
      index: "./index.js",
    },
  },
  server: {
    port: 7979,
  },
  html: {
    template: "./index.html",
  },
  plugins: [pluginLess()],
});
