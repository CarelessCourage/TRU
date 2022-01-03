<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import Splitting from "splitting";

const props = defineProps({
  delay: Number
})

onMounted(() => {
  Splitting({target: "[data-slide]"});

  let g = 0.8

  const splitLines = Splitting({target: "[data-line]", by: 'lines' });
  splitLines[0].lines.forEach((line, index) => {
    line.forEach((word) => {
      let d =  (index / 5) + g
      gsap.fromTo(word, {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1.2,
        delay: d,
      });
    })
  });
})
</script>

<template>
  <div class="splitting">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.splitting h1,
.splitting h2,
.splitting h3 {
  .char {
    --delay: calc(var(--char-index) * 0.05s + calc(v-bind(delay) * 1s));
    display: inline-block;
    animation: pulse 0.8s var(--delay) backwards;
  }

  .word {
     --delay: calc(var(--word-index) * 0.05s + calc(v-bind(delay) * 1s));
    display: inline-block;
    animation: pulse 0.8s var(--delay) backwards;
  }
}

@keyframes pulse {
  0% {
    opacity: 0;
    transform: translateY(8rem);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0rem);
  }
}
</style>