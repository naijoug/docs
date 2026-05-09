import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme/theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/docs/",
  public: path.resolve(__dirname, "./public"),

  lang: "zh-CN",
  title: "文档库",
  description: "一个程序员的个人文档库",

  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: [
          {
            find: /^vue$/,
            replacement: path.resolve(__dirname, "../node_modules/vue/dist/vue.runtime.esm-bundler.js"),
          },
          {
            find: /^vue\/server-renderer$/,
            replacement: path.resolve(__dirname, "../node_modules/vue/server-renderer/index.js"),
          },
        ],
      },
    },
  }),
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
