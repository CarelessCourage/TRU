<script setup>
import { onMounted } from "vue";

import TextOcean from "../components/text-ocean/TextOcean.vue"
import Goblet from "../components/narrative/goblet.vue"

import Convey from "../components/textpaths/convey.vue"
import textPaths from "../components/textpaths/configs/textpaths";

import useNavigation from "../components/navigation/store";
import { limbo, duration } from "../components/tiles/utils.js";

const { navigation } = useNavigation();
onMounted(() => {
  navigation.value = false;

  setTimeout(() => {
    limbo.value = true
  }, duration.value * 1000)
})
</script>

<template>
<div class="info">
  <TextOcean>Type Structure. The DNA of human language</TextOcean>
  <Goblet/>
</div>
</template>

<style lang="scss">
.info {
  background: var(--background);
  width: 100%;
}
</style>