<script setup>
import { onMounted } from "vue"
import Splitting from "splitting";

onMounted(() => {
  Splitting();
});
</script>


<template>
<div class="radialtype-wrapper">
  <div class="radialtype">
    <p 
      v-for="(ray, index) in 18" 
      :key="index" 
      class="web"
      :class="'ray-' + ray"
      data-splitting
    >
      sun rays zun rays
    </p>
  </div>
</div>
</template>

<style lang="scss">

@for $size from 1 through 18 {
  .ray-#{$size} {
    //font-size: calc($size * 0.1rem) !important;
    transform: rotate(calc($size * 20deg)) translateX(50px);
  }
}

.radialtype-wrapper {
  //background-color: blue;
  display: flex;
  justify-content: center;
  margin: auto;
  opacity: 0.3;
}

.radialtype {
  width: 20em;
  height: 20em;
  position: relative;
  //background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotate 50s infinite;
}

p {
  width: 15rem;
  position: absolute;
  left: 50%; /* Position X halfway in */
  color: var(--background);
  transform-origin: left;
  //background-color: blue;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.splitting {
  --delay: 0;
  --duration: 3s;
  --percent: 0;
}

.radialtype .char {
  animation: wave var(--duration) ease-in-out var(--delay) infinite alternate;
  animation-fill-mode: backwards;
  --percent: calc(var(--char-index) / var(--char-total));
  --delay: calc(var(--percent) * var(--duration));
}

@keyframes wave {
  0% {
    font-variation-settings: "wght" 100, "wdth" 75, "slnt" 1;
  }
  50% {
    font-variation-settings: "wght" 900, "wdth" 100, "slnt" 12;
  }
  100% {
    font-variation-settings: "wght" 100, "wdth" 75, "slnt" 1;
  }
}
</style>