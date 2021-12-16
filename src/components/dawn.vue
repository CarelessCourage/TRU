<script setup>
import Radialtype from "./radialtype.vue";
import scrollTrigger from "../utils"
let { scroll } = scrollTrigger(".circle")
</script>

<template>
<div class="slide-1">
  <div class="sticky">
    <h1 class="element">...<br> corrodes mountains <br>...</h1>
  </div>
  <div class="circle">
    <div class="page">
      <Radialtype/>
      <h3>A new dawn of type <br> on the web</h3>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.slide-1 {
  height: 200vh;
  position: relative;

  h1.element {
    --text-contrast: calc(90 - v-bind(scroll) * 0.1);
    --text-weight: calc(900 - v-bind(scroll) * 0.9);
    --type: clamp(7rem, 15vw, 12rem);
    font-size: var(--type);
    line-height: var(--type);
    text-align: center;
  }
}

.sticky {
  height: 100vh;
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  --radius: calc(v-bind(scroll) * 1px);

  background: var(--background);
  background-color: var(--flavor);
  color: var(--background);
  width: 100vw;
  height: 100vh;
  max-height: 100vw;
  border-radius: var(--radius) var(--radius) 0 0;
  border-top: solid var(--background) 1rem;
  opacity: 1;
  overflow: hidden;

  h3 {
    margin-top: 8rem;
    transform: translateY(calc(v-bind(scroll) * -0.4px));
    text-align: center;
  }

  .radialtype-wrapper {
    margin-top: 32rem;
    transform: scale(3);
  }
}
</style>