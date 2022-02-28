<script setup>
import { onMounted, ref, watch} from "vue"
import swipe from "./utils/swipe"
import animation from "./utils/animation"

const boxes = [
  {title: "one"},
  {title: "two"},
  {title: "three"},
  {title: "four"},
  {title: "five"},
]

const boxWidth = 700
const boxSpace = boxWidth + 0

const el = ref(null)

onMounted(() => {
  
  const swipeValue = swipe(el, boxSpace)

  const wrapWidth = boxes.length * boxSpace
  const gsapAnim = animation(boxSpace, wrapWidth)

  watch(swipeValue, (swipe) => {
    let x = swipe / wrapWidth
    gsapAnim.progress(x % 1)
  })
})
</script>

<template>
<div class="el" ref="el">
  <div class="boxes">
    <div class="box" v-for="(box, index) in boxes" :key="index">
      <div>
        <p>{{box.title}}</p>
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