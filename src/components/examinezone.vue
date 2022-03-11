<script setup>
import {ref} from "vue"
import { useMouse, useMousePressed, onKeyStroke } from '@vueuse/core'

const { pressed } = useMousePressed()
const { x, y } = useMouse()
const shift = ref(false)

onKeyStroke('Shift', (e) => {
  console.log('Shift key down')
  shift.value = true
})

onKeyStroke('Shift', (e) => {
  console.log('Shift key up')
  shift.value = false
}, { eventName: 'keyup' })
</script>

<template>
<div class="examinezone" :class="{pressed: pressed, shift: shift}"></div>
</template>

<style lang="scss">
.examinezone {
  --size: 0em;
  height: var(--size); width: var(--size);
  border-radius: 100%;
  //background-color: var(--foreground);

  position: absolute;
  z-index: 100000000000;
  top: 0px;
  top: calc(v-bind(y) * 1px);
  left: calc(v-bind(x) * 1px);

  backdrop-filter: invert(100%) hue-rotate(90deg); 
  transform: translate(-50%, -50%);
  transform-origin: center;
  //filter: blur(10px);

  transition: transform 0.8s ease-in-out;
  pointer-events: none;

  &.pressed {
    transform: translate(-50%, -50%) scale(20);
    transition: transform 0.2s ease-in-out;
  }

  &.shift {
    --size: 12em;
  }
}
</style>