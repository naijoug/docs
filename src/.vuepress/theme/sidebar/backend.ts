import { arraySidebar } from "vuepress-theme-hope";
import { Builder } from "./builder";

export const backend = arraySidebar([
  {
    text: "服务器", icon: "server", link: "server/", prefix: "server/",
    collapsible: true, children: [
      Builder.structure("Web 服务器", "server/"),
      Builder.structure("Docker", "docker/"),
    ],
  },
  {
    text: "数据库", icon: "database", link: "database/", prefix: "database/",
    collapsible: true, children: "structure",
  },
  {
    text: "服务框架", icon: "box-open", link: "service/", prefix: "service/",
    collapsible: true, children: "structure",
  },
])