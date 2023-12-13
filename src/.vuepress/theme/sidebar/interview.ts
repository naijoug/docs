import { arraySidebar } from "vuepress-theme-hope";

export const interview = arraySidebar([
  {
    text: "iOS", icon: "hashtag", link: "ios/", prefix: "ios/",
    collapsible: true, children: "structure",
  },
  {
    text: "📚", icon: "", link: "book/", prefix: "book/",
    collapsible: true, children: "structure",
  },
  {
    text: "LeetCode", icon: "hashtag", link: "leetcode/", prefix: "leetcode/",
    collapsible: true, children: "structure",
  },
])