import { arraySidebar } from "vuepress-theme-hope";
import { Builder } from "./builder";

export const trending = arraySidebar([
  {
    text: "人工智能", icon: "robot", link: "ai/", prefix: "ai/",
    collapsible: true, children: "structure",
  },
  {
    text: "区块链", icon: "boxes-stacked", link: "blockchain/", prefix: "blockchain/",
    collapsible: true, children: [
      Builder.structure("比特币", "bitcoin/"),
      Builder.structure("以太坊", "ethereum"),
      Builder.structure("EOS", "eos/"),
    ],
  },
  {
    text: "其它技术", icon: "eye", link: "topic/", prefix: "topic/",
    collapsible: true, children: "structure",
  },
])