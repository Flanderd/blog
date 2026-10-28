<script setup>
import DefaultTheme from 'vitepress/theme-without-fonts'
import FontSettings from './components/FontSettings.vue'
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
</template>
