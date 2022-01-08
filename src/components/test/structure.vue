<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import Splitting from "splitting";

onMounted(() => {
  Splitting({target: "[data-text]", by: 'lines' });

  const texts = gsap.utils.toArray('.text-anim');
  texts.forEach((text) => {
    gsap.from(text, { scrollTrigger: {
      start: 'top 90%',
      end: 'bottom top',
      trigger: text,
      toggleClass: 'enable',
      markers: false
    }});
  });
})
</script>

<template>
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
</template>

<style lang="scss">
.text {
  .word {
    opacity: 0;
    transition: all 1s calc(var(--word-index) * 0.01s) ease-in-out;
  }

  &.enable .word {
    opacity: 1;
  }
}

.title {
  .word {
    opacity: 0;
    transition: all 0.8s calc(var(--word-index) * 0.1s);
  }

  &.enable .word {
    opacity: 1;
  }
}
</style>