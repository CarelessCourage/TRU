<script setup>
import { onMounted, ref, watch } from "vue";
import Splitting from "splitting";
import { unwrap } from "../store/anim.js"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  delay: Number
})

const splitting = ref(null)
const enableClass = ref(null)

function scrollRefresh() {
  ScrollTrigger.refresh();
}

watch(unwrap, () => {
  console.log("unwrap");
  scrollRefresh();
})

onMounted(() => {
  Splitting({target: "[data-slide]"});
  Splitting({target: "[data-line]", by: 'lines', whitespace: true });

  gsap.from(splitting.value, { scrollTrigger: {
    trigger: splitting.value,
    start: 'top bottom',
    end: 'bottom 85%',
    onEnter: () => enableClass.value = true,
    onLeaveBack: () => enableClass.value = false,
    markers: false
  }});
})
</script>

<template>
  <div class="splitWrapper" :class="{enable: enableClass}" ref="splitting" @click="scrollRefresh">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.stagger div {
  &:nth-child(2) .char,
  &:nth-child(2) .word {
    --itemStagger: calc(1.7 * 0.5s);
  }
  &:nth-child(3) .char,
  &:nth-child(3) .word {
    --itemStagger: calc(2.2 * 0.5s);
  }
}

.splitWrapper {
  --itemStagger: calc(1 * 0.5s);
  --speed: 0.05s;

  .char {
    opacity: 0; display: inline-block;
    transform: translateY(3rem);
    
    --spanStagger: calc(var(--char-index) * var(--speed));
    --delay: calc(var(--itemStagger) + var(--spanStagger));

    transition: 
      all 0.4s ease-in-out var(--delay), 
      opacity 0.8s ease-in-out calc(var(--delay) + 0.2s);
  }

  .word {
    opacity: 0; display: inline-block;
    transform: translateY(3rem);

    --spanStagger: calc(var(--word-index) * var(--speed));
    --delay: calc(var(--itemStagger) + var(--spanStagger));
    
    transition: 
      all 0.4s ease-in-out var(--delay), 
      opacity 0.2s ease-in-out calc(var(--delay) + 0.2s);

  }
}

.enable.splitWrapper {
   .char {
    opacity: 1;
    transform: translateY(0rem);
  }

  .word {
    opacity: 1;
    transform: translateY(0rem);
  }
}

</style>