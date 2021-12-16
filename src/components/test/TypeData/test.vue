<script setup>
import img from '../../../assets/whale.jpg'
</script>

<template>
  <div class="img">
    <img :src="img" />
  </div>
  <div class="grid">
    <h1>Type is the structure <br> of human language</h1>
    <p>
      Typography is the art and technique of arranging type to make written language legible, 
      readable and appealing when displayed. The arrangement of type involves selecting typefaces, 
      point sizes, line lengths, line-spacing (leading), and letter-spacing (tracking), 
      and adjusting the space between pairs of letters.
    </p>
    <p class="right">
      The term typography is also applied to the style, 
      arrangement, and appearance of the letters, numbers, and symbols created by the process. 
      Type design is a closely related craft, sometimes considered part of typography; 
      most typographers do not design typefaces, and some type designers do not consider 
      themselves typographers. Typography also may be used as an ornamental and decorative device, 
      unrelated to the communication of information.
    </p>
  </div>
</template>

<style lang="scss" scoped>

h1 {
  color: var(--foreground);
  font-size: 4em;
  margin-top: -1em;
  font-variation-settings: "wght" 900, "wdth" 900, "CNTR" 70;
  grid-column: span 5;
  position: relative;
  z-index: 1;
}

p {
  font-size: 11px;
  line-height: 14px;
  font-variation-settings: "wght" 400, "wdth" 100, "CNTR" 0;
  grid-column: 1 / span 2;
  &.right {
    grid-column: 4 / span 2;
    grid-row: 3 / span 1;
  }
}

.img {
  grid-column: 1 / span 4;
  position: relative;
  z-index: 1;
  opacity: 1;
  background-color: white;
}

img {
  opacity: 0.7;
  width: 100%;
  height: 50vh;
  object-fit: cover;
}
</style>