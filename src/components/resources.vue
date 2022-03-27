<script setup>
import List from "./list.vue"
import Gallery from "./gallery.vue"
</script>

<template>
<Gallery v-if="false"/>
<List>
  <slot></slot>
</List>
</template>

<style lang="scss">
</style>