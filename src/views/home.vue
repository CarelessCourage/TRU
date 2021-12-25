<script setup>
import Dollhouse from '../components/dollhouse/dollhouse.vue';
import Structure from "../components/test/structure.vue";
import Time from "../components/moons/time.vue"
import Dawn from "../components/moons/dawn.vue"
import Convey from "../components/textpaths/convey.vue"

import textPaths from "../components/textpaths/configs/textpaths";

import HelloWorld from "../components/test/HelloWorld.vue"
</script>

<template>
<div class="home">
  <Dollhouse v-if="false"/>
  <Structure v-if="false"/>
  <HelloWorld msg="lolkay" v-if="false"/>

  <div v-if="true" class="empty"></div>

  <div class="invert"></div>
  <Convey :textPaths="textPaths[1]"/>
  <Convey :textPaths="textPaths[0]"/>
  
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
.invert {
  width: 500px;
  height: 500px;
  position: fixed;
  z-index: 100;
  top: 0px;
  backdrop-filter: invert(100%) sepia(90%);
  filter: blur(0px);
  border-radius: 100%;
  border: solid 3px var(--flavor);
}


.home {
  background: var(--background);
  width: 100%;
}

.empty {
  height: 100vh;
  background-color: var(--foreground);
}
</style>