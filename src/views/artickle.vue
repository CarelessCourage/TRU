<script setup>
import { onMounted, ref } from "vue";


import Convey from "../components/textpaths/convey.vue"
import Structure from '../components/test/structure.vue';
import useNavigation from "../components/navigation/store";

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
<div class="article">
  <div class="textPath">
    <Convey :textPaths="textPaths[0]" tightness="-13%"/>
  </div>
  <div class="banner" ref="banner">
    <div class="gradient"></div>
      <div class="textPath2">
        <Convey :textPaths="textPaths[0]" tightness="-13%"/>
      </div>
  </div>
  <div class="wrapper">
    <div class="body paragraphs">
      <div class="content">
        <Structure v-if="true"/>
        <div class="vail"></div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.content {
  position: relative;
  z-index: 20000;
}
.body {
  position: relative;
}
.vail {
  background: var(--background);
  position: absolute;
  top: 0;
  //left: 0;
  width: 100%;
  max-width: 40em;
  height: 100%;
  z-index: -1;
  //filter: blur(200px);
}

.article {
  background: var(--background);
  width: 100%;
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    position: relative;
    z-index: 1000;
    padding-top: 20rem;
    background: var(--background);


    filter: blur(22px);
    --round: 70rem;
    border-radius: var(--round) var(--round) 0px 0px;

    animation: anim 1.2s backwards ease-in-out;
    transform: translateY(-50%);
  }
}

@keyframes anim {
  0% {
    border-radius: 0px 0px 0px 0px;
    transform: translate(0em);
  }
  100% {
    border-radius: 70rem 70rem 0px 0px;
    transform: translateY(-50%);
  }
}

.textPath2 {
  position: fixed;
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
  //transform: scale(1.5);
  opacity: 1;
  //filter: blur(6px);
  //background: red;
  animation: inner 1.2s backwards ease-in-out;
  animation-delay: 0.8s;
  transition: 0.8s;
}


@keyframes inner {
  0% {
    //transform: scale(6);
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
  position: relative;
  .gradient {
    //opacity: 1;
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