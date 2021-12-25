<script setup>
import {ref} from "vue";

import Scrollcircle from "./scrollcircle.vue";
import Radialtype from "./radialtype.vue";
import scrollTrigger from "../../utils/scrollTrigger.js"

let targetRef = ref(null)
let { scroll } = scrollTrigger(targetRef, "top bottom")
</script>

<template>
<div class="dawn variable-base">
  <div class="sticky">
    <slot></slot>
  </div>
  <Scrollcircle
    :circleIn="true"
    ref="targetRef"
  >
    <Radialtype/>
    <h3>A new dawn of type <br> on the web</h3>
  </Scrollcircle>
</div>
</template>

<style lang="scss" scoped>
.variable-base {
  --scroll: v-bind(scroll);
  --text-contrast: calc(90 - var(--scroll) * 0.1);
  --text-weight: calc(900 - var(--scroll) * 0.9);
}

.dawn {
  height: 200vh;
  position: relative;
}

.sticky {
  height: 100vh;
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scrollcircle {
  overflow: hidden;

  h3 {
    margin-top: 8rem;
    transform: translateY(calc(var(--scroll) * -0.4px));
    text-align: center;
  }

  .radialtype-wrapper {
    margin-top: 32rem;
    transform: scale(3);
  }
}
</style>