<script setup>
import TextOcean from '../../text-ocean/TextOcean.vue'
import Test from './test.vue'
</script>

<template>
<Test/>
<TextOcean/>
</template>

<style lang="scss">
@mixin grid($columns: 6, $gutter: 20px) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  grid-gap: $gutter;
}

#app {
  @include grid(8);
  width: 100vw;
}

.grid {
  @include grid;
  grid-column: 2 / span 6;
  //width: 70vw;
  //margin: auto;
  //background-color: rgb(42, 13, 13);
}
</style>