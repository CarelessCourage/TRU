<script setup>
import { onMounted, onUnmounted  } from "vue";

import HeaderGradient from "../components/headerGradient.vue";
import PillBody from "../components/pillBody.vue";
import Structure from '../components/test/structure.vue';
import PaperWrapper from '../components/paperWrapper.vue';

import { limbodown } from "../components/tiles/utils.js"

onMounted(() => {
  console.log("triggered");
  limbodown.value = true;
})

onUnmounted(() => {
  limbodown.value = false;
})
</script>

<template>
<PaperWrapper :disablePaper="true">
  <div class="article">
    <HeaderGradient/>
    <PillBody>
      <Structure v-if="true"/>
    </PillBody>
  </div>
</PaperWrapper>
</template>

<style lang="scss">

html {
  background: var(--flavor);
}

.article {
  //background: var(--flavor);
  width: 100%;
  padding-top: 100vh;
  position: relative;
  z-index: 1005;
}
</style>