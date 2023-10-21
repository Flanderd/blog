import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";
import { pagefindPlugin } from "vitepress-plugin-pagefind";
import { description, title, github } from "./scripts/meta";
import sidebar from "./scripts/sidebar";
import head from "./scripts/head";
import nav from "./scripts/nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  appearance: "dark",
  lastUpdated: true,
  useWebFonts: false,
  cleanUrls: false,
  markdown: {
    lineNumbers: true,
  },
  head,
  vite: {
    plugins: [UnoCSS(), pagefindPlugin()],
  },
  locales: {
    root: { label: "简体中文", lang: "zh-CN" },
  },
  themeConfig: {
    search: {
      provider: "local",
    },
    sidebar,
    // https://vitepress.dev/reference/default-theme-config
    nav,
    logo: "/logo.svg",
    lastUpdatedText: "最后一次更新于",
    outline: "deep",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    returnToTopLabel: "返回顶部",
    outlineTitle: "大纲",
    darkModeSwitchLabel: "外观",
    sidebarMenuLabel: "目录",
    editLink: {
      pattern: `${github}/blob/master/docs/:path`,
      text: "为此页提供修改建议",
    },
    socialLinks: [{ icon: "github", link: github }],
  },
});
