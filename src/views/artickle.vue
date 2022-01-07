<script setup>
import HeaderGradient from "../components/headerGradient.vue";
import PillBody from "../components/pillBody.vue";
import Structure from '../components/test/structure.vue';
</script>

<template>
<div class="article">
  <HeaderGradient/>
  <PillBody>
    <Structure v-if="true"/>
  </PillBody>
</div>
</template>

<style lang="scss">
.article {
  background: var(--background);
  width: 100%;
  padding-top: 100vh;
}
</style>