<script setup>
import TypeXray from "../components/typexray.vue"
import Carusel from "../components/pickCarusel.vue"

import TextOcean from "../components/text-ocean/TextOcean.vue"
import Resources from "../components/resources.vue"
import CellList from "../components/celllist.vue"

import Goblet from "../components/narrative/goblet.vue"
import { onMounted} from "vue"
import useNavigation from "../components/navigation/store";
import PaperWrapper from "../components/paperWrapper.vue"
import NewsTile from "../components/newstile.vue"

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const { navigation } = useNavigation();

onMounted(() => {
  navigation.value = false;
  gsap.to(window, {duration: 1, scrollTo: "0"});
})
</script>

<template>
  <PaperWrapper>
    <div class="content">
      <div class="slug">
        <TypeXray>Typographic <br> Research <br>Unit</TypeXray>
      </div>
      <div class="navMeta">
        <p class="details one">Navigation <br> index</p>
        <p class="details">Interact with the menu on the right to open the site index and navigate to any other page</p>
      </div>

      <div class="pitch" data-speed="0.9">
        <h3>Compiling and <span>curating</span> collections of typographic research and resources; 
          celebrating the history of type and the <span>cutting edge</span> of type on the web
        </h3>
      </div>

      <div class="box3">
        <p class="details">Click and drag the titles below. Its an infinite scroll listing featured essays on typography</p>
      </div>

      <div class="w" v-if="true"  data-speed="1.2">
        <Carusel/>
      </div>

      <CellList v-if="true"/>

      <Resources v-if="false">
        <h1>Accademic Research</h1>
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

    <div class="padd" v-if="false">
      <NewsTile/>
    </div>

    <div class="goblet" v-if="false">
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
  padding: 1em 3em 12em;
  display: grid; gap: 2em;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 400px) { padding: 1em 0em 12em; }
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
</style>