import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import theme from "./theme/theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
    base: "/docs/",

    lang: "zh-CN",
    title: "知识库",
    description: "一个程序员的个人知识库",

    theme,

    alias: {
        "@theme-hope/components/HomePage": path.resolve(
            __dirname,
            "./theme/components/Home.vue"
        ),
    },

    // Enable it with pwa
    // shouldPrefetch: false,
});
