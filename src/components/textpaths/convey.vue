<script setup>
import CurveBlur from "./CurveBlur.vue";
import CurvePath from "./CurvePath.vue";

import { ref } from "vue";
import { scrollPure } from "../../utils/scrollTrigger.js";
import useInertia from "../../utils/inertia.js";
import useDirection from "./useDirection.js";

const props = defineProps({
  textPaths: Array,
  tightness: String,
  scoped: Object,
})

const svgRef = ref(null);
const scrollMaxValue = 1100;
const { scroll } = scrollPure(svgRef, scrollMaxValue, props.scoped);
const { inertia } = useInertia(scroll, scrollMaxValue);
const { pathRef, direction } = useDirection(scroll);
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
    //min-height: 100vh;
    //background-color: var(--background);
    //background: pink;

    overflow: hidden;
    max-width: 100vw;

    svg {
      margin-bottom: v-bind(tightness);
      //margin-bottom: -13%;
      transition: .1s ease-in-out;
    }
  }
</style>