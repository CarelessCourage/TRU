<script setup>
import { onMounted, ref } from "vue"
import { usePointerSwipe } from '@vueuse/core'

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable);
gsap.registerPlugin(InertiaPlugin);

var proxy = document.createElement("div");

const boxWidth = 700
const boxSpace = boxWidth + 0
const boxes = [
  {title: "one"},
  {title: "two"},
  {title: "three"},
  {title: "four"},
  {title: "five"},
]

onMounted(() => {
  const wrapWidth = boxes.length * boxSpace

  gsap.set('.boxes',{xPercent:-50})
  gsap.set(".box", {
    x: (i) => i * boxSpace
  })

  var mod = gsap.utils.wrap(0, wrapWidth);

  let animation = gsap.to(".box", {
    x: "+=" + wrapWidth,
    duration: 15, ease: "none",
    paused: true,
    repeat: -1,
    modifiers: {
      x: x => mod(parseFloat(x)) + "px"
    },
  });


  Draggable.create(proxy, {
    type: "x",
    trigger: ".boxes",
    throwProps: true,
    inertia:true,
    onDrag: updateProgress,
    onThrowUpdate: updateProgress,
    snap: { 
      x: snapX 
    }
  });

  function snapX(x) {
    return Math.round(x / boxSpace) * boxSpace;
  }

  function updateProgress() {
    let inverted = this.x

    //if (inverted < 0) {
    //  inverted = -inverted
    //}
    
    console.log(inverted, " % -- ", animation.progress(), " /// ", inverted / wrapWidth);
    animation.progress(inverted / wrapWidth);
  }
})

const el = ref(null)
const { distanceX, direction } = usePointerSwipe(el)
</script>

<template>
<div class="boxes" ref="el">
  <div class="box" v-for="(box, index) in boxes" :key="index">
    <p>{{ distanceX }}</p>
  </div>
</div>
</template>

<style lang="scss">
.proxy {
  border: solid 6px blue;
  height: 2em;
  width: 300vw;
  position: relative;
  pointer-events: none;
}

.boxes {
  position: relative;
  height: 250px;
  width: 100vw;
  //display: flex;
  //gap: 1em;
}

.box {
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
    font-size: 3em;
    font-weight: bold;
  }
}
</style>