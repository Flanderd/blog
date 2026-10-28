<script setup>
import DefaultTheme from 'vitepress/theme-without-fonts'
import FontSettings from './components/FontSettings.vue'
import FontSettingsMenu from './components/FontSettingsMenu.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-content-after>
      <FontSettings />
    </template>
    <template #nav-screen-content-after>
      <FontSettings variant="screen" />
    </template>
  </DefaultTheme.Layout>
  <!-- 把字体选项注入导航栏的「…」菜单，行为与 GitHub 图标一致 -->
  <FontSettingsMenu />
</template>
