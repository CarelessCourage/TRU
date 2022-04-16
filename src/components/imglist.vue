<script setup>
import CurateBtnPanel from "../components/curateBtnPanel.vue"

import mediaArray from "../store/media.js"

let media = [
  "https://images.unsplash.com/photo-1573510746018-be027b8f6f8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1548722038-fbe52045aa57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=733&q=80",
  "https://images.unsplash.com/photo-1610454059772-5c751844f937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1528697527937-e07340cb04cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1597845988847-c0106a43384e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1588421357937-c6dadca810cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1518316974705-e5c4a6ee2374?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1523903716430-8b05cc1ce968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
]

</script>

<template>
  <div class="media-info">
    <slot></slot>
  </div>
  <div class="media">
    <div
      class="mediaImg"
      v-for="(item, index) in mediaArray"
      :key="index"
    >
      <div class="imgWrap">
        <img 
          :src="item.img" 
          alt="media" 
          width="300"
          data-speed="auto"
        >
      </div>
      <p class="details title">{{item.description}}</p>
      <CurateBtnPanel/>
    </div>
  </div>
</template>

<style lang="scss">
.mediaImg:hover {
  background: var(--flavor);
  img {
    filter: invert(1);
  }
  p {
    font-variation-settings: "wght" 900, "wdth" 00, "CNTR" 0;
  }

  .curateBtnPanel {
    transform: translateY(0%);
  }
}

.mediaImg .curateBtnPanel {
  position: absolute;
  top: 0px;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: var(--background);
  //padding: 2em;
  transform: translateY(100%);
  transition: 0.4s ease-in-out;
}

.mediaImg {
  overflow: hidden;
  position: relative;
  cursor: pointer;
  padding-bottom: 4em;
  transition: 0.4s ease-in-out;
  p.title {
    padding-top: 1em;
    transition: 0.4s ease-in-out;
  }
  .imgWrap {
    position: relative;
    max-height: 300px;
    min-height: 300px;
    width: 100%;
    overflow: hidden;
    top: 0px;
    //transition: 0.4s ease-in-out;
    //background-color: var(--shade);
  }
  img {
    position: absolute;
    width: 100%;
    //height: 300px;
    object-fit: cover;
    filter: invert(0);
    transition: 0.4 ease-in-out;
  }
}

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