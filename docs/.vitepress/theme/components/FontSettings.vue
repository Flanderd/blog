<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import FontOptionList from './FontOptionList.vue'

defineProps({
  // nav：导航栏按钮（大屏）；menu：三点菜单里的一块；screen：手机菜单里的一块
  variant: { type: String, default: 'nav' },
})

const FONTS = [
  { id: 'system', label: '系统默认', stack: 'var(--vp-font-family-base)' },
  { id: 'lxgw', label: '霞鹜文楷', stack: "'LXGWWenKai', 'KaiTi', serif" },
  { id: 'kaiti', label: '楷体', stack: "'KaitiSubset', 'KaiTi', serif" },
  { id: 'fangsong', label: '仿宋', stack: "'FangSongSubset', 'FangSong', serif" },
]

const current = ref('system')
const open = ref(false)
const root = ref(null)

function setFont(id, persist = true) {
  current.value = id
  const el = document.documentElement
  if (id === 'system') delete el.dataset.bodyFont
  else el.dataset.bodyFont = id
  if (persist) {
    try {
      localStorage.setItem('site:bodyFont', id)
    } catch {}
    window.dispatchEvent(new CustomEvent('site:font-change', { detail: id }))
  }
}

function choose(id) {
  setFont(id)
  open.value = false
}

function onFontChange(e) {
  current.value = e.detail
}

function onClickOutside(e) {
  if (root.value && !root.value.contains(e.target)) open.value = false
}

onMounted(() => {
  let saved = 'system'
  try {
    saved = localStorage.getItem('site:bodyFont') || 'system'
  } catch {}
  setFont(saved, false)
  window.addEventListener('site:font-change', onFontChange)
  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('site:font-change', onFontChange)
  document.removeEventListener('click', onClickOutside)
})
</script>

<template>
  <!-- 手机菜单 / 三点菜单里的区块 -->
  <div
    v-if="variant !== 'nav'"
    class="font-settings"
    :class="variant === 'menu' ? 'is-menu' : 'is-screen'"
  >
    <p class="fs-title">正文字体</p>
    <FontOptionList :fonts="FONTS" :current="current" @choose="choose" />
  </div>

  <!-- 大屏导航栏按钮 + 下拉面板 -->
  <div v-else ref="root" class="font-settings fs-inline">
    <button
      class="fs-trigger"
      :class="{ 'is-open': open }"
      :aria-expanded="open"
      aria-label="阅读设置"
      title="阅读设置"
      @click.stop="open = !open"
    >
      Aa
    </button>
    <div v-if="open" class="fs-panel" role="menu">
      <p class="fs-title">正文字体</p>
      <FontOptionList :fonts="FONTS" :current="current" @choose="choose" />
    </div>
  </div>
</template>
