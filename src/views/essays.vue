<script setup>
import { onMounted } from "vue"
import PaperWrapper from "../components/paperWrapper.vue"
import essays from "../store/essays.js"
import TextOcean from "../components/text-ocean/TextOcean.vue"

import Carusel from "../components/pickCarusel.vue"

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

onMounted(() => {
  gsap.to(window, {duration: 0, scrollTo: "0"});
});

function click(index = 0) {
  setResearch(index)
  router.push({name: 'research'})
}
</script>

<template>
  <PaperWrapper>
    <div class="content padding essays">
      <div class="essay-banner">
        <h1>Essays</h1>
        <p>A collection of essays related to typography. <br>
          Each essay is hardcoded to let each artickle be uniqe</p>
        <div class="ocean">
          <TextOcean/>
        </div>
      </div>
      <Carusel/>
      <div
        v-if="false"
        v-for="(item, index) in essays" 
        :key="index" class="list-item" 
        @click="click(index)"
      >
        <h3 class="list-item-title">{{item.title}}</h3>
      </div>
    </div>
  </PaperWrapper>
</template>

<style lang="scss">
.ocean {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.simple {
  //filter: invert(1) hue-rotate(90deg);   
}

.simple .essays {
  padding: 0px;
  display: grid; gap: 2em;
  grid-template-columns: repeat(1, 1fr);
  background: var(--foreground);

  display: block;

  height: 100%;
  p, h1, h2, h3, h4 {
    color: var(--background);
  }
  //@media (max-width: 400px) { padding: 1em 0em 12em; }
}

.essay-banner {
  position: relative;
  background: var(--shade);
  min-height: 2em;
  width: 100%;
  padding: 3em 3em 3em;
  margin-bottom: 2em;
  p, h1, h2, h3, h4 {
    color: var(--foreground) !important;
  }
}
</style>