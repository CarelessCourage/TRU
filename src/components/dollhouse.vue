<script setup>
import { ref } from "vue"
import { useParallax } from '@vueuse/core'

import leaves from '../assets/dollhouse/leaves.png'
import foreground from '../assets/dollhouse/foreground.png'
import background from '../assets/dollhouse/gate.png'

import Layer from './layer.vue'

const paralaxSurface = ref(null)
const { tilt, roll } = useParallax(paralaxSurface)
</script>

<template>
  <div class="dollhouse">
    <div class="spread" ref="paralaxSurface"></div>
    <div class="overflow">
      <Layer 
        :tilt="tilt"
        :roll="roll"
        :depth="50"
        :blur="5"
      >
        <img :src="background" />
      </Layer>
      <Layer
        :tilt="tilt" 
        :roll="roll" 
        :depth="75"
        :blur="-10"
      >
        <img :src="foreground" />
      </Layer>
      <Layer
        :tilt="tilt" 
        :roll="roll" 
        :depth="100"
        :blur="-10"
      >
        <img :src="leaves" />
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
  opacity: 0.2;
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
  grid-column: 4 / span 2;
  width: var(--size);
  height: var(--size);
  padding: 2em;
  margin: auto;
  border-radius: 2em;
  background-color: var(--foreground);
  border: 1px solid var(--foreground);
  transform:
    scale(1)
    rotateX(calc(v-bind(roll) * -40deg))
    rotateY(calc(v-bind(tilt) * -40deg));
}
</style>