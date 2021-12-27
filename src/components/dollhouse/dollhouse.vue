<script setup>
import { ref } from "vue"
import { useParallax } from '@vueuse/core'

import Layer from './layer.vue'
import house from "./houses"

const paralaxSurface = ref(null)
const { tilt, roll } = useParallax(paralaxSurface)
</script>

<template>
  <div class="dollhouse">
    <div class="spread" ref="paralaxSurface"></div>
    <div class="overflow">
      <Layer
        v-for="(layer, index) in house.chinese"
        :key="index"
        :tilt="tilt"
        :roll="roll"
        :settings="layer"
      >
        <img :src="layer.image" />
      </Layer>
    </div>
  </div>
</template>

<style lang="scss">
.spread {
  position: absolute;
  z-index: 1;
  top: calc(-46vh + var(--size) / 2);
  left: calc(-50vw + var(--size) / 2);
  width: 100vw;
  height: 100vh;
  opacity: 0;
  background: red;
}

.overflow {
  position: relative;
  overflow: hidden;
  border-radius: 2em;
  height: 100%;
  width: 100%;
}

.dollhouse {
  --size: 350px;
  position: relative;
  width: var(--size);
  height: var(--size);
  padding: 2em;
  border-radius: 2em;
  background-color: var(--foreground);
  border: 1px solid var(--foreground);
  transform:
    scale(1)
    rotateX(calc(v-bind(roll) * -60deg))
    rotateY(calc(v-bind(tilt) * -60deg));
}
</style>