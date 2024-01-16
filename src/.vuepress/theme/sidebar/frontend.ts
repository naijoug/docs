import { arraySidebar } from "vuepress-theme-hope";
import { Builder } from "./builder";

export const frontend = arraySidebar([
  {
    text: "客户端", icon: "mobile", link: "client/", prefix: "client/", collapsible: true,
    children: [
      Builder.group("iOS", "ios/", [
        Builder.structure("基础知识", "basic/"),
        Builder.structure("进阶知识", "advanced/"),
        Builder.structure("小技巧", "tip/"),
        Builder.structure("面试题", "interview/"),
      ]),
      Builder.structure("Android", "android/"),
      Builder.structure("Flutter", "flutter/"),
    ],
  },
  {
    text: "Web 端", icon: "globe", link: "web/", prefix: "web/",
    collapsible: true, children: [
      Builder.structure("HTML", "html/"),
      "vue",
      "react",
      Builder.page("浏览器", "browser.md"),
      Builder.structure("工具箱", "tool/"),
    ],
  },
])