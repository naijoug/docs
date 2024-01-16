import { arraySidebar } from "vuepress-theme-hope";

export const interview = arraySidebar([
  {
    text: "经典面试题", icon: "hashtag", link: "core/", prefix: "core/",
    collapsible: true, children: "structure",
  },
  {
    text: "iOS", icon: "hashtag", link: "ios/", prefix: "ios/",
    collapsible: true, children: "structure",
  },
  {
    text: "Flutter", icon: "hashtag", link: "flutter/", prefix: "flutter/",
    collapsible: true, children: "structure",
  },
  {
    text: "📚", icon: "hashtag", link: "book/", prefix: "book/",
    collapsible: true, children: "structure",
  },
])