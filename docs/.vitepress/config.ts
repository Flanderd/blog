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
    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-bilibili" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 10a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-6z" />
  <path d="M8 3l2 3" />
  <path d="M16 3l-2 3" />
  <path d="M9 13v-2" />
  <path d="M15 11v2" />
</svg>'
        },
        link: 'https://space.bilibili.com/1619011071/',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'cool link'
      },
      { icon: "github", link: github }],
  },
});
