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
          :textPaths="textPaths[4]" 
          tightness="-20%" 
          :scoped="{ start: 'top', end: '150%' }"
        />
      </div>

      <div class="title" data-speed="0.9">
        <p class="details">Josef Muller-Brockmann</p> 
        <h1>Grid and Design Philosophy</h1>
      </div>
      <p data-speed="0.9">The use of the grid as an ordering system is the expression of a 
        certain mental attitude inasmuch as it shows that the designer conceives
        his work in terms that are constructive and oriented to the future.</p>
      <p data-speed="0.8">This is the expression of a professional <span>ethos:</span> the designer’s work 
        should have the clearly intelligible, objective, <span>functional,</span> and 
        aesthetic quality of mathematical thinking.</p>
      <p data-speed="0.7">His work should thus be a contribution to general <span>culture</span> and 
        itself form part of it.</p>
      <p class="empty"></p>
      <p data-speed="1.1">Constructivist design that is capable of analysis and 
        reproduction can influence and enhance the taste of a <span>society</span> 
        and the way it conceives forms and colors.</p>
      <p class="enlargen" data-speed="1.2">Design that is objective, 
        committed to the common weal, well composed, and refined constitutes 
        the basis of <span>democratic</span> behavior.
      </p>
      <p class="empty"></p>
      <p>Constructivist design means the conversion of design laws 
        into practical solutions. Work done systematically and in 
        accordance with strict formal principles makes those demands for 
        directness, intelligibility, and the integration of all factors 
        that are also vital in socio-political life.</p>
      <p class="empty"></p>
      <h4 data-speed="0.6">Working with the grid system means submitting to laws of universal validity.</h4>
      <p class="empty"></p>
      <p data-speed="0.9">The use of the grid system implies the <span>will</span> to systematize, to clarify</p>
      <p class="empty"></p>
      <p>the will to penetrate to the <span>essentials,</span> to concentrate
      the will to cultivate objectivity instead of subjectivity
      </p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p>the will to <span>rationalize the creative</span> and technical production processes</p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p>the will to integrate elements of color, <span>form,</span> and material</p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p>the will to achieve architectural dominion over surface and <span>space</span></p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p>the will to adopt a positive, forward-looking attitude</p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p>the recognition of the importance of education and the effect 
      of work devised in a constructive and creative <span>spirit.</span></p>
      <p class="empty"></p>
      <p class="empty"></p>
      <p class="enlargen" data-speed="0.4" style="margin-top: 4em; padding-bottom: 1em;">Every visual creative work is a manifestation of the <span>character 
        of the designer.</span> It is a reflection of his knowledge, his ability, 
        and his mentality.</p>
    </div>
  </PaperWrapper>
</template>

<style lang="scss">
.tpt {
  top: 50vh;
}
</style>