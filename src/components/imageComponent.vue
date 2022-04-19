<script setup>
import CurateBtnPanel from "../components/curateBtnPanel.vue"
defineProps({
  item: Object
})
</script>

<template>
  <div class="mediaImg">
    <div class="imgWrap">
      <img 
        :src="item.img" 
        alt="media" 
        width="300"
        data-speed="auto"
      >
    </div>
    <p class="details title">{{item.description}}</p>
    <CurateBtnPanel :item="item"/>
  </div>
</template>

<style lang="scss">
.mediaImg:hover {
  background: var(--flavor);
  p {
    font-variation-settings: "wght" 900, "wdth" 00, "CNTR" 0;
  }

  .curateBtnPanel {
    transform: translateX(0%);
    .yellow {
      background-color: var(--background);
    }
    .gradient {
      opacity: 0;
    }
  }
}

.mediaImg .curateBtnPanel {
  position: absolute;
  top: 0px;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
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
  }
  img {
    position: absolute;
    width: 100%;
    object-fit: cover;
    transition: 0.4 ease-in-out;
  }
}
</style>