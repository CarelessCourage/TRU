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