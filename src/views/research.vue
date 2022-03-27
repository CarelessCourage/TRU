<script setup>
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
    <h4>{{store.research.title}}</h4>
    <img :src="store.research.img" alt="{{store.research.title}}" />
    
    <div class="contentx">
      <p>
        Compiling and curating collections of typographic research and resources; 
        celebrating the history of type and the cutting edge of type on the web
        Compiling and curating collections of typographic research and resources; 
        celebrating the history of type and the cutting edge of type on the web
      </p>
    </div>

    <div class="contentx two">
      <p>
        Compiling and curating collections of typographic research and resources; 
        celebrating the history of type and the cutting edge of type on the web
        Compiling and curating collections of typographic research and resources; 
        celebrating the history of type and the cutting edge of type on the web
      </p>
    </div>

    <div class="contentx three">
      <p>
        Compiling and curating collections of typographic research and resources; 
        celebrating the history of type and the cutting edge of type on the web
        Compiling and curating collections of typographic research and resources; 
        celebrating the history of type and the cutting edge of type on the web
      </p>
      <a :href="store.research.url"><p class="details">Go to Source - <br> @source.com</p></a>
    </div>
  </div>
</PaperWrapper>
</template>

<style lang="scss">
.infoxxx {
  padding: 3em 3em 0em;
  display: grid;
  grid-template-columns: 2fr 1fr 3fr repeat(2, 1fr);
  row-gap: 1rem;
  column-gap: 2em;

  img {
    grid-column: 3/span 3;
    grid-row: 3;
    object-fit: cover;
    height: 60vh;
    width: 100%;
  }

  h3 {
    grid-column: span 5;
  }

  .contentx {
    grid-row: 2;
    grid-column: span 2;

    &.two {
      //grid-column: span 3;
    }

    &.three {
     grid-row: 3;
    }
    p {
      width: 100%;
    }
  }

  a h4, a p{
    margin-top: 20px;
    transition: all 0.2s  ease-in-out;
    &:hover {
      background: var(--flavor);
      opacity: 1;
    }
  }

}

</style>