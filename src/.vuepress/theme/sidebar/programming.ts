import { arraySidebar } from "vuepress-theme-hope";

export const programming = arraySidebar([
  {
    text: "编程语言", icon: "code", link: "lang/", prefix: "lang/", collapsible: true,
    children: [
      { 
        text: "Swift", icon: "hashtag", link: "swift/", prefix: "swift/", 
        collapsible: true, children: "structure"
      },
      { 
        text: "Java", icon: "hashtag", link: "java/", prefix: "java/", 
        collapsible: true, children: "structure"
      },
      "python",
      "javascript",
      "typescript",
      "cpp",
      "ruby",
    ],
  },
  {
    text: "概念知识", icon: "mug-saucer", link: "topic/", prefix: "topic/",
    collapsible: true, children: "structure",
  },
])