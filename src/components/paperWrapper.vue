<script setup>
import { onMounted, ref } from "vue"
import useNavigation from "./navigation/store";
import { setUnwrap, setVelocity, initialLoad } from "../store/anim.js"

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
  setScrollSmoothActiveUpdate()
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

function setScrollSmooth() {
  if(scrollSmooth) scrollSmooth.kill()
  scrollSmooth = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
    onUpdate: self => {
      setVelocity((Math.abs(self.getVelocity()) / 1000) - 0.5);
    }
  });
}
</script>

<template>
<div id="smooth-wrapper">
    <div id="smooth-content">
      <div class="noPaper" ref="page" v-if="props.disablePaper">
        <slot></slot>
      </div>
      <div class="simpleWrapper" v-else>
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
  }

  h1 { margin: 0px; }

  @media (max-width: 400px) {
    padding: 0em 2em 5em;
  }

  @media (max-width: 350px) {
    padding: 0em 1em 5em;
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
</style>