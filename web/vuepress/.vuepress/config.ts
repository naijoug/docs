import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import theme from "./theme/theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/docs/",
  public: path.resolve(__dirname, "./public"),

  lang: "zh-CN",
  title: "文档库",
  description: "一个程序员的个人文档库",
  
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
