<script setup>
import { onMounted, ref } from "vue"
import useNavigation from "./navigation/store";
import { setUnwrap, setVelocity, initialLoad, velocity } from "../store/anim.js"

import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const props = defineProps({
  disablePaper: Boolean
})

const { navigation } = useNavigation();
const page = ref(null)
let scrollSmooth = null
let reqAnimationId;

onMounted(() => {
  setUnwrap(false)
  navigation.value = false;

  if(!props.disablePaper) {
    page.value.addEventListener("webkitAnimationEnd", click);
  }
  
  setScrollSmooth()
  //setScrollSmoothActiveUpdate()

  document.fonts.ready.then(function () {
    console.log('All fonts in use by visible text have loaded.');
    setScrollSmooth()
  });

  setTimeout(() => {
    ScrollTrigger.refresh();
    setScrollSmooth()
    console.log("refresh")
  }, 3000)
})

function click(e) {
  if(e.animationName === "paperUnwrap") {
    setUnwrap(true)
    cancelAnimationFrame(reqAnimationId)
    ScrollTrigger.refresh();
    initialLoad.value = false
  }
}

function setScrollSmoothActiveUpdate() {
  ScrollTrigger.refresh();
  reqAnimationId = requestAnimationFrame(setScrollSmoothActiveUpdate)
}

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

function setScrollSmooth() {
  if(scrollSmooth) scrollSmooth.kill()
  scrollSmooth = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
    onUpdate: self => {
      let velocity = (Math.abs(self.getVelocity()) / 1000) / 2

      let binaryVel = clamp(velocity, 0, 1)
      let bvResult = 0
      
      if(binaryVel < 0.5) {
        bvResult = 0
      } else {
        bvResult = 1
      }

      setVelocity(bvResult);
    }
  });
}
</script>

<template>
<div id="smooth-wrapper">
  <div id="smooth-content">
      <div class="noPaper" ref="page" v-if="disablePaper" :style="'filter: invert(' + velocity + ') hue-rotate(' + velocity * 100 + 'deg);'">
        <slot></slot>
      </div>
      <div class="simpleWrapper" :style="'filter: invert(' + velocity + ') hue-rotate(' + velocity * 100 + 'deg);'" v-else>
        <div class="simple" :class="{loadIn: initialLoad}" ref="page">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.simple, .simpleWrapper {
  position: relative;
  z-index: 0;
}

.simpleWrapper {
  background: var(--foreground);
  padding: 2em 3em 0em 3em;
  min-height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;

  animation: colorShift 1.2s backwards ease-in-out;
  animation-delay: 0.8s;

  transition: 1.5s ease-in-out;

  //--vel: v-bind(velocity);
  //filter: invert(var(--vel)) hue-rotate(90deg);

  &::after{
    content: ""; opacity: 0;
    position: fixed; z-index: -1;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: radial-gradient(circle at 50% 100%,black,var(--foreground),#0075c3,#fff3c7);
    animation: gradientShift 2s cubic-bezier(0.72, 0.01, 0.32, 0.99);
    animation-fill-mode: forwards;
    animation-delay: 0s;
  }

  @media (max-width: 800px) {
    padding: 0px;
  }
}


@keyframes colorShift {
  0% {
    background: var(--flavor);
  }
  100% {
    background: var(--foreground);
  }
}

@keyframes gradientShift {
  0% {opacity: 0;}
  50% {opacity: 1;}
  100% {opacity: 0;}
}

.simple {
  background: var(--background);
  overflow: hidden;

  overflow: hidden;
  width: 100%;
  
  &.loadIn {
    animation: paperUnwrap 5s cubic-bezier(0.72, 0.01, 0.32, 0.99);
    animation-fill-mode: backwards;
    //animation-delay: 2s;
    //animation-play-state: paused;
    h1 {
      animation: titleGrow 5s cubic-bezier(0.72, 0.01, 0.32, 0.99);
    }
  }

  h1 { margin: 0px; }

  @media (max-width: 400px) {
    padding: 0em 2em 5em;
  }

  @media (max-width: 350px) {
    padding: 0em 1em 5em;
  }
}

@keyframes titleGrow {
  0% {
   font-size: 1rem;
  }
  70% {
   font-size: clamp(1rem, 6vw, 3rem);;
  }
  100% {
    font-size: clamp(2rem, 6vw, 6rem);
  }
}



@keyframes paperUnwrap {
  0% {
    transform: translateY(40vh);
    width: 0%;
    max-height: 2em;
  }
  25% {
    width: 50%;
    max-height: 2em;
  }
  30% {
    transform: translateY(40vh);
    max-height: 2em;  
  }
  50% {
    transform: translateY(20vh);
    max-height: 19em;
  }
  55% {
    transform: translateY(20vh);
    width: 50%;
    max-height: 19em;
  }
  100% {
    transform: translateY(0em);
    width: 100%;
    max-height: 500em;
  }
}


.tpt {
  position: absolute;
  left: 0px; top: 60vh;
  opacity: 0.4;
  z-index: -1;
}

  .narrativex {
    position: relative;
    padding: 3em 3em 0em;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr 1fr 1fr 1fr;
    row-gap: 1rem;
    column-gap: 2em;
    overflow: hidden;

    & > *:not(.empty) {
      background-color: var(--background);
    }

    @media (max-width: 1000px) {
      grid-template-columns: 1fr !important;
      & > * {
        grid-column: span 1 !important;
      }
    }

    .title {
      grid-column: span 5;
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    h3 {
      line-height: 1;
      //margin-bottom: 10px;
    }

    p.full {
      grid-column: 1 / -1;
    }

    p.enlargen {
      grid-column: span 5;
      font-size: 2.5rem;
      line-height: 1.4;
      &.two {
        grid-column: span 6;
        span {
          font-size: 3.5rem;
          line-height: 0.8;
        }
      }
    }
    p.enlargenminus {
      grid-column: 2 / span 4;
      //font-size: 2rem;
      //line-height: 1.4;
    }
    p.enlargenpure {
      grid-column: 2 / span 4;
      //font-size: 2rem;
      //line-height: 1.4;
    }

    p {
      grid-column: span 2;
      font-size: 1rem;
      span {
        //font-size: 1rem;
        font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 90;
        background: var(--flavor);
      }
    }

    p.three {
      grid-column: span 3;
      font-size: 1rem;
    }
  }
</style>