<script setup>
import { defineExpose, ref } from 'vue'

const props = defineProps({
  scrollprop: Number,
  circleIn: Boolean
})

function getClass() {
  let circleClass = props.circleIn ? 
    "circleIn" : 
    "circleOut"

  return circleClass
}

const scrollCircle = ref(null)
defineExpose({ scrollCircle })
</script>

<template>
<div class="scrollcircle variable-base" :class="getClass()" ref="scrollCircle">
  <div class="page">
    <slot></slot>
  </div>
</div>
</template>

<style lang="scss">
.variable-base {
  --scroll: v-bind(scrollprop);
  --radius: calc(var(--scroll) * 1px);
  --border: calc(var(--scroll) * 0.005rem)
}

.variable-base.circleOut {
  --text-contrast: calc(var(--scroll) * 0.1);
  --text-weight: calc(var(--scroll) * 0.9);
}

/*.variable-base.circleIn {
  //--text-contrast: calc(90 - var(--scroll) * 0.1);
  //--text-weight: calc(900 - var(--scroll) * 0.9);
}*/

.scrollcircle.circleOut {
  border-radius: 0 0 var(--radius) var(--radius);
  border-bottom: solid var(--background) var(--border);
}

.scrollcircle.circleIn {
  border-radius: var(--radius) var(--radius) 0 0;
  border-top: solid var(--background) var(--border);
}

.scrollcircle {
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  max-height: 100vw;

  background-color: var(--foreground);
  color: var(--background);
}
</style>