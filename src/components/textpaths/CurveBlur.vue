<script setup>
defineProps({
  blur: Number,
  blurKeep: Number,
})
</script>

<template>
<div class="curve" :style="'--blur-factor: ', blur, ';'">
  <slot></slot>
</div>
</template>

<style scoped>
.curve {
  filter: blur(calc((v-bind(blur) + v-bind(blurKeep)) * 1px));
}
</style>