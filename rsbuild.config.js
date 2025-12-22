import { defineConfig } from "@rsbuild/core";
import { pluginLess } from "@rsbuild/plugin-less";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  source: {
    entry: {
      index: "./index.js",
    },
  },
  output: {
    assetPrefix: isProd
      ? "https://leminhhieu98py.github.io/Frontend-Mentor___Social-links-profile"
      : "/",
  },
  server: {
    port: 7979,
  },
  html: {
    template: "index.html",
    favicon: "public/images/favicon-32x32.png",
  },
  plugins: [pluginLess()],
});
