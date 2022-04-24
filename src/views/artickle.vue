<script setup>
import { onMounted, onUnmounted  } from "vue";

import HeaderGradient from "../components/headerGradient.vue";
import PillBody from "../components/pillBody.vue";
import Structure from '../components/test/structure.vue';
import PaperWrapper from '../components/paperWrapper.vue';

import { limbodown } from "../components/tiles/utils.js"

onMounted(() => {
  console.log("triggered");
  limbodown.value = true;
})

onUnmounted(() => {
  limbodown.value = false;
})
</script>

<template>
<PaperWrapper :disablePaper="true">
  <div class="article">
    <HeaderGradient/>
    <PillBody>
     <div class="structure">
      <h1 data-text class="text-anim title">Lorem ipsum</h1>
      <p class="bold text-anim text" data-text>
        <span>Sed ut perspiciatis</span>
        unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
      </p>
      <p class="details text-anim text" data-text v-if="false">Typography is the art and technique of arranging type to make 
        written language legible, readable and appealing when displayed. The arrangement 
        of type involves selecting typefaces, point sizes, line lengths, line-spacing 
        (leading), and letter-spacing (tracking), as well as adjusting the space between 
        pairs of letters (kerning[1]).
      </p>
      <h3 data-text class="text-anim title">
        it is type, through any arbitrary warping of design or excess
      </h3>
      <p data-text class="text-anim text">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
        excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum 
        facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio 
        cumque nihil impedit quo minus id quod maxime placeat
      </p>
    </div>
    </PillBody>
  </div>
</PaperWrapper>
</template>

<style lang="scss">

html {
  background: var(--flavor);
}

.article {
  //background: var(--flavor);
  width: 100%;
  padding-top: 100vh;
  position: relative;
  z-index: 1005;
}
</style>