import type { EnhanceAppContext, Theme } from "vitepress";
import defaultTheme from "vitepress/theme";
import { nextTick, watch } from "vue";

import './styles/blur.css';
import "uno.css";
import "./styles/rainbow.css";
import "./styles/vars.css";
import "./styles/global.css";

import DefaultTheme from 'vitepress/theme-without-fonts'
import './styles/my-fonts.css';
import './styles/mathjax-chtml.css';
import './styles/reading-settings.css';
import './styles/collapsible.css';
import { setupFold } from './fold-client';
import Layout from './Layout.vue';



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
  Layout,
  enhanceApp({ router }: EnhanceAppContext) {
    if (typeof window === "undefined") return;

    watch(
      () => router.route.data.relativePath,
      async () => {
        updatePageStyle(location.pathname === "/");
        await nextTick();
        setupFold();
      },
      { immediate: true }
    );

    router.onAfterRouteChanged = () => {
      nextTick(() => setupFold());
    };
  },
};

export default theme;
