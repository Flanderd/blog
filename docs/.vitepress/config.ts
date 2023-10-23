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
          svg: '<svg viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#ff24ba" stroke="#ff24ba"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 1 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0zm.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.199 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25z"></path> </g> </g></svg>'
        },
        link: 'https://space.bilibili.com/1619011071/',
        ariaLabel: 'cool link'
      },
      { icon: "github", link: github }],
  },
});
