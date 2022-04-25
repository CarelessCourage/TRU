<script setup>
import { onMounted, ref, watch } from "vue"
import { unwrap } from "../store/anim.js"

import Convey from "./textpaths/convey.vue"
import textPaths from "../components/textpaths/configs/textpaths";
import ImageComponent from "../components/imageComponent.vue"
import mediaArray from "../store/media.js"

import TextOcean from "../components/text-ocean/TextOcean.vue"
import { duration } from "../components/tiles/utils.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const radius = ref(0);
let cap = ref(null);
let gsapID = null;
function setGsap() {
  if(gsapID) gsapID.scrollTrigger.kill();
  gsapID = gsap.to(radius, {
    scrollTrigger: {
      trigger: cap.value,
      start: 'top bottom',
      end: '100px top',
      scrub: true,
      markers: false
    },
    value: 1000,
  });
}

watch(unwrap, () => {
  setGsap()
})

onMounted(() => {
  setGsap()
  setTimeout(() => {
    setGsap();
  }, duration.value * 500)
})
</script>

<template>
<div class="breaker" @click="setGsap">
  <div class="cap" ref="cap" data-speed="1.3">
    <h1 class="element" data-speed="0.5">breathe</h1>
  </div>
  <div class="base">
    <div class="text" data-speed="0.4">
      <TextOcean/>
      <ImageComponent :item="mediaArray[0]" v-if="false"/>
      <Convey
        v-if="false"
        :textPaths="textPaths[2]"
        tightness="-13%"
        :scoped="{ start: 'top', end: 'bottom' }"
      />
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.breaker {
  width: 100%;
  min-height: 40em;
  height: 40em;
  grid-column: span 6;
  overflow: hidden;
  position: relative;

  .convey {
    padding: 0px;
    position: absolute;
    z-index: -1;
    top: 10px;
    transform: translateY(-5em);
  }

  .cap {
    background-color: var(--foreground);
    width: 100%; min-height: 50em;
    overflow: hidden;

    transform: scale(2);
    position: absolute;
    top: 30em;
    z-index: 1;

    --rounded: calc(v-bind(radius) * 1px);
    border-top-left-radius: var(--rounded);
    border-top-right-radius: var(--rounded);

    h1 {
      line-height: 1.1;
      font-size: 8rem;
      color: var(--background);
      font-variation-settings: 
        "wght" v-bind(radius), 
        "wdth" 100, "CNTR" 0;
    }
  }
  .base {
    background-color: var(--shade);
    width: 100%; min-height: 40em;
    opacity: 1;

    .mediaImg {
      width: 15em;
    }
  }
}
</style>