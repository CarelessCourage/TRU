<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import Splitting from "splitting";

const props = defineProps({
  delay: Number
})

const splitting = ref(null)

onMounted(() => {
  Splitting({target: "[data-slide]"});
  Splitting({target: "[data-line]", by: 'lines' });

  gsap.from(splitting.value, { scrollTrigger: {
    trigger: splitting.value,
    start: 'top bottom',
    end: 'bottom top',
    toggleClass: 'enable',
    markers: false
  }});
})
</script>

<template>
  <div class="splitting" ref="splitting">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.splitting {
  .char {
    --delay: calc(var(--char-index) * 0.05s + calc(v-bind(delay) * 1s));
    display: inline-block;
  }

  .word {
     --delay: calc(var(--word-index) * 0.05s + calc(v-bind(delay) * 1s));
    display: inline-block;
  }
}

.enable.splitting {
   .char {
    animation: pulse 0.8s var(--delay) backwards;
  }

  .word {
    animation: pulse 0.8s var(--delay) backwards;
  }
}

@keyframes pulse {
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0rem);
  }
}
</style>