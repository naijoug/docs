import { defineUserConfig } from "vuepress";
import theme from "./theme/theme.js";

export default defineUserConfig({
  base: "/docs/",

  lang: "zh-CN",
  title: "文档库",
  description: "一个程序员的个人文档库",
  
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
