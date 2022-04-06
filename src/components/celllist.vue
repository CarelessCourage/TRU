<script setup>
import { ref, onMounted, watch } from "vue"
import { useRouter } from 'vue-router'
import { array, setResearch } from "../store/index.js"

import { useInterval } from '@vueuse/core'
import { gsap } from "gsap";

onMounted(() => {
  const tl = gsap.timeline({repeat: -1, yoyo: true, repeatDelay: 4});
  let from = "random";

  tl.to(".cell", {
    "--wgth": 0,
    "--opacity": 20,
    ease: "power1.inOut",
    stagger: {
      yoyo: true,
      from: from,
      grid: "auto",
      amount: 1,
    }
  });

  tl.to(".cell", {
    "--wgth": 900,
    "--opacity": 0,
    ease: "power1.inOut",
    stagger: {
      yoyo: true,
      from: from,
      grid: "auto",
      amount: 1
    }
  });
})

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const active = ref(randomIntFromInterval(0, (array.length - 1)));
const counter = useInterval(8000)
watch(counter, (val) => {
  active.value = randomIntFromInterval(0, (array.length - 1))
})

const router = useRouter()

function click(index = 0) {
  setResearch(index)
  router.push({name: 'research'})
}

const column = ref(0);

function over(index) {
  column.value = index;
}

</script>

<template>
  <div class="explainer">
    <h1>Accademic Research</h1>
  </div>
  <div class="explainertwo">
    <p>
      This is a <span>list of research publications</span> related to typography. 
      It is gathered by TRU users and curated by the TRU team. 
      Feel free to <span>submit any suggestions</span> along with a short abstract to our official email address: research@tru.com
    </p>
  </div>
  <div class="celllist">
    <div class="redirect">
      <p>go to</p>
      <h3>Research Archive</h3>
    </div>
    <div 
      v-for="(item, index) in array" 
      :key="index"
      class="cell"
      :class="{active: active === index}"
      @mouseenter="over(index)"
    >
      <h2>re<br>search</h2>
      <div class="about">
        <p class="cell-title">{{item.title}}</p>
        <p class="details">{{item.datetime}}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.celllist .redirect {
  grid-column: 4 / span 3;
  //background: var(--shade);
  padding: 1em 2em;
  text-align: right;
  cursor: pointer;
  position: relative;
  //overflow: hidden;

  @media (max-width: 1000px) { grid-column: span 6; }
  @media (max-width: 650px) { grid-column: span 6; }
  @media (max-width: 450px) { grid-column: span 6; }

  p {
    opacity: 0.5;
    font-style: italic;
    font-variation-settings: 
      "wght" 900, 
      "wdth" 100, 
      "CNTR" 90;
    transform: translate(0.7em, 0.3em);
    transition: .4s ease-in-out;
    transform-origin: top right;
  }

  h3 {
    font-size: 1.7rem;
    //position: relative;
    //z-index: 1;
    transition: .4s ease-in-out;
    transform-origin: top right;
    font-variation-settings: 
      "wght" 900, 
      "wdth" 100, 
      "CNTR" 0;
    
  }

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -2;
    top: 0px; left: 0px;
    background-color: var(--flavor);
    opacity: 0.3;
  }

  &:before {
    content: "";
    --size: 0em;
    --half: calc(0px - (var(--size) / 2));
    width: var(--size); height: var(--size);
    position: absolute;
    z-index: -1;
    bottom: var(--half); right: var(--half);
    background-color: var(--background);
    border-radius: 50em;
    transition: .4s ease-in-out;
  }

  &:hover {
    p {
      //font-size: 11rem;
      //letter-spacing: -6px;
      transform: scale(10) translate(0.7em, -0.3em);
      opacity: 0.1;
    }
    h3 {
      //font-size: 3rem;
      transform: scale(2);
      font-variation-settings: 
        "wght" 900, 
        "wdth" 100, 
        "CNTR" 90;
    }
    &:before {
      --size: 30em;
      width: 30em;
      right: -10em;
    }
  }
}

.celllist {
  grid-column: span 6;
  display: grid; gap: 0.2em;
  grid-template-columns: repeat(6, 1fr);
  --wgth: 400;
  --opacity: 1;
}

.explainer {
  grid-column: span 3;
  //h1 { padding-bottom: 20px;}
}

.explainertwo {
  grid-column: 2 / span 3;
  @media (max-width: 900px) { grid-column: 2 / span 5; }
  @media (max-width: 550px) { grid-column: span 6; }
}

.cell {
  cursor: pointer;
  min-width: 0px;
  min-height: 0px;
  //background: var(--flavor);
  position: relative;

  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  transition: 0.4s ease-in-out;

  @media (max-width: 1000px) { grid-column: span 2;}
  @media (max-width: 650px) { grid-column: span 3;}
  @media (max-width: 450px) { grid-column: span 6;}

  &::after {
    content: "";
    position: absolute;
    top: 0px; left: 0px;
    width: 100%; height: 100%;
    z-index: -1;
    background-color: var(--flavor);
    opacity: var(--opacity);
    transition: .4s ease-in-out;
  }

  h2 {
    transition: 0.4s ease-in-out;
    line-height: 0.7;
    opacity: calc(var(--opacity) / 10);
    font-variation-settings: 
        "wght" var(--wgth), 
        "wdth" 900, 
        "CNTR" 90 !important;
  }

  &:hover, &.active  {
    min-width: 20em;
    min-height: 5em;
    h2 {
      font-variation-settings: 
        "wght" 100, 
        "wdth" 900, 
        "CNTR" 90 !important;
    }
  }
}

.cell {
  .about {
    position: absolute;
    top: 120%; left: 0em;
    width: 100%; height: 100%;
    padding: 1em;
    background-color: var(--background);
    color: var(--foreground);
    transition: 0.4s ease-in-out;
    display: flex;
    justify-content: center;
    //align-items: center;
    flex-direction: column;
    overflow: hidden;

    .cell-title, .details {
      transform-origin: top left;
      transition: .4s  ease-in-out;
    }

    &:hover p.cell-title {
      font-variation-settings: 
        "wght" 900, 
        "wdth" 100, 
        "CNTR" 0;
    }

    &:hover p.details {
      opacity: 0.1;
      transform: scale(7) translate(0.8em, -0.6em);
      font-variation-settings: 
        "wght" 900, 
        "wdth" 100, 
        "CNTR" 0;
    }
  }

  --lol: 2;

  &:hover, &.active {
    .about {
      top: 0em; left: 0em;
    }
  }
}

</style>