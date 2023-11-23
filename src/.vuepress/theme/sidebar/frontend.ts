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
        text: "Cross Platform", icon: "hashtag", link: "cross-platform/", prefix: "corss-platform/",
        collapsible: true, children: "structure",
      },
    ],
  },
  {
    text: "Web 端", icon: "globe", link: "web/", prefix: "web/",
    collapsible: true, children: "structure",
  },
])