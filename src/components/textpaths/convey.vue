<script setup>
import CurveBlur from "./CurveBlur.vue";
import CurvePath from "./CurvePath.vue";

import { duration } from "../tiles/utils.js";

import { ref, onMounted } from "vue";
import { scrollPure } from "../../utils/scrollTrigger.js";
import useInertia from "../../utils/inertia.js";
import useDirection from "./useDirection.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  textPaths: Array,
  tightness: String,
  scoped: Object,
})

const svgRef = ref(null);
const scrollMaxValue = 1100;

let scroll = ref(0);
onMounted(() => {
  setGsap();
  setScroll();
})

const { inertia } = useInertia(scroll, scrollMaxValue);
const { pathRef, direction } = useDirection(scroll);

let gsapID = null;

function setGsap() {
  if(gsapID) gsapID.scrollTrigger.kill();
  gsapID = gsap.to(scroll, {
    scrollTrigger: {
      trigger: svgRef.value,
      start: props.scoped.start +  " center",
      end: props.scoped.end + " center",
      scrub: true,
      markers: false
    },
    value: scrollMaxValue,
  });
}

function setScroll() {
  setTimeout(() => {
    setGsap();
  }, duration.value * 500)
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
    overflow: hidden;
    max-width: 100vw;

    svg {
      margin-bottom: v-bind(tightness);
      transition: .1s ease-in-out;
    }
  }
</style>