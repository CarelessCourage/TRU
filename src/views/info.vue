<script setup>
import { onMounted, ref } from "vue";
import { onKeyStroke } from '@vueuse/core'

import TextOcean from "../components/text-ocean/TextOcean.vue"
import Goblet from "../components/narrative/goblet.vue"

import HeaderGradient from "../components/headerGradient.vue";
import PillBody from "../components/pillBody.vue";
import Split from "../utils/splitting.vue"

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


const shift = ref(false)

onKeyStroke('Shift', (e) => {
  console.log('Shift key down')
  shift.value = true
})

onKeyStroke('Shift', (e) => {
  console.log('Shift key up')
  shift.value = false
}, { eventName: 'keyup' })

</script>

<template>

<HeaderGradient v-if="true"/>

<div class="info" :class="{marked: shift}">
  <PillBody v-if="true">
    <Split :delay="0">
      <h1 data-slide>What is <br> Typography</h1>
      <p class="bold" data-line><span>In contemporary use,</span> the practice and study of 
        typography include a broad range, covering all aspects of letter 
        design and application, both mechanical (typesetting, type design, 
        and typefaces) and manual (handwriting and calligraphy).
      </p>
    </Split>
    <Split :delay="0">
      <p data-line class="bold">
        <span>Professionally,</span> Typography is the work of typesetters (also known as compositors), 
        typographers, graphic designers, art directors, manga artists, 
        comic book artists, and, now, anyone who arranges words, letters, 
        numbers, and symbols for publication, display, or distribution, 
        from clerical workers and newsletter writers to anyone self-publishing 
        materials. 
      </p>
    </Split>
    <Split :delay="0">
      <h3 data-slide>Your words are precious to me. They are my map to your world</h3>
      <p class="bold" data-line>
        But as Beatrice Ward so eloqoently put it: the most important thing about [type] is that it conveys <span>thought, ideas, 
        images from one mind to other minds.</span> This statement is what you might call 
        the “front door” of the science of typography. Within lie hundreds of rooms, 
        but unless you start by assuming that [type] is meant to convey specific and coherent ideas, 
        it is very easy to find yourself in the wrong house altogether.
      </p>
    </Split>
  </PillBody>
  <div class="block">
    <Convey :textPaths="textPaths[1]" tightness="-13%" :scoped="{ start: '-60%', end: '300%' }" v-if="true"/>  
  </div>
  <div class="text-block" v-if="true">
    <div class="body paragraphs">
      <div class="content">
        <Split :delay="0">
          <h3 data-slide>Type represents the start of human civilisation</h3>
          <p data-line class="web">
            The first evidence of type is in Mesopotamia (present-day Iraq) 
            where cuneiform was used between 3400 and 3300 BC.
          </p>
          <p data-line class="bold">
            Beatrice Ward writes: There is no “explanation” whatever of the fact that I can make arbitrary
            sounds that will lead a total stranger to think my own <span>thought.</span> It is sheer 
            magic that I should be able to hold a one-sided conversation by means of black 
            marks on paper with an unknown person halfway across the world. Talking,
            broadcasting, writing, and printing are all quite literally forms of 
            thought transference, and it is this ability and eagerness to transfer 
            and receive the contents of the mind that is almost <br> alone responsible for 
            human <span>civilization</span>
          </p>
        </Split>
      </div>
    </div>
  </div>
  <div class="block">
    <Convey :textPaths="textPaths[2]" tightness="-17%" :scoped="{ start: '-90%%', end: '700%' }" v-if="true"/>  
  </div>
  <div class="text-block" v-if="true">
    <div class="body paragraphs">
      <div class="content">
        <Split :delay="0">
          <h3 data-slide>
            Type is essentially the DNA of human sentience
          </h3>
          <p data-line class="web">
            The craft of designing type bares the responsibility of all human history and communication
          </p>
          <p data-line class="bold">
            Beatrice Ward: There is nothing <span>simple or dull</span> in achieving the transparent page. Vulgar ostentation is twice as easy as 
            discipline. When you realize that ugly typography never effaces itself, you will be able to 
            capture beauty as the wise men capture happiness, <br> by aiming at something else. 
          </p>
        </Split>
      </div>
    </div>
  </div>
  <div class="block">
    <Convey :textPaths="textPaths[0]" tightness="-23%" :scoped="{ start: '-20%', end: '1200%' }" v-if="true"/>  
  </div>
  <div class="text-block" v-if="true">
    <div class="body paragraphs">
      <div class="content">
        <Split :delay="0">
          <h3 data-slide>
            Type faces yet another frontier on the web, but the same lessons still hold
          </h3>
          <p data-line class="web">
            Great type emphasizes the content of the text like a wine glass shows off the color of the wine
          </p>
          <p data-line class="bold">
            Beatrice Ward: The “stunt typographer” learns the fickleness of rich men who hate to read. Not for them are long breaths
            held over serif and kern; they will not appreciate your splitting of hair spaces. Nobody (save the 
            other craftsmen) will appreciate half your skill.
          </p>
          <p data-line class="bold">
            But you may spend endless years of happy experiment
            in devising that <span>crystalline goblet</span> which is worthy to hold the vintage <br> of the human mind.
          </p>
        </Split>
      </div>
    </div>
  </div>
  <div class="block m-up">
    <Convey :textPaths="textPaths[2]" tightness="-33%" :scoped="{ start: '-320%', end: '1200%' }" v-if="true"/>  
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