<script setup>
import { onMounted, ref } from "vue";

import { duration } from "../components/tiles/utils.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const pillbody = ref(null)

const radius = ref(0);
let gsapID = null;
function setGsap() {
  console.log("setGsap: ", pillbody.value);
  if(gsapID) gsapID.scrollTrigger.kill();
  gsapID = gsap.to(radius, {
    scrollTrigger: {
      trigger: pillbody.value,
      start: 'top bottom',
      end: '50px top',
      scrub: true,
      markers: false
    },
    value: 1000,
  });
}

function setScroll() {
  gsap.to(window, {duration: 0, scrollTo: "0"});
  setTimeout(() => {
    gsap.to(window, {duration: 1, scrollTo: "400"});
    //setGsap();
  }, duration.value * 500)
}

onMounted(() => {
  setScroll();
  setGsap()
})
</script>

<template>
  <div class="pillBody" @click="setGsap" ref="pillbody">
    <div class="body paragraphs">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pillBody .content {
  position: relative;
  z-index: 20000;
}

.pillBody  .body {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 45em;
}

.pillBody {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative; z-index: 100000;
  transform: scale(1);
  padding-top: 20rem;
  background: var(--background);

  --round: calc(v-bind(radius) * 1px);
  border-radius: var(--round) var(--round) 0px 0px;

  animation: anim 1.2s backwards ease-in-out;
  padding-top: 15rem;
  min-height: 50rem;
}


@keyframes anim {
  0% {
    border-radius: 0px 0px 0px 0px;
  }
  100% {
    border-radius: 70rem 70rem 0px 0px;
  }
}
</style>