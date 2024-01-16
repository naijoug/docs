import { navbar } from "vuepress-theme-hope";

export default navbar([
  { // 程序员必备技能
    text: "", link: "/programmer/", prefix: "/programmer/",
    children: [
      { text: "数据结构 + 算法", icon: "infinity", link: "core/" },
      { text: "网络知识", icon: "sitemap", link: "network/" },
      { text: "操作系统", icon: "microchip", link: "system/" },
      { text: "业务知识", icon: "business-time", link: "biz/" },
      { text: "实用工具", icon: "screwdriver-wrench", link: "tool/" },
      { text: "Awesome", icon: "gift", link: "awesome/" }
    ]
  },
  { // 编程知识
    text: "", link: "/programming/", prefix: "/programming/",
    children: [
      { // 编程语言
        text: "", link: "lang/", prefix: "lang/",
        children: [
          "swift/",
          "java/",
          "dart/",
          "python",
        ]
      },
      { // 概念知识
        text: "", link: "topic/", prefix: "topic/",
        children: [
          "paradigm",
          "code-style",
          "design-pattern",
          "cryptology",
        ]
      },
    ]
  },
  { // 前端知识
    text: "", link: "/frontend/", prefix: "/frontend/",
    children: [
      { // 客户端
        text: "", link: "client/", prefix: "client/",
        children: [
          "ios/",
          "android/",
          "flutter/",
        ],
      },
      { // Web 端
        text: "", link: "web/", prefix: "web/",
        children: [
          "html/",
          "vue",
          "react",
        ],
      },
    ],
  },
  { // 后端知识
    text: "", "link": "/backend/", prefix: "/backend/",
    children: [
      "server/",
      "database/",
      "service/",
    ]
  },
  { // 热门技术
    text: "", link: "/trending/", prefix: "/trending/",
    children: [
      "ai/",
      "blockchain/",
      "topic/",
    ]
  },
]);
