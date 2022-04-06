<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref, watch} from "vue"
import { swipe, addSwipe } from "./utils/swipe"
import animation from "./utils/animation"

const boxes = [
  {
    title: "Frank Herbert - on typography",  
    quote: "an age of science has come, the artist has been motivated to open his mind to the new forces that shape our lives",
    component: 'herbert',
  },
  {
    title: "Josef Müller-Brockmann - Grid Philosophy",   
    quote: "Working with the grid system means submitting to laws of universal validity. The use of the grid system implies the will to systematize",
    component: 'josef',
  },
  {
    title: "Beatrice Ward - what is typography",  
    quote: "the most important thing about type is that it conveys thought, ideas, images from one mind to other minds.",
    component: 'info',
  },
  {
    title: "Frank Herbert - on typography", 
    quote: "an age of science has come, the artist has been motivated to open his mind to the new forces that shape our lives",
    component: 'herbert',
  },
]

const boxWidth = 401
const boxSpace = boxWidth + 20
const wrapWidth = boxes.length * boxSpace

const el = ref(null)
const sw = ref(0)

onMounted(() => {
  const {snapValue} = swipe(el, boxSpace)
  const gsapAnim = animation(boxSpace, wrapWidth)

  watch(snapValue, (swipe) => {
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
    number: Math.abs(fullRotation)
  }
}

const getxx = ref(0)

function clickDown() {
  getxx.value = sw.value
}

const router = useRouter()

function clickUp(component = 'info') {
  if(Math.abs(getxx.value - sw.value) < 10) {
    router.push({name: component})
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
      @click="clickDown"
      @mouseup="clickUp(box.component)"
    >
      <div :style="fromCenter(index).string" class="container">
        <p class="title details">{{box.title}}</p>
        <h2>{{box.quote}}</h2>
        <p class="redirect">- read more</p>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.el { cursor: pointer; }

.boxes {
  --height: 350px;
  position: relative;
  height: var(--height);
  width: 100vw;
}

.box {
  --center: calc(var(--fromCenter) * 1px - 10px);

  width: calc(v-bind(boxWidth) * 1px);
  height: 100%;
  max-height: var(--height);
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  cursor: pointer;
  z-index: 10000;

  .container {
    &, & *::selection {
      background-color: Transparent;
    }
  }

  h2 {
    transition: 0.2s ease-in-out;
    text-transform: uppercase;
  }

  &:hover h2 {
    //font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 80;
  }

  &:hover p.redirect {
    letter-spacing: 3px;
  }

  p { 
    //font-size: 0.7em;
    //font-weight: bold;
    //opacity: 0.4;
    transition: 0.2s ease-in-out;
    &.redirect {
      text-align: right;
      max-width: 100%;
    }
    &.title, &.redirect {
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }
}


.box.pills {
  /*not in use*/
  .container {
    --center-flat: calc(var(--fromCenter) * 1px - 10px);
    --center: calc(var(--fromCenter) * 1px - 10px);
    position: relative;

    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    border-radius: clamp(0rem, calc(var(--fromCenter) * 1rem), 50rem);

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--flavor);
      opacity: clamp(0, calc(var(--fromCenter) - 10), 1);
      transition: 0.4s ease-in-out;
    }
  }

  h3 {
    letter-spacing: clamp(0.2rem, var(--center), 1rem);
    line-height: clamp(1.5rem, var(--center), 5rem);
    font-size: clamp(1.5rem, calc(var(--fromCenter) * 1rem), 15rem);

    transition: 0.4s ease-in-out;

    font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 80;
    font-weight: 900;
  }

}
</style>