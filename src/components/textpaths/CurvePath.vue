<script setup>
import { defineExpose, ref } from 'vue'
import utils from "svg-path-reverse"

const props = defineProps({
  scroll: Number,
  pathData: Object
})

var {uniqeId, viewBox, path, size, reverse } = props.pathData;
var reversed = reverse ? utils.reverse(path) : path;

const pathRef = ref(null)
defineExpose({ pathRef })
</script>

<template>
<svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
  <path :id="uniqeId" :d="reversed" ref="pathRef"/>
  <text y="0" :font-size="size">
    <textPath :href="'#' + uniqeId" :startOffset="scroll">
      <slot></slot>
    </textPath>
  </text>
</svg>
</template>

<style scoped>  
path {
  fill: none;
  stroke: var(--foreground);
  stroke: none;
  stroke-miterlimit: 10;
}
</style>