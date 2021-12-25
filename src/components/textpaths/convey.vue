<script setup>
import CurveBlur from "./CurveBlur.vue";
import CurvePath from "./CurvePath.vue";

import { ref, onMounted } from "vue";
import { scrollPure } from "../../utils/scrollTrigger.js";
import useInertia from "../../utils/inertia.js";

defineProps({
  textPaths: Array
})

const svgRef = ref(null);
const scrollMaxValue = 1100;
const { scroll } = scrollPure(svgRef, scrollMaxValue);
const { inertia } = useInertia(scroll, scrollMaxValue);

const pathRef = ref(null);
const pathLength = ref(null)

onMounted(() => {
  let length = pathRef.value.pathRef.getTotalLength()
  pathLength.value = length
});

const forward = (text) => {
  return (scroll.value - text.offset) * text.speedFactor
}

const backwards = (text) => {
  return (pathLength.value + text.offset) - scroll.value * text.speedFactor
}

const direction = (text) => {
  return text.forward ? 
    forward(text) : 
    backwards(text);
}
</script>

<template>
  <div class="convey" ref="svgRef">
    <CurveBlur
      v-for="(text, index) in textPaths"
      :blur="inertia * text.blurFactor"
      :blurKeep="text.blurMin"
      :key="index"
    >
      <CurvePath
        ref="pathRef"
        :scroll="direction(text)"
        :pathData="text.path"
      >
        {{text.text}}
      </CurvePath>
    </CurveBlur>
  </div>
</template>

<style scoped lang="scss">
  .convey {
    padding: 20em 0px 20em;

    width: 100vw;
    min-height: 100vh;
    background-color: var(--background);

    svg {
      margin-bottom: -13%;
      transition: .1s ease-in-out;
    }
  }
</style>