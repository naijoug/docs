import { arraySidebar } from "vuepress-theme-hope";
import { Builder } from "./builder";

export const digest = arraySidebar([
  Builder.structure("每日热点", "daily/", "daily/", "newspaper"),
  Builder.structure("每周总结", "weekly/", "weekly/", "calendar-week"),
  Builder.structure("每月总结", "monthly/", "monthly/", "calendar-days"),
]);
