import { arraySidebar } from "vuepress-theme-hope";

export const leetcode = arraySidebar([
  {
    text: "Problems", icon: "question", link: "problems/", prefix: "problems/",
    collapsible: true, children: "structure",
  },
  {
    text: "Soltuions", icon: "lightbulb", link: "solutions/", prefix: "solutions/",
    collapsible: true, children: "structure",
  },
  {
    text: "Books", icon: "book", link: "books/", prefix: "books/",
    collapsible: true, children: "structure",
  },
])