<script setup>
import {ref} from "vue";
import Scrollcircle from "./utils/scrollcircle.vue";
import scrollTrigger from "../../utils/scrollTrigger.js"

const props = defineProps({
  circleIn: Boolean
})

let triggerStart = props.circleIn ? 
  "top center" : 
  "center center"

let targetRef = ref(null)
let { scroll } = scrollTrigger(targetRef, triggerStart)
</script>

<template>
  <Scrollcircle 
    :scrollprop="scroll"
    :circleIn="circleIn"
    ref="targetRef">
    <slot></slot>
  </Scrollcircle>
</template>