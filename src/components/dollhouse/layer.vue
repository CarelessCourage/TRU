<script setup>
import { computed, watch, ref } from 'vue'
const props = defineProps({
  tilt: Number,
  roll: Number,
  settings: Object,
})

const getDepth = ref(props.settings.depth)
const absRoll = computed(() => clamp(props.roll, 0.4));

function clamp(value, min = 0, max = 5) {
  return Math.max(min, Math.min(max, value))
}

let blurMod = ref(props.settings.blur);
watch(() => props.roll, (val) => {
  let returned = val * 100;
  if(props.settings.blur < 0) returned = 40 - Math.abs(returned);
  blurMod.value = clamp(returned).toFixed(2) + 'px';
})

</script>

<template>
  <div class="layer">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .layer {
    z-index: 20;
    position: relative;
    filter: blur(calc(v-bind(absRoll) * v-bind(blurMod)));
    transform:
      scale(2)
      translateZ(calc(200px))
      translateX(calc(v-bind(tilt) * calc(v-bind(getDepth) * 1px)))
      translateY(calc(v-bind(roll) * calc(v-bind(getDepth) * -1px)));

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  
  .layer:nth-of-type(1) {
    position: relative;
    z-index: 1;
  }
</style>