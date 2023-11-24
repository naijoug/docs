import { arraySidebar } from "vuepress-theme-hope";

export const programmer = arraySidebar([
  {
    text: "数据结构 + 算法", icon: "infinity", link: "core/", prefix: "core/",
    collapsible: true, children: [
      {
        text: "数据结构", icon: "hashtag", link: "data-structure/", prefix: "data-structure/",
        collapsible: true, children: "structure",
      },
      {
        text: "算法", icon: "hashtag", link: "algorithm/", prefix: "algorithm/",
        collapsible: true, children: "structure",
      },
      {
        text: "书籍", icon: "hashtag", link: "book/", prefix: "book/",
        collapsible: true, children: "structure",
      },
    ]
  },
  {
    text: "操作系统", icon: "microchip", link: "system/", prefix: "system/",
    collapsible: true, children: "structure",
  },
  {
    text: "网络知识", icon: "sitemap", link: "network/", prefix: "network/",
    collapsible: true, children: "structure",
  },
  {
    text: "业务知识", icon: "business-time", link: "biz/", prefix: "biz/",
    collapsible: true, children: "structure",
  },
  {
    text: "实用工具", icon: "screwdriver-wrench", link: "tool/", prefix: "tool/",
    collapsible: true, children: "structure",
  },
  {
    text: "Awesome", icon: "gift", link: "awesome/", prefix: "awesome/",
    collapsible: true, children: "structure",
  },
])