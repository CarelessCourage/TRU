<script setup>
import TypeXray from "../components/typexray.vue"
import Carusel from "../components/pickCarusel.vue"

import TextOcean from "../components/text-ocean/TextOcean.vue"
import Resources from "../components/resources.vue"
import CellList from "../components/celllist.vue"
import MediaList from "../components/imglist.vue"
import Breaker from "../components/breaker.vue"

import Goblet from "../components/narrative/goblet.vue"
import { onMounted} from "vue"
import PaperWrapper from "../components/paperWrapper.vue"
import NewsTile from "../components/newstile.vue"

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

onMounted(() => {
  gsap.to(window, {duration: 1, scrollTo: "0"});
})
</script>

<template>
  <PaperWrapper>
    <div class="content ">
      <div class="padding">
        <div class="slug">
          <TypeXray>Typographic <br> Research <br>Unit</TypeXray>
        </div>
        <div class="navMeta">
         </div>

        <div class="pitch" data-speed="0.9">
          <h2>About</h2>
          <h3>
            Compiling and <span>curating</span> collections of typographic research and resources; 
            celebrating the history of type and the cutting edge of type <span>communication</span>
          </h3>
        </div>

        <div class="box3">
          <p class="details">Click and drag the titles below. Its an infinite scroll listing featured essays on typography</p>
        </div>

        <div class="w" v-if="true"  data-speed="1.2">
          <p data-speed="1.4">Essays related to typography. These essays are uniqley crafted to break apart each paragraph into grid cells</p>
          <Carusel/>
        </div>
      </div>

      <Breaker/>

      <div class="padding">
        <CellList v-if="true"/>
      </div>

      <Breaker/>

      <div class="padding">
        <MediaList v-if="true"/>
      </div>

      <Breaker/>
      

      <Resources v-if="false">
        <h1>Academic Research</h1>
        <p>
          This is a list of research publications related to typography. 
          It is gathered by TRU users and curated by the TRU team. 
          Feel free to submit any suggestions along with a short abstract to our official email address: research@tru.com
        </p>
      </Resources>

      <Resources v-if="false">
        <h1>The Web of Type</h1>
        <p>
          This is a list of research publications related to typography. 
          It is gathered by TRU users and curated by the TRU team. 
          Feel free to submit any suggestions along with a short abstract to our official email address: research@tru.com
        </p>
      </Resources>

      <Resources v-if="false">
        <h1>Lessons in Type</h1>
        <p>
          This is a list of research publications related to typography. 
          It is gathered by TRU users and curated by the TRU team. 
          Feel free to submit any suggestions along with a short abstract to our official email address: research@tru.com
        </p>
      </Resources>
  
    </div>
    
    <div class="text" v-if="false">
      <TextOcean/>
    </div>

    <div class="padd" v-if="true">
      <NewsTile/>
    </div>

    <div class="goblet" v-if="true">
      <Goblet/>
    </div>
  </PaperWrapper>
</template>

<style lang="scss">
.padd {
  padding: 3em;
}

.goblet {
  grid-column: span 5;
}

.w {
  grid-column: 1 / -1;
  width: 100%;
  position: relative;
  margin-bottom: 5em;
  

  &::after {
    content: "";
    display: block;
    clear: both;
    width: 150vw;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0px; left: -10em;
  }
}

.slug {
  padding-top: 2.5em;
}

.pitch {
  grid-column: 3 / span 3;
  @media (max-width: 650px) { grid-column: span 6;}

  animation: slideIn 0.4s ease-in-out;
  animation-fill-mode: backwards;
  animation-delay: 3s;

  & > * {
    max-width: 33ch;
  } 
}

.slug {
  grid-column: span 3;
  @media (max-width: 800px) { grid-column: span 3;}
  @media (max-width: 650px) { grid-column: span 4;}
  @media (max-width: 450px) { grid-column: span 6;}
}

.simple .content {
  padding: 0px;
}

.simple .padding {
  grid-column: span 6;
  display: grid; gap: 2em;
  grid-template-columns: repeat(6, 1fr);
  padding: 2em 3em 4em;
  @media (max-width: 400px) { padding: 2em 0em 4em; }
}

.box h2  {
  transition: all 0.2s ease-in-out
}

.box:hover h2 {
  font-variation-settings: "wght" 900, "wdth" 90, "CNTR" 0 !important;
}

.box1 {
  background-color: rgba(175, 154, 194, 0);
  min-height: 2em;
}

.box3 {
  grid-column: 3 / span 2;
  @media (max-width: 800px) { grid-column: 2 / span 3;}
  @media (max-width: 450px) { grid-column: 2 / span 4;}
  @media (max-width: 350px) { grid-column: span 5;}
}

.navMeta {
  background-color: rgba(231, 222, 171, 0);
  min-height: 2em;

  grid-column: 6;

  animation: slideIn 0.4s ease-in-out;
  animation-fill-mode: backwards;
  animation-delay: 4s;

  @media (max-width: 1100px) { grid-column: 4 / span 2;}
  @media (max-width: 800px) { grid-column: 3 / span 3;}
  @media (max-width: 650px) {grid-column: 4 / span 2;}
  @media (max-width: 450px) { display: none;}

  p.one {
    text-align: right;
    line-height: 0.8rem;
    margin-bottom: 1rem;
    font-variation-settings: "wght" 900, "wdth" 90, "CNTR" 0;
  }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(2em);
  }
  100% {
    opacity: 1;
    transform: translateY(0em);
  }
}
</style>