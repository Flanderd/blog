import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  // 只扫描源码，跳过 dist / cache / public：构建产物里有大量内联 SVG，
  // 扫描它们会撑爆内存（曾导致 build OOM），也会误抓出 "i-1" 之类的假图标。
  content: {
    pipeline: {
      exclude: [
        /node_modules/,
        /[\\/]\.git[\\/]/,
        /\.vitepress[\\/]dist[\\/]/,
        /\.vitepress[\\/]cache[\\/]/,
        /docs[\\/]public[\\/]/,
      ],
    },
  },
  shortcuts: {
    "border-main": "border-gray-400 border-opacity-30",
    "bg-main": "bg-gray-400",
    "bg-base": "bg-white dark:bg-hex-1a1a1a",
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  theme: {
    colors: {
      primary: "var(--vp-c-brand)",
    },
    fontFamily: {
      mono: "var(--vt-font-family-mono)",
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
