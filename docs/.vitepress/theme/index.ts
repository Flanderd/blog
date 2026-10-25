import type { EnhanceAppContext, Theme } from "vitepress";
import defaultTheme from "vitepress/theme";
import { watch } from "vue";

import './styles/blur.css';
import "uno.css";
import "./styles/rainbow.css";
import "./styles/vars.css";
import "./styles/global.css";

import DefaultTheme from 'vitepress/theme-without-fonts'
import './styles/my-fonts.css';


let pageStyle: HTMLStyleElement | undefined;

function updatePageStyle(value: boolean) {
  if (value) {
    if (pageStyle) return;

    pageStyle = document.createElement("style");
    pageStyle.innerHTML = `
    :root {
      animation: rainbow 60s linear infinite;/* 调节首页渐变色速度 */
    }`;
    document.body.appendChild(pageStyle);
  } else {
    if (!pageStyle) return;

    pageStyle.remove();
    pageStyle = undefined;
  }
}

const theme: Theme = {
  ...defaultTheme,
  enhanceApp({ router }: EnhanceAppContext) {
    if (typeof window === "undefined") return;

    watch(
      () => router.route.data.relativePath,
      () => updatePageStyle(location.pathname === "/"),
      { immediate: true }
    );
  },
};

export default theme;
