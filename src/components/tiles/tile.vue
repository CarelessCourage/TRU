<script setup>
 import router from "../../router"
import { ref, watch, onMounted } from 'vue'
import { gsap } from "gsap";
import { changeDims, limbo, innerText, duration } from "./utils.js"

const props = defineProps({
  path: String
})

const banner = ref(null)
watch(banner, () => {
  changeDims(banner.value)
})

function toggleLimbo(e) {
  innerText.value = e.path[1].innerText
  limbo.value = !limbo.value
  setTimeout(() => {
    router.push(props.path)
  }, duration.value * 1000)
}

const yellow = ref(null)

onMounted(() => {
  gsap.from(yellow.value, { scrollTrigger: {
    trigger: yellow.value,
    start: 'top bottom',
    end: 'bottom top',
    toggleClass: 'enable',
    markers: false
  }});
})
</script>

<template>
  <div
    ref="banner" 
    class="tile"
    @click="toggleLimbo"
    @mouseenter="changeDims"
  >
    <slot></slot>
    <div class="gradient"></div>
    <div class="yellow" ref="yellow"></div>
  </div>
</template>

<style lang="scss">
  //tile
  div.tile {
    border-radius: 0.4rem;
    height: 250px;
    padding: 2em;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    position: relative;
    cursor: pointer;
  }

  //Gradient
  div.tile {
    .gradient {
      border-radius: 0.4rem;
    }

    &:hover .gradient {
      opacity: 1;
    }

    &:active .gradient {
      transform: scale(1.5);
      transition: 0.2s;
    }
  }

  //Text
  div.tile {
    h3 {
      transition: 0.8s;
      position: relative;
      z-index: 2;
    }

    &:hover h3 {
      color: var(--background);
    }

    &:active h3 {
      font-variation-settings: "wght"400, "wdth" 40, "CNTR" 60;
      transition: 0.2s;
    }
  }

  //Background
  .yellow {
    border-radius: 0.4rem;
    position: absolute;
    z-index: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transition: 0.8s;
    background: var(--flavor);
    animation-delay: 0s;
    &.enable {
      animation: slideup 0.8s backwards ease-in-out;
    }
  }

  .tile:nth-child(2) .yellow {
    animation-delay: 0.4s;
  }

  .tile:nth-child(3) .yellow {
    animation-delay: 0.8s;
  }

  @keyframes slideup {
    0% {height: 0;}
    100% {height: 100%;}
  }
  </style>