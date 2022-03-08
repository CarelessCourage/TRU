<script setup>
import { onMounted, ref } from "vue"

import NewsTile from "../components/newstile.vue"
import Carusel from "../components/carusel.vue"
import HalfCircle from "../components/utils/circle-half.vue"
import StoryTiles from "../components/storyTiles.vue"
import TypeXray from "../components/typexray.vue"

import Convey from "../components/textpaths/convey.vue"
import textPaths from "../components/textpaths/configs/textpaths"
import { duration } from "../components/tiles/utils.js"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const radius = ref(0)

const testObj = { start: 'top', end: 'bottom' }

onMounted(() => {
  gsap.to(window, {duration: 0, scrollTo: "0"})
  setTimeout(() => {
    gsap.to(window, {duration: 1, scrollTo: "800"})
    ScrollTrigger.refresh()
  }, duration.value * 500)

  gsap.to(radius, {
    scrollTrigger: {
      trigger: ".halfcircle",
      start: 'top bottom',
      end: '50px top',
      scrub: true,
    },
     value: 1000,
  })
})
</script>

<template>
  <div class="home">
    <div class="headertile">
      <Convey :textPaths="textPaths[1]" tightness="-13%" :scoped="testObj"/>
      <div class="gradient"></div>
    </div>
    <HalfCircle>
      <TypeXray>Typographic <br> Research <br>Unit</TypeXray>
      <p>A collection of resources on typografy and articles showing off what the web can bring to type</p>
      <div class="textpathtest">
        <Convey :textPaths="textPaths[0]" tightness="-13%" :scoped="testObj"/>
      </div>
    </HalfCircle>
    <div class="anotherTileWrapper">
      <Carusel/>
      <div class="textpathtesttwo">
        <Convey :textPaths="textPaths[2]" tightness="-20%" :scoped="{ start: '20%', end: '180%' }"/>
      </div>
      <div class="body">
        <NewsTile/>
        <NewsTile/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.textpathtest {
  overflow: hidden;
  margin-top: -30em;
  pointer-events: none;
}

.textpathtesttwo {
  overflow: hidden;
  margin-top: -27em;
  margin-bottom: -5em;
  position: relative;
  z-index: 30;
  pointer-events: none;
  max-width: 100vw;
}

.home {
  position: relative;
  z-index: 20;
  --halfCircle-radius: calc(v-bind(radius) * 1px);
}

.anotherTileWrapper {
  position: relative;
  z-index: 20;
  width: 100vw;
  margin-top: -20em;
}

.headertile .gradient {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: red;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  animation: getit 1.2s backwards ease-in-out;
}

@keyframes getit {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

#oceanWrapper {
  opacity: 0.2;
}

.headertile {
  position: relative;
  height: 100vh;
  background: var(--flavor);
  .convey {
    position: absolute;
    top: 0;
    transform: translateY(-15rem);
    overflow: hidden;
  }
}
</style>