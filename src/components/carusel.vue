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

let swipeAdd = ref(0)
let swipeOld = ref(0)

const swipeNew = computed(() => {
  let val = swipeOld.value + swipeAdd.value
  let flooredVal = val < 0 ? 0 : val
  console.log(Math.round(boxSpace - flooredVal % boxSpace));
  return flooredVal
})

watch(isSwiping, (val) => {
  //console.log(val)
  if (!val) {
    swipeOld.value = swipeNew.value
    swipeAdd.value = 0
  }
})

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
    let x = swipeNew.value / wrapWidth

    animation.progress(x % 1)
  })

  function snapX(x) {
    return Math.round(x / boxSpace) * boxSpace;
  }

  function updateProgress() {
    let inverted = this.x
    
    //console.log(inverted, " % -- ", animation.progress(), " /// ", inverted / wrapWidth);
    animation.progress(inverted / wrapWidth);
  }
})
</script>

<template>
<div class="el" ref="el">
  <div class="boxes">
    <div class="box" v-for="(box, index) in boxes" :key="index">
      <div>
        <p>{{ box.title }}</p>
        <p>{{ swipeNew }}</p>
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