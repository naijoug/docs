import { arraySidebar } from "vuepress-theme-hope";
import { Builder } from "./builder";

export const programming = arraySidebar([
  {
    text: "编程语言", icon: "code", link: "lang/", prefix: "lang/", collapsible: true,
    children: [
      Builder.structure("swift", "swift/"),
      Builder.structure("Java", "java/"),
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