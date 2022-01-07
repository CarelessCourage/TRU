<script setup>
import { onMounted, ref } from "vue";

import useNavigation from "../components/navigation/store";

import Convey from "../components/textpaths/convey.vue"
import textPaths from "../components/textpaths/configs/textpaths";
import { changeDims, limbo, duration } from "../components/tiles/utils.js";

const banner = ref(null)
const { navigation } = useNavigation();
onMounted(() => {
  navigation.value = false;
  changeDims(banner.value)

  setTimeout(() => {
    limbo.value = true
  }, duration.value * 1000)
})
</script>

<template>
  <div class="headerGradient">

    <div class="textPath" v-if="true">
      <Convey :textPaths="textPaths[1]" tightness="-13%" :scoped="{ start: 'top', end: 'bottom' }" v-if="true"/>
    </div>
    <div class="banner" ref="banner" v-if="true">
      <div class="gradient"></div>
        <div class="textPath2">
          <Convey :textPaths="textPaths[0]" tightness="-13%" :scoped="{ start: 'top', end: 'bottom' }" v-if="true"/>
        </div>
    </div>

  </div>
</template>

<style lang="scss">
.headerGradient {
  height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  background: var(--flavor);
  margin: 0px;
  top: 0px;
  left: 0px;
  position: fixed;
  overflow: hidden;
}

.textPath2 {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-20rem);
  animation: inner 1.2s backwards ease-in-out;
  animation-delay: 0.8s;
  max-width: 100vw;
  overflow: hidden;
}

.textPath {
  max-width: 100vw;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  opacity: 1;
  animation: inner 1.2s backwards ease-in-out;
  animation-delay: 0.8s;
  transition: 0.8s;
}


@keyframes inner {
  0% {
    opacity: 0;
    filter: blur(6px);
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}

.banner { 
  width: 100vw;
  height: 100vh;
  background: var(--background);
  background: var(--flavor);
  position: fixed;
  top: 0;
  left: 0;
  .gradient {
    animation: upeer 1.2s backwards ease-in-out;
  }
}

@keyframes upeer {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>