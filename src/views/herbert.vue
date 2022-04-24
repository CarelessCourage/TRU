<script setup>
import Convey from "../components/textpaths/convey.vue"
import textPaths from "../components/textpaths/configs/textpaths"

import PaperWrapper from "../components/paperWrapper.vue"
import { store } from "../store/index.js"
import { onMounted } from "vue";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

onMounted(() => {
  gsap.to(window, {duration: 1, scrollTo: "0"});
})
</script>

<template>
  <PaperWrapper>
    <div class="narrativex">
      <div class="tpt" data-speed="0.2">
        <Convey 
          :textPaths="textPaths[3]" 
          tightness="-15%" 
          :scoped="{ start: 'top', end: '150%' }"
        />
      </div>

      <div class="title">
        <p class="details">Frank Herbert</p> 
        <h1>On Typography</h1>
      </div>

      <p data-speed="1.2">The graphic designer today seems to feel that the typographic means at his 
      disposal have been exhausted.</p>
      <p class="enlargen">Accelerated by the speed of our time, 
      a wish for new <span>excitement</span> is in the air. “New styles” are hopefully expected to appear.</p>
      <p class="three" data-speed="1.2">Nothing is more constructive than to look the facts in the face. 
      What are they? The fact that nothing <span>new</span> has developed in recent decades? 
      The boredom of the dead end without signs for a renewal? Or is it the realization 
      that a forced change in <span>search</span> of a “new style” can only bring superficial gain?</p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p data-speed="0.8">It seems appropriate at this point to recall the essence of statements made 
      by progressive typographers of the 1920s:</p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p data-speed="0.9">Previously used largely as a medium for making language visible, 
      typographic material was discovered to have distinctive optical properties of its own, 
      pointing toward specifically typographic expression. Typographers envisioned 
      possibilities of deeper visual experiences from a new exploitation of the 
      typographic material itself.</p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p data-speed="1.1">They called for <span>clarity,</span> conciseness, precision; for more articulation, <span>contrast</span>,
      tension in the color and black-and-white values of the typographic page.</p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p data-speed="1.2">Typography was for the first time seen not as an isolated discipline and 
      technique, but in context with the ever-widening visual <span>experiences</span>
      that the picture symbol, photo, film, and television brought.</p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p data-speed="0.9">They recognized that in all human endeavors a technology had adjusted to man’s 
      demands; while no marked change or improvement had taken place in man’s most 
      profound invention, printing-writing, since Gutenberg.</p>
      <p class="empty"></p>
      <h4 data-speed="0.5">The manual skill and approach of the craftsman was seen to be inevitably 
      replaced by mechanical techniques.</h4>
      <p data-speed="0.9">Once more it became clear that typography is not self-expression 
      within predetermined aesthetics, but that it is conditioned by the <span>message</span> 
      it visualizes.</p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p class="empty"></p>

      <p class="empty"></p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p class="enlargenpure" data-speed="1.1">That typographic aesthetics were not stressed in these statements does not 
      mean a lack of concern with them. But it appears that the <span>searching</span> went beyond 
      surface effects into underlying strata. It is a fallacy to believe that styles
      can be created as easily and as often as fashions change. More is involved than 
      trends of taste devoid of inner <span>substance</span> and structure, applied as cultural 
      sugar-coating.</p>
      <p data-speed="0.8">Moreover, the typographic revolution was not an isolated event but went hand in 
      hand with a new social, political <span>consciousness</span> and, consequently, with the building
      of new <span>cultural</span> foundations.</p>
      <p data-speed="1" class="enlargen two">The artist’s acceptance of the <span>machine</span> as a tool for mass
      production has had its impression on aesthetic concepts. Since then an age of science
      has come upon us, and the artist has been motivated more than ever to open his <span>mind</span> to
      the new forces that shape our lives.</p>
    </div>
  </PaperWrapper>
</template>

<style lang="scss">
</style>