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
const wrapWidth = boxes.length * boxSpace

const el = ref(null)
const sw = ref(0)

onMounted(() => {
  const swipeValue = swipe(el, boxSpace)
  const gsapAnim = animation(boxSpace, wrapWidth)

  watch(swipeValue, (swipe) => {
    sw.value = swipe
    let x = swipe / wrapWidth
    gsapAnim.progress(x % 1)
  })
})

function fromCenter(i) {
  const fullRotation = (sw.value + (boxWidth / 2 + boxWidth)) / (boxes.length * boxSpace)
  const percent = (i - (fullRotation % 1) * boxes.length) * 100
  return {
    string: "--fromCenter: " + Math.abs(percent),
    number: Math.abs(percent)
  }
}
</script>

<template>
<div class="el" ref="el">
  <div class="boxes">
    <div 
      class="box" 
      v-for="(box, index) in boxes" 
      :key="index"
    >
      <div :style="fromCenter(index).string" class="container">
        <p class="title">{{box.title}}</p>
        <h3>We cant always be on top of 
        every problem. The problem 
        must unfurl itself over time</h3>
        <p class="redirect">- read more</p>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.el { cursor: pointer; }

.boxes {
  position: relative;
  height: 350px;
  width: 100vw;
}

.box {
  pointer-events: none;
  width: calc(v-bind(boxWidth) * 1px);
  height: 100%;
  max-height: 350px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  .container {
    --center-flat: calc(var(--fromCenter) * 1px - 10px);
    --center: calc(var(--fromCenter) * 1px - 10px);
    position: relative;

    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    border-radius: clamp(0rem, calc(var(--fromCenter) * 1rem), 50rem);

    //background: var(--foreground);
    //color: var(--background);
    //filter: blur(clamp(0rem, calc(var(--fromCenter) * 1px - 10px), 220px));
    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--foreground);
      opacity: clamp(0, calc(var(--fromCenter) - 10), 1);
      transition: 0.4s ease-in-out;
    }
  }

  h3 {
    letter-spacing: clamp(0.2rem, var(--center), 0rem);
    line-height: clamp(3rem, var(--center), 15rem);
    font-size: clamp(3rem, calc(var(--fromCenter) * 1rem), 25rem);

    transition: 0.4s ease-in-out;

    font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 80;
    font-weight: 900;
  }

  p { 
    font-size: 1em;
    font-weight: bold;
    opacity: 0.4;
    &.redirect {
      text-align: right;
      max-width: 100%;
    }
  }
}
</style>