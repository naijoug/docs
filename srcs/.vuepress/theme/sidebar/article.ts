import { arraySidebar } from "vuepress-theme-hope";

export const article = arraySidebar([
  {
    text: "程序员", icon: "terminal", link: "programmer/", prefix: "programmer/",
    collapsible: true, children: "structure",
  },
  {
    text: "阅读者", icon: "book", link: "reader/", prefix: "reader/",
    collapsible: true, children: "structure",
  },
  {
    text: "收集器", icon: "bucket", link: "collector/", prefix: "collector/",
    collapsible: true, children: "structure",
  },
])