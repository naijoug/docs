import { arraySidebar } from "vuepress-theme-hope";
import { Builder } from "./builder";

export const awesome = arraySidebar([
  Builder.structure("通用资源", "general/", "general/", "gift"),
  Builder.structure("人工智能", "ai/", "ai/", "robot"),
  Builder.structure("前端", "frontend/", "frontend/", "display"),
  Builder.structure("后端", "backend/", "backend/", "server"),
  Builder.structure("编程", "programming/", "programming/", "code"),
  Builder.structure("区块链", "blockchain/", "blockchain/", "boxes-stacked"),
  Builder.structure("工具", "tools/", "tools/", "screwdriver-wrench"),
]);
