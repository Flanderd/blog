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
