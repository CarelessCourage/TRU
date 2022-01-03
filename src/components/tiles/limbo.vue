<script setup>
import { toRefs } from "vue";
import { tileDims, limbo, duration, innerText } from "./utils.js"
const {width, height, left, top} = toRefs(tileDims)
</script>

<template>
  <div id="limbo" :class="{'limbo-active': !limbo}">

    <div class="tile">
      <h3 data-slide>{{innerText}}</h3>
      <div class="gradient"></div>
      <div class="yellow"></div>
    </div>

    <div class="background" v-if="false"></div>
  </div>
</template>

<style lang="scss" scope>
  #limbo {
    --top: calc(v-bind(top) * 1px);
    --left: calc(v-bind(left) * 1px);
    --width: calc(v-bind(width) * 1px);
    --height: calc(v-bind(height) * 1px);

    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
  }

  #limbo .tile {
    position: absolute;
    top: var(--top);
    left: var(--left);
    width: var(--width);
    height: var(--height);

    z-index: 2000;
    overflow: visible;
    transition: all 0.8s ease-in-out;
    h3 {color: var(--background); opacity: 0;}
    .yellow {opacity: 0;}
  }

  #limbo.limbo-active {
    pointer-events: painted;
    .tile h3 {opacity: 1;}
    .gradient {opacity: 1;}
    .yellow {opacity: 1; animation: bop calc(v-bind(duration) * 2s) backwards;}
    .background {transform: scale(2);}
  }
  
  #limbo .yellow {
    //position: absolute;
    //top: 0;
    //left: 0;
    width: 10em;
    height: 10em;

    background: var(--flavor);
    border-radius: 50%;

    position: absolute; /* Important */
    top: 50%; /* Position Y halfway in */
    left: 50%; /* Position X halfway in */
    transform: translate(-50%,-50%) scale(0); /* Move to center */
  }

  #limbo .background {
    position: absolute;
    bottom: 0;
    left: 0;
    background: var(--foreground);
    width: 100vw;
    height: 100vw;
    transform: scale(0);
    border-radius: 50em;
    opacity: 1;
    transition: calc(v-bind(duration) * 1s);
  }
  

  @keyframes bop {
    0% {
      opacity: 0;
      transform: translate(-50%,-50%) scale(0);
    }
    5% {opacity: 1;}
    30% {
      transform: translate(-50%,-50%) scale(23);
    }
    70% {
      transform: translate(-50%,-50%) scale(23);
    }
    95% {opacity: 1;}
    100% {
      opacity: 0;
      transform: translate(-50%,-50%) scale(0);
    }
  }
</style>