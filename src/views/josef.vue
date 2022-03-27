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
</script>

<template>
  <PaperWrapper>
    <div class="narrativex">
      <div class="title">
        <p class="details">Josef Muller-Brockmann</p> 
        <h3>Grid and Design Philosophy</h3>
      </div>
      <p >The use of the grid as an ordering system is the expression of a 
        certain mental attitude inasmuch as it shows that the designer conceives
        his work in terms that are constructive and oriented to the future.</p>
      <p>This is the expression of a professional <span>ethos:</span> the designer’s work 
        should have the clearly intelligible, objective, <span>functional,</span> and 
        aesthetic quality of mathematical thinking.</p>
      <p>His work should thus be a contribution to general <span>culture</span> and 
        itself form part of it.</p>
      <p></p>
      <p>Constructivist design that is capable of analysis and 
        reproduction can influence and enhance the taste of a <span>society</span> 
        and the way it conceives forms and colors.</p>
      <p class="enlargen">Design that is objective, 
        committed to the common weal, well composed, and refined constitutes 
        the basis of <span>democratic</span> behavior.
      </p>
      <p></p>
      <p>Constructivist design means the conversion of design laws 
        into practical solutions. Work done systematically and in 
        accordance with strict formal principles makes those demands for 
        directness, intelligibility, and the integration of all factors 
        that are also vital in socio-political life.</p>
      <p></p>
      <h4>Working with the grid system means submitting to laws of universal validity.</h4>
      <p></p>
      <p>The use of the grid system implies the <span>will</span> to systematize, to clarify</p>
      <p></p>
      <p>the will to penetrate to the <span>essentials,</span> to concentrate
      the will to cultivate objectivity instead of subjectivity
      </p>
      <p></p>
      <p></p>
      <p>the will to <span>rationalize the creative</span> and technical production processes</p>
      <p></p>
      <p></p>
      <p>the will to integrate elements of color, <span>form,</span> and material</p>
      <p></p>
      <p></p>
      <p>the will to achieve architectural dominion over surface and <span>space</span></p>
      <p></p>
      <p></p>
      <p>the will to adopt a positive, forward-looking attitude</p>
      <p></p>
      <p></p>
      <p>the recognition of the importance of education and the effect 
      of work devised in a constructive and creative <span>spirit.</span></p>
      <p></p>
      <p></p>
      <p class="enlargen">Every visual creative work is a manifestation of the <span>character 
        of the designer.</span> It is a reflection of his knowledge, his ability, 
        and his mentality.</p>
    </div>
  </PaperWrapper>
</template>

<style lang="scss">
  .narrativex {
    padding: 3em 3em 0em;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr 1fr 1fr 1fr;
    row-gap: 1rem;
    column-gap: 2em;

    .title {
      grid-column: span 5;
      h3 {
        text-transform: uppercase;
        margin-top: 10px;
      }
    }

    h3 {
      line-height: 1;
      //margin-bottom: 10px;
    }

    p.enlargen {
      grid-column: span 5;
      font-size: 2.5rem;
      line-height: 1.4;
      &.two {
        grid-column: span 6;
        span {
          font-size: 3.5rem;
          line-height: 0.8;
        }
      }
    }
    p.enlargenminus {
      grid-column: 2 / span 4;
      //font-size: 2rem;
      //line-height: 1.4;
    }
    p.enlargenpure {
      grid-column: 2 / span 4;
      //font-size: 2rem;
      //line-height: 1.4;
    }

    p {
      grid-column: span 2;
      font-size: 1rem;
      span {
        //font-size: 1rem;
        font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 90;
        background: var(--flavor);
      }
    }

    p.three {
      grid-column: span 3;
      font-size: 1rem;
    }
  }
</style>