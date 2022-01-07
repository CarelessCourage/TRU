<script setup>
import { ref, onMounted } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let variableText = ref(null)
let scroll = ref(0);

onMounted(() => {
  gsap.to(scroll, {
    scrollTrigger: {
      trigger: variableText.value,
      start: "10% 30%",
      end: "160% 30%",
      scrub: true,
      markers: false
    },
    value: 1000,
  });
})
</script>

<template>
  <div class="variableText" ref="variableText">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.variableText {
  --scroll: v-bind(scroll);
  --text-contrast: calc(90 - var(--scroll) * 0.1);
  --text-weight: calc(var(--scroll) * 0.9);
}
</style>