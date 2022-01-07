<script setup>
import { onMounted, ref } from "vue";

import NewsTile from "../components/newstile.vue";
import TextOcean from "../components/text-ocean/TextOcean.vue"

import Split from "../utils/splitting.vue"
import Tile from "../components/tiles/tile.vue"

import Convey from "../components/textpaths/convey.vue"
import textPaths from "../components/textpaths/configs/textpaths";
import { duration } from "../components/tiles/utils.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const radius = ref(0);

const testObj = { start: 'top', end: 'bottom' }

onMounted(() => {
  gsap.to(window, {duration: 0, scrollTo: "0"});
  setTimeout(() => {
    gsap.to(window, {duration: 1, scrollTo: "400"});
    ScrollTrigger.refresh();
  }, duration.value * 500)

  gsap.to(radius, {
    scrollTrigger: {
      trigger: ".halfcircle",
      start: 'top bottom',
      end: '50px top',
      scrub: true,
    },
     value: 1000,
  });
})
</script>

<template>
  <div class="home">
    <div class="headertile">
      <Convey :textPaths="textPaths[1]" tightness="-13%" :scoped="testObj"/>
      <TextOcean v-if="false"/>
      <div class="gradient"></div>
    </div>
    <div class="circleTile">
      <div class="halfcircle">
        <h1>TRU<br> ... </h1>
        <div class="textpathtest">
          <Convey :textPaths="textPaths[0]" tightness="-13%" :scoped="testObj"/>
        </div>
      </div>
    </div>
    <div class="anotherTileWrapper">
      <div class="content body" v-if="true">
        <div class="anotherTile">
          <Tile path="/info">
            <Split :delay="0.5">
            <h3 data-line>What is typography?</h3>
            </Split>
          </Tile>
        </div>
      </div>
      <div class="textpathtesttwo" v-if="true">
        <Convey :textPaths="textPaths[2]" tightness="-20%" :scoped="{ start: '-30%', end: '30%' }"/>
      </div>
      <div class="content body">
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
  //background: pink;
  overflow: hidden;
  margin-top: -35em;
  margin-bottom: -5em;
  position: relative;
  z-index: 30;
  pointer-events: none;
  max-width: 100vw;
}

.anotherTile {
  width: 100%;
  height: 12rem;
  background: var(--flavor);
  border-radius: 5rem;
  overflow: hidden;
  margin-bottom: 12rem;
  transition: all 0.5s ease;
  &:hover {
    border-radius: 0.4rem;
  }
  .tile {
    height: 100%;
    h3, p {
      //text-align: center;
      position: relative;
      z-index: 20;
    }
  }
}

.home {
  position: relative;
  z-index: 20;
}

.home .content {
  background: var(--background);
  z-index: 20;
}

.anotherTileWrapper {
  position: relative;
  background: var(--background);
  z-index: 20;
  width: 100vw;
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

.circleTile {
  background: var(--flavor);
}

.halfcircle {
  position: relative;
  z-index: 10;
  min-height: 100vh;
  //margin-top: -15rem;
  background: var(--background);
  --radius: calc(v-bind(radius) * 1px);
  border-radius: var(--radius) var(--radius) 0px 0px;

  padding-top: 12rem;

  h1 { 
    text-align: center;
    text-transform: capitalize;
    font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 10;
    //line-height: 3rem;
    padding-bottom: 12rem;
    width: max-content;
    margin: auto;
  }

  p { 
    text-align: center;
    font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 10;
  }
}

#oceanWrapper {
  opacity: 0.2;
}

.headertile {
  position: relative;
  height: 100vh;
  background: var(--flavor);
  //overflow: hidden;
  .convey {
    position: absolute;
    top: 0;
    //margin-top: -25rem;
    transform: translateY(-15rem);
    //height: 20vh;
    overflow: hidden;
  }
}
</style>