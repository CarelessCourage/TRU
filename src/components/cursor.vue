<script setup>
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()
</script>

<template>
  <p>{{x}}</p>
  <div class="placer">
    <div class="invert"></div>
  </div>
</template>

<style lang="scss" scoped>
.placer {
  background-color: red;
  width: 500px;
  height: 500px;
  position: fixed;
  z-index: 100;
  top: 0px;
  top: calc(v-bind(y) * 1px);
  left: calc(v-bind(x) * 1px);
}
.invert {
  width: 100%;
  height: 100%;
  backdrop-filter: invert(100%) sepia(90%);
  transform: translate(-50%, -50%);
  transform-origin: center;
  filter: blur(0px);
  border-radius: 100%;
  border: solid 3px var(--flavor);
}
</style>