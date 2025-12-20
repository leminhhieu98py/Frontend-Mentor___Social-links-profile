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
    publicDir: {
      name: "./assets",
    },
  },
  html: {
    template: "./index.html",
    favicon: "./assets/images/favicon-32x32.png",
  },
  plugins: [pluginLess()],
});
