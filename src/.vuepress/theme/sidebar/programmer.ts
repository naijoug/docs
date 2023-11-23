import { arraySidebar } from "vuepress-theme-hope";

export const programmer = arraySidebar([
  {
    text: "数据结构 + 算法", icon: "infinity", link: "core/", prefix: "core/",
    collapsible: true, children: "structure",
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
    text: "使用工具", icon: "screwdriver-wrench", link: "topic/", prefix: "topic/",
    collapsible: true, children: "structure",
  },
  {
    text: "Awesome", icon: "gift", link: "awesome/", prefix: "awesome/",
    collapsible: true, children: "structure",
  },
])