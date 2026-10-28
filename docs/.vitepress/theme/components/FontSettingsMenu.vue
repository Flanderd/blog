<script setup>
import { onMounted, ref } from 'vue'
import FontSettings from './FontSettings.vue'

/**
 * 把「正文字体」这一块塞进 VitePress 自带的三点菜单（VPNavBarExtra），
 * 让字体按钮和 GitHub 图标一样：大屏在栏上，768–1279px 收进「…」，
 * 手机端则在汉堡菜单里（Layout 的 screen 插槽）。
 */
const target = ref(null)

onMounted(() => {
  target.value =
    document.querySelector('.VPNavBarExtra .VPMenu') ||
    document.querySelector('.VPNavBarExtra .menu')
})
</script>

<template>
  <Teleport v-if="target" :to="target">
    <FontSettings variant="menu" />
  </Teleport>
</template>
