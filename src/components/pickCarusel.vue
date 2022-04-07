<script setup>
//import Carusel from "../components/carusel.vue"#
import { ref, watch } from "vue"
import { useInterval } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { unwrap } from "../store/anim.js"

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const car = ref(null);
watch(unwrap, () => {
  if(unwrap) {
    car.value.restartCarousel();
  }
})

const boxes = [
  {
    title: "Frank Herbert - on typography",  
    quote: "an age of science has come, the artist has been motivated to open his mind to the new forces that shape our lives",
    component: 'herbert',
  },
  {
    title: "Josef Müller-Brockmann - Grid Philosophy",   
    quote: "Working with the grid system means submitting to laws of universal validity. The use of the grid system implies...",
    component: 'josef',
  },
  {
    title: "Beatrice Ward - what is typography",  
    quote: "the most important thing about type is that it conveys thought, ideas, images from one mind to other minds",
    component: 'info',
  },
  {
    title: "Frank Herbert - on typography", 
    quote: "an age of science has come, the artist has been motivated to open his mind to the new forces that shape our lives",
    component: 'herbert',
  },
  {
    title: "Josef Müller-Brockmann - Grid Philosophy",   
    quote: "Working with the grid system means submitting to laws of universal validity. The use of the grid system implies...",
    component: 'josef',
  },
  {
    title: "Beatrice Ward - what is typography",  
    quote: "the most important thing about type is that it conveys thought, ideas, images from one mind to other minds",
    component: 'info',
  },
]

let breakpoints = {
  0: {
    itemsToShow: 1,
    snapAlign: 'end',
  },
  500: {
    itemsToShow: 1.5,
    snapAlign: 'end',
  },
  700: {
    itemsToShow: 2.06,
    snapAlign: 'end',
  },
  1024: {
    itemsToShow: 3.06,
    snapAlign: 'end',
  },
}

const router = useRouter()
const sortClick = ref(false);
const clicked = ref(false);

function clickDown() {
  clicked.value = true;
  sortClick.value = true;

  setTimeout(() => {
    sortClick.value = false;
  }, 100);

  console.log("lol clicked");
}

function clickUp(box) {
  clicked.value = false;
  if(sortClick.value) {
    router.push({name: box.component})
  }

  console.log("lol clicked");
}
</script>

<template>
  <div class="stretchOverMargin">
    <Carousel 
      :items-to-show="3.06" 
      :breakpoints="breakpoints"
      :wrap-around="true" 
      snapAlign="end" 
      :autoplay="false" 
      :transition="300"
      pauseAutoplayOnHover="true"
      ref="car"
    >

      <Slide 
        v-for="(box, index) in boxes" 
        :key="index" 
        @mousedown="clickDown"
        @mouseup="clickUp(box)"
      >
        <div class="carousel__item">
          <p class="title details">{{box.title}}</p>
          <h3>{{box.quote}}</h3>
          <p class="redirect">- read more</p>
        </div>
      </Slide>

      <template #addons>
        <navigation />
      </template>
    </Carousel>

  </div>
</template>

<style lang="scss">
.carousel > button {
  background-color: var(--foreground);
}

.stretchOverMargin {
  //background: rgb(240, 240, 240);
  width: 100%;
  transform: translateX(0em);
  //background: red;
  @media (max-width: 400px) { 
    transform: translateX(-5%); 
    width: 110%; 
  }
}

.carousel__viewport {
  overflow: visible;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  //color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  text-align: left;
  //padding: 40px;
  & > * {
    margin-bottom: 5px;
    transform-origin: bottom left;
    transition: .4s ease-in-out;
  }

  p.redirect {
    pointer-events: none;
  }

  &:hover {
    opacity: 1 !important;
    & > *:not(p) {
      font-variation-settings: 
        "wght" 600, 
        "wdth" 100, 
        "CNTR" 0;
    }
    p.redirect {
      transform: scale(5) translate(-1em, 0.4em);
      opacity: 0.1;
      font-variation-settings: 
        "wght" 900, 
        "wdth" 100, 
        "CNTR" 0;
    }
  }
}

.carousel button {
  &:hover {
    opacity: 1;
  }
}

.carousel__item {
  cursor: pointer;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.1;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  //transform: scale(0.5) translate(-0px);
}
.carousel__slide--next > .carousel__item {
  //transform: scaleX(1.5) translate(-60px);
  //opacity: 0.5;
}
.carousel__slide--prev > .carousel__item {
  //opacity: 0.5;
  //transform: scale(0.5) translateY(-0px);
}
.carousel__slide--active > .carousel__item {
  //transform: scale(0.75) translate(-180px);
  //transform: scale(1) translateY(-17%);
    opacity: 1;
}
</style>