<script setup>
defineProps({
  fonts: { type: Array, required: true },
  current: { type: String, default: 'system' },
})

const emit = defineEmits(['choose'])
</script>

<template>
  <div class="fs-list">
    <button
      v-for="f in fonts"
      :key="f.id"
      class="fs-option"
      :class="{ 'is-active': current === f.id }"
      role="menuitemradio"
      :aria-checked="current === f.id"
      @click="emit('choose', f.id)"
    >
      <span class="fs-name">{{ f.label }}</span>
      <span class="fs-sample" :style="{ fontFamily: f.stack }">永字八法</span>
      <span class="fs-check">{{ current === f.id ? '✓' : '' }}</span>
    </button>
  </div>
</template>
