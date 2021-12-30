<script setup>
import FittyText from "./fittyText.vue";
import useFitt from "./useFitt";

useFitt("#fitty");
</script>

<template>
  <div class="componentWrapper">
    <div id="oceanWrapper">
      <div
        v-for="(x, index) in 40"
        class="slotText"
        :key="index"
        ref="slot"
      >
        <FittyText>
          <slot>Type Structure. The DNA of human language</slot>
        </FittyText>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.componentWrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  //position: fixed;
  z-index: 0;
  opacity: 0.2;
}

#oceanWrapper {
  //padding: 40vh 0px;
  transform: scale(8) rotate(45deg);
  transform-origin: center center;
  width: 100%;
  overflow: hidden;
}

#oceanWrapper .slotText {
  opacity: 0.7;
  width: 200%;
  .fittyWrapper {
    width: 100%;
  }
  h1 {
    cursor: default;
    line-height: 0.85em;
    text-transform: uppercase;
  }
}

#oceanWrapper .slotText {
  animation: marquee 120s linear infinite;
}

#oceanWrapper .slotText:nth-child(even) {
  animation: marquee 125s linear infinite reverse;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
</style>
