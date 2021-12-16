<script setup>
import Dollhouse from '../components/dollhouse/dollhouse.vue';
import Structure from "../components/structure.vue";
import Time from "../components/time.vue"
import Dawn from "../components/dawn.vue"

import HelloWorld from "../components/test/HelloWorld.vue"
</script>

<template>
<div class="home">
  <Dollhouse v-if="false"/>
  <Structure v-if="false"/>
  <HelloWorld msg="lolkay" v-if="false"/>
  <Time v-if="true"/>
  <Dawn v-if="true"/>
  <Time v-if="true"/>
  <div class="empty"></div>
</div>
</template>

<style>
.home {
  background: var(--background);
  width: 100%;
}

.empty {
  height: 100vh;
  background-color: var(--foreground);
}
</style>