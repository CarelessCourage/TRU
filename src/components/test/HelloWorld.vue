<script setup>
import {onMounted, ref} from "vue"

import Splitting from "splitting";
import fitty from "fitty";

const text = ref(null)

defineProps({
  msg: String
})

onMounted(() => {
  Splitting();
  fitty("#fitty");
});
</script>

<template>
  <div class="logo">
    <h2 ref="text">Typograpical</h2>
    <h2 ref="text">Research</h2>
    <h2 ref="text">Unit</h2>
  </div>
  <div class="plate">
    <div class="var">
      <div class="content">
        <h1 id="fitty" ref="text" data-splitting>{{ msg }}</h1>
        <h1 ref="text">true</h1>
      </div>
    </div>
  </div>
</template>

<style>
.plate {
  margin: auto;
  width: 40em;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  position: absolute;
  top: 2em;
  left: 2em;
}

.logo * {
  margin: 0px;
}

.var {
  width: 40em;
  max-width: 40em;
  padding: 3em;
  text-align: right;
  position: relative;
}

.var .content {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

h1 {
  margin: 0px;
}

.splitting {
  --delay: 0;
  --duration: 3s;
  --percent: 0;
}

.var .char {
  font-stretch: condensed;
  font-style: oblique;
  font-weight: 500;
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
