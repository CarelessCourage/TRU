<script setup>
import { ref, onMounted } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let targetRef = ref(null)
let scroll = ref(0);

onMounted(() => {
  gsap.to(scroll, {
    scrollTrigger: {
      trigger: targetRef.value,
      start: "center center",
      end: "bottom top",
      scrub: true,
      markers: false
    },
    value: 1000,
  });
})
</script>

<template>
  <div class="sticky" ref="targetRef">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.sticky {
  --scroll: v-bind(scroll);
  --text-contrast: calc(90 - var(--scroll) * 0.1);
  --text-weight: calc(900 - var(--scroll) * 0.9);
}

.sticky {
  height: 100vh;
  //background-color: red;

  position: relative;
  top: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>