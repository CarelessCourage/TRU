<script setup>
import CurateBtnPanel from "../components/curateBtnPanel.vue"
import PaperWrapper from "../components/paperWrapper.vue"
import { store } from "../store/index.js"
import { onMounted } from "vue";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

onMounted(() => {
  gsap.to(window, {duration: 1, scrollTo: "0"});
})

const img = "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
</script>

<template>
<PaperWrapper>
  <div class="infoxxx">
    <h2 class="title">{{store.research.title}}</h2>
    <img :src="store.research.img" alt="{{store.research.title}}" data-speed="1.2" />
    
    <div class="contentx">
      <p>
        Compiling and curating collections of typographic research and resources; 
        celebrating the history of type and the cutting edge of type on the web
        Compiling and curating collections of typographic research and resources; 
        celebrating the history of type and the cutting edge of type on the web
      </p>
    </div>

    <div class="contentx two">
      <h4>
        Compiling and curating collections of typographic research and resources; 
        celebrating the history of type and the cutting edge of type on the
      </h4>
    </div>

    <div class="contentx three">
      <p>
        Compiling and curating collections of typographic research and resources; 
        celebrating the history of type and the cutting edge of type on the web
        Compiling and curating collections of typographic research and resources; 
        celebrating the history of type and the cutting edge of type on the web
      </p>

      <div class="curWrapper" data-speed="0.8">
        <CurateBtnPanel :item="store"/>
      </div>
    </div>
  </div>
</PaperWrapper>
</template>

<style lang="scss">

.infoxxx .curateBtnPanel {
  margin-top: 4em;
  .gradient, .yellow {
    opacity: 0;
    animation: fadeIn 1.2s backwards ease-in-out;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.infoxxx {
  padding: 3em 3em 3em;
  display: grid;
  grid-template-columns: 2fr 1fr 3fr 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  row-gap: 1rem;
  column-gap: 2em;
  min-height: 50em;

  @media (max-width: 750px) { 
    grid-template-columns: 1fr 1fr;
  }

  .title {
    transform: scale(3);
    transform-origin: top left;
    opacity: 0.1;
    padding-bottom: 1em;

    grid-column: span 2;
    text-transform: capitalize;
    font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 0 !important;

    @media (max-width: 750px) { 
      grid-column: span 2;
    }
  }

  img {
    grid-column: 3/span 3;
    //grid-row: 3;
    object-fit: cover;
    height: 60vh;
    width: 100%;
    position: relative;
    z-index: -1;

    @media (max-width: 750px) { 
      grid-column: span 2;
    }
  }

  h3 {
    grid-column: span 5;
    @media (max-width: 750px) { 
      grid-column: span 2;
    }
  }

  .contentx {
    //grid-row: 2;
    grid-column: span 2;

    &.two {
      font-size: 1.2rem;
      font-variation-settings: "wght" 900, "wdth" 200, "CNTR" 90 !important;
    }

    &.three {grid-row: 3;}
    p { width: 100%;}

    @media (max-width: 750px) { 
      grid-column: span 2;
    }
  }
}

</style>