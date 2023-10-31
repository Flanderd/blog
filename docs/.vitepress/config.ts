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
    theme: {
        light: "vitesse-dark",
        dark: "vitesse-dark",
      },
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
    socialLinks: [
      {
        icon: {
          svg: '<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 0 1 1.415 1.415l-1.829 1.827L18.5 6A3.5 3.5 0 0 1 22 9.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-8A3.5 3.5 0 0 1 5.5 6h2.085L5.757 4.171a1 1 0 0 1 1.415-1.415zM18.5 8h-13a1.5 1.5 0 0 0-1.493 1.356L4 9.5v8a1.5 1.5 0 0 0 1.356 1.493L5.5 19h13a1.5 1.5 0 0 0 1.493-1.356L20 17.5v-8A1.5 1.5 0 0 0 18.5 8zM8 11a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"/></g></svg>'
        },
        link: 'https://space.bilibili.com/1619011071/',
        ariaLabel: 'cool link'
      },
      { icon: "github", link: github }],
  },
});
