import { arraySidebar } from "vuepress-theme-hope";

export const frontend = arraySidebar([
  {
    text: "客户端", icon: "mobile", link: "client/", prefix: "client/", collapsible: true,
    children: [
      {
        text: "iOS", icon: "hashtag", link: "ios/", prefix: "ios/",
        collapsible: true, children: "structure",
      },
      {
        text: "Android", icon: "hashtag", link: "android/", prefix: "android/",
        collapsible: true, children: "structure",
      },
      {
        text: "Cross Platform", icon: "hashtag", link: "cross-platform/", prefix: "cross-platform/",
        collapsible: true, children: "structure",
      },
    ],
  },
  {
    text: "Web 端", icon: "globe", link: "web/", prefix: "web/",
    collapsible: true, children: [
      {
        text: "HTML", icon: "hashtag", link: "html/", prefix: "html/",
        collapsible: true, children: "structure",
      },
      "vue",
      "react",
      "browser",
      {
        text: "工具箱", icon: "hashtag", link: "tool/", prefix: "tool/",
        collapsible: true, children: "structure",
      },
    ],
  },
])