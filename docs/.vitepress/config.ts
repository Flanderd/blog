import { defineConfig } from "vitepress";
import { back2topPlugin } from 'vitepress-plugin-back2top';
import UnoCSS from "unocss/vite";
// @ts-ignore 纯 JS 模块，没有类型声明
import { renderMath } from "./plugins/math-chtml.mjs";
import { pagefindPlugin } from "vitepress-plugin-pagefind";
import { description, title, github } from "./scripts/meta";
import sidebar from "./scripts/sidebar";
import head from "./scripts/head";
import nav from "./scripts/nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  /* lastUpdated: true, */
  useWebFonts: false,
  cleanUrls: false,
  markdown: {
    lineNumbers: true,
    // 数学公式：$$...$$ 块级 / $...$ 行内；token 由 markdown-it-mathjax3 切分，
    // 渲染规则在下面覆盖为 MathJax CHTML（体积比内联 SVG 小一个量级）
    math: true,
    /**
     * 不写标题的 ::: tip / ::: info / ::: warning / ::: danger 不再显示默认的
     * TIP / INFO / WARNING / DANGER 标题，直接显示内容。
     * 写了标题的（::: tip 提示）照旧显示。
     * details 不处理，因为它必须有 summary 才能展开。
     */
    config(md) {
      for (const type of ["tip", "info", "warning", "danger"]) {
        const key = `container_${type}_open`;
        const original = md.renderer.rules[key];
        if (!original) continue;
        md.renderer.rules[key] = (tokens, idx, options, env, self) => {
          const html = original(tokens, idx, options, env, self);
          if (tokens[idx].info.trim() !== type) return html;
          return html.replace(/<p class="custom-block-title">[\s\S]*?<\/p>\n?/, "");
        };
      }

      // 把 markdown-it-mathjax3 的 SVG 渲染换成 CHTML（MATH_RENDERER=svg 可临时回退）
      if (process.env.MATH_RENDERER !== "svg") {
        md.renderer.rules.math_inline = (tokens, idx) =>
          renderMath(tokens[idx].content, false);
        md.renderer.rules.math_block = (tokens, idx) =>
          renderMath(tokens[idx].content, true);
      }
    },
  },
  head,
  vite: {
    plugins: [
      UnoCSS(),
      pagefindPlugin(),
      back2topPlugin({
        // 可选配置
        top: 450, // 滚动多少距离后出现
        marginBottom: 80, // 距离底部的距离
        iconSize: 20, // 图标大小
      }),
    ],
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
    /* lastUpdatedText: "最后一次更新于", */
    outline: "deep",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    returnToTopLabel: "返回顶部",
    outlineTitle: "大纲",
    darkModeSwitchLabel: "外观",
    sidebarMenuLabel: "目录",
    // editLink: {
    //   pattern: `${github}/blob/master/docs/:path`,
    //   text: "为此页提供修改建议",
    // },
    socialLinks: [
      {
        icon: {
          svg: '<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 0 1 1.415 1.415l-1.829 1.827L18.5 6A3.5 3.5 0 0 1 22 9.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-8A3.5 3.5 0 0 1 5.5 6h2.085L5.757 4.171a1 1 0 0 1 1.415-1.415zM18.5 8h-13a1.5 1.5 0 0 0-1.493 1.356L4 9.5v8a1.5 1.5 0 0 0 1.356 1.493L5.5 19h13a1.5 1.5 0 0 0 1.493-1.356L20 17.5v-8A1.5 1.5 0 0 0 18.5 8zM8 11a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"/></g></svg>'
        },
        link: 'https://space.bilibili.com/1619011071/',
        ariaLabel: 'cool link'
      },
      { icon: "github", link: github }],
    // 脚注
    footer:{
      copyright:"Copyright@ 2026"
    },
  },
});
