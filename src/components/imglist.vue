<script setup>
import ImageComponent from "../components/imageComponent.vue"
import mediaArray from "../store/media.js"
</script>

<template>
  <div class="media-info">
    <slot></slot>
  </div>
  <div class="media">
    <ImageComponent
      v-for="(item, index) in mediaArray"
      :key="index"
      :item="item"
    />
  </div>
</template>

<style lang="scss">
.media-info {
  padding-right: 2em;
  grid-column: span 4;

  h1 {
    text-transform: capitalize;
    line-height: clamp(4rem, 4vw, 6rem);
    font-size: clamp(4rem, 4vw, 6rem);
  }

  p {
    padding-top: 0.5em;
  }

  @media (max-width: 1150px) {
    grid-column: span 5;
  }
}

.media {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: span 6;
  column-gap: 2em;
  row-gap: 1em;
  text-transform: uppercase;
  margin-bottom: 5em;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1150px) {
    grid-column: span 5;
  }
}

</style>