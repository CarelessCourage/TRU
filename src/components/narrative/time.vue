<script setup>
import { ref, onMounted } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({circleIn: Boolean});

function getClass() {
  let circleClass = props.circleIn ? 
    "cirletop" : 
    "cirlebottom"
  return circleClass
}

let triggerStart = props.circleIn ? 
  { start: "top", end: "bottom" } : 
  { start: "100%", end: "170%" }

let targetRef = ref(null)
let scroll = ref(0);

onMounted(() => {
  gsap.to(scroll, {
    scrollTrigger: {
      trigger: targetRef.value,
      start: triggerStart.start + " bottom",
      end: triggerStart.end + " top",
      scrub: true,
      markers: false
    },
    value: 1000,
  });
})
</script>

<template>
  <div
    class="time"
    :class="getClass()"
    ref="targetRef">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.gsap-marker-end, 
.gsap-marker-start {
  z-index: 9999999999999999999999999999999999999999999999 !important;
}

.time {
  position: relative;
  overflow: hidden;
  z-index: 1;

  --scroll: v-bind(scroll);
  --radius: calc(var(--scroll) * 1px);
  --border: calc(var(--scroll) * 0.005rem);

  --text-contrast: calc(90 - var(--scroll) * 0.1);
  --text-weight: calc(var(--scroll) * 0.9);

  background-color: var(--foreground);
  color: var(--background);

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 50rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
}

.time.cirlebottom {
  border-radius: 0 0 var(--radius) var(--radius);
  border-bottom: solid var(--background) var(--border);
}

.time.cirletop {
  border-radius: var(--radius) var(--radius) 0 0;
  border-top: solid var(--background) var(--border);
}

</style>