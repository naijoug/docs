import { arraySidebar } from "vuepress-theme-hope";
import { Builder } from "./builder";

export const programmer = arraySidebar([
  {
    text: "数据结构 + 算法", icon: "infinity", link: "core/", prefix: "core/",
    collapsible: true, children: [
      Builder.structure("数据结构", "data-structure"),
      Builder.structure("算法", "algorithm"),
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