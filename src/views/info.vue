<script setup>
import { onMounted } from "vue";

import TextOcean from "../components/text-ocean/TextOcean.vue"
import Goblet from "../components/narrative/goblet.vue"

import HeaderGradient from "../components/headerGradient.vue";
import PillBody from "../components/pillBody.vue";

import Convey from "../components/textpaths/convey.vue"
import textPaths from "../components/textpaths/configs/textpaths";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

onMounted(() => {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 1000)
})

</script>

<template>

<HeaderGradient v-if="true"/>

<div class="info">
  <PillBody v-if="true">
    <h1 data-text class="text-anim title">Thjis is a title</h1>
    <h3 data-text class="text-anim title">The type which, through any arbitrary warping of design or excess</h3>
    <p class="bold text-anim text" data-text><span>In contemporary use,</span> the practice and study of 
      typography include a broad range, covering all aspects of letter 
      design and application, both mechanical (typesetting, type design, 
      and typefaces) and manual (handwriting and calligraphy).
    </p>
    <p class="details text-anim text" data-text>Typography is the art and technique of arranging type to make 
      written language legible, readable and appealing when displayed. The arrangement 
      of type involves selecting typefaces, point sizes, line lengths, line-spacing 
      (leading), and letter-spacing (tracking), as well as adjusting the space between 
      pairs of letters (kerning[1]).
    </p>
    <h2 data-text class="text-anim text">Thjis is a sub title</h2>
    <p data-text class="text-anim text">
      Typography is the work of typesetters (also known as compositors), 
      typographers, graphic designers, art directors, manga artists, 
      comic book artists, and, now, anyone who arranges words, letters, 
      numbers, and symbols for publication, display, or distribution, 
      from clerical workers and newsletter writers to anyone self-publishing 
      materials. 
    </p>
  </PillBody>
  <div class="block">
    <Convey :textPaths="textPaths[1]" tightness="-13%" :scoped="{ start: '-60%', end: '300%' }" v-if="true"/>  
  </div>
  <div class="text-block" v-if="true">
    <div class="body paragraphs">
      <div class="content">
        <h3 data-text class="text-anim title">The type which, through any arbitrary warping of design or excess</h3>
        <p data-text class="text-anim text">
          Typography is the work of typesetters (also known as compositors), 
          typographers, graphic designers, art directors, manga artists, 
          comic book artists, and, now, anyone who arranges words, letters, 
          numbers, and symbols for publication, display, or distribution, 
          from clerical workers and newsletter writers to anyone self-publishing 
          materials. 
        </p>
      </div>
    </div>
  </div>
  <div class="block m-up">
    <Convey :textPaths="textPaths[2]" tightness="-33%" :scoped="{ start: '-20%', end: '1200%' }" v-if="true"/>  
  </div>
  <div class="content" v-if="true">
    <TextOcean v-if="false">Type Structure. The DNA of human language</TextOcean>
    <Goblet/>
  </div>
</div>
</template>

<style lang="scss">
.info {
  position: relative; z-index: 200000;
  //background: var(--background);
  width: 100%;
  padding-top: 100vh;
  .content { 
    background: var(--background);
    position: relative; z-index: 20;
  }

  .block {
    position: relative; z-index: 20;
    height: 100vh; width: 100vw;
    background: var(--background);
    .convey {
      position: relative; z-index: 1000;
      padding: 0px;
      overflow: visible;
    }
  }

  .m-up {
    margin-top: -15rem;
  }
}

.text-block .content {
  position: relative;
  z-index: 2000000;
}

.text-block  .body {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.text-block {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
  z-index: 1000;
  padding-top: 20rem;
  background: var(--background);

  --round: calc(v-bind(radius) * 1px);
  border-radius: var(--round) var(--round) 0px 0px;

  animation: anim 1.2s backwards ease-in-out;
  padding-top: 15rem;
  min-height: 50rem;
}
</style>