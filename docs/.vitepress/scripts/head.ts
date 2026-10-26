import type { HeadConfig } from "vitepress";
import { keywords, developerName } from "./meta";

const head: HeadConfig[] = [
  ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
  ["meta", { name: "keywords", content: keywords }],
  ["meta", { name: "author", content: developerName }],
  ["meta", { property: "og:type", content: "article" }],
  ["meta", { name: "application-name", content: developerName }],
  ["meta", { name: "apple-mobile-web-app-title", content: developerName }],
  [
    "meta",
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
  ],
  ["link", { rel: "shortcut icon", href: "/logo.svg" }],
  ["link", { rel: "icon", type: "image/x-icon", href: "/logo.svg" }],
  // 标题字体子集（思源宋体 Bold），提前加载，避免标题先闪一下回退字体
  [
    "link",
    {
      rel: "preload",
      href: "/fonts/source-han-serif-bold.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "",
    },
  ],
  // Callout 楷体、引用块仿宋体积较大（~850KB / ~550KB），不做全局预加载，
  // 只在页面真正用到对应元素时才下载。
  // webfont
  ["link", { rel: "dns-prefetch", href: "https://fonts.googleapis.com" }],
  ["link", { rel: "dns-prefetch", href: "https://fonts.gstatic.com" }],
  [
    "link",
    {
      rel: "preconnect",
      crossorigin: "anonymous",
      href: "https://fonts.googleapis.com",
    },
  ],
  [
    "link",
    {
      rel: "preconnect",
      crossorigin: "anonymous",
      href: "https://fonts.gstatic.com",
    },
  ],
];

export default head;
