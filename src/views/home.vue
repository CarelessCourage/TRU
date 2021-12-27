<script setup>
import Dollhouse from '../components/dollhouse/dollhouse.vue';
import Time from "../components/moons/time.vue"
import Dawn from "../components/moons/dawn.vue"
import Convey from "../components/textpaths/convey.vue"
import TextOcean from "../components/text-ocean/TextOcean.vue"

import textPaths from "../components/textpaths/configs/textpaths";
</script>

<template>
<div class="home">
  <TextOcean>Type Structure. The DNA of human language</TextOcean>

  <Dollhouse v-if="true"/>

  <Convey :textPaths="textPaths[2]" tightness="-13%"/>
  <Convey :textPaths="textPaths[1]" tightness="-13%"/>
  <Convey :textPaths="textPaths[0]" tightness="-13%"/>
  
  <div v-if="true">
    <Time :circleIn="true">
      <h1 class="element">...<br> evolves civilisation <br>...</h1>
    </Time>
    <Time :circleIn="false">
      <h1 class="element">...<br> evolves civilisation <br>...</h1>
    </Time>
    <Dawn>
      <h1 class="element">...<br> corrodes mountains <br>...</h1>
    </Dawn>
  </div>

  <div v-if="true" class="empty"></div>
</div>
</template>

<style lang="scss">
.home {
  background: var(--background);
  width: 100%;
}
</style>