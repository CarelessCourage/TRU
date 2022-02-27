<script setup>
import { onMounted, ref, watch, computed } from "vue"
import { usePointerSwipe } from '@vueuse/core'

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable);
gsap.registerPlugin(InertiaPlugin);

const boxWidth = 700
const boxSpace = boxWidth + 0
const boxes = [
  {title: "one"},
  {title: "two"},
  {title: "three"},
  {title: "four"},
  {title: "five"},
]

const el = ref(null)
const { distanceX, isSwiping } = usePointerSwipe(el)

let adder = ref(0)

let swipeAdd = ref(0)
let swipeOld = ref(0)

const swipeNew = computed(() => {
  let val = swipeOld.value + swipeAdd.value
  let flooredVal = val < 0 ? 0 : val
  console.log(swipeSnap.value);
  return flooredVal
})

const swipeSnap = computed(() => {
  return Math.round(boxSpace - swipeNew.value % boxSpace)
})

const adderNew = computed(() => {
  let val = swipeNew.value
  return val + adder.value
})

watch(isSwiping, (val) => {
  if (!val) {
    setSwipeValue()
    swipeInertia()
  } else {
    adder.value = 0
  }
})

function setSwipeValue() {
  swipeOld.value = swipeNew.value
  swipeAdd.value = 0
}

let FRICTION_COEF = 0.99;
let velocity = ref(0)
watch(swipeNew, (val, old) => {
  velocity.value = val - old
})

function swipeInertia() {
  if(velocity.value > 0.1) {
    requestAnimationFrame( swipeInertia );
  }
  adder.value += velocity.value / 6;
  velocity.value *= FRICTION_COEF;
  adder.value *= FRICTION_COEF;
}

onMounted(() => {
  const wrapWidth = boxes.length * boxSpace

  gsap.set('.boxes',{x:-boxSpace})
  gsap.set(".box", {
    x: (i) => i * boxSpace
  })

  var mod = gsap.utils.wrap(0, wrapWidth);

  let animation = gsap.to(".box", {
    x: "-=" + wrapWidth,
    duration: 15, ease: "none",
    paused: true,
    repeat: -1,
    modifiers: {
      x: x => mod(parseFloat(x)) + "px"
    },
  });

  watch(distanceX, (newValue) => {
    swipeAdd.value = newValue
  })

  watch(adderNew, (newValue) => {
    let x = newValue / wrapWidth
    animation.progress(x % 1)
  })
})
</script>

<template>
<div class="el" ref="el">
  <div class="boxes">
    <div class="box" v-for="(box, index) in boxes" :key="index">
      <div>
        <p>Adder: {{ adder }} +</p>
        <p>swipeNew: {{ swipeNew }} =</p>
        <p>adderNew: {{ adderNew }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.el { cursor: pointer; }

.boxes {
  position: relative;
  height: 250px;
  width: 100vw;
}

.box {
  pointer-events: none;
  width: calc(v-bind(boxWidth) * 1px);
  height: 100%;
  background: red;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  border-radius: 1em;

  p { 
    text-align: center;
    font-size: 1em;
    font-weight: bold;
  }
}
</style>