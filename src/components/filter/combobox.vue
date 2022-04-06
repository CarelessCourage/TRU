<script setup>
import Multiselect from '../filter/multiselect.vue'
import "@fortawesome/fontawesome-free/css/all.css";

import {ref} from "vue"

const activeTab = ref("search")
</script>

<template>
<div class="comboBox" data-speed="0.8">
  <ul class="tabs">
    <li :class="{active: activeTab === `search`}" @click="activeTab = `search`"><p class="web">Search</p></li>
    <li :class="{active: activeTab === `tags`}" @click="activeTab = `tags`"><p class="web">Tags</p></li>
    <li :class="{active: activeTab === `sort`}" @click="activeTab = `sort`"><p class="web">Sort</p></li>
  </ul>
  <div class="flex web text" v-if="activeTab === `search`">
    <i class="fa-solid fa-magnifying-glass"></i>
    <Multiselect/>
  </div>
  <div class="flex web text" v-if="activeTab === `tags`">
    <i class="fa-solid fa-tags"></i>
    <Multiselect/>
  </div>
  <div class="flex web text" v-if="activeTab === `sort`">
    <i class="fa-solid fa-arrow-up-short-wide"></i>
    <Multiselect/>
  </div>
</div>
</template>

<style lang="scss">
.flex {
  position: relative;
  display: flex;
  align-items: center;
}


.comboBox {
  position: relative;
  margin-bottom: var(--marginxx);
  svg, i {
    left: 16px;
    position: absolute;
    z-index: 1;
  }
  ul.tabs {
    display: flex;
    gap: calc(var(--margin) / 3);
    padding: 0px;
    li {
      --padding: calc(var(--margin) / 3);
      --extraPadding: calc(var(--padding) * 2);
      --xxPadding: calc(var(--padding) * 3);

      cursor: pointer;
      background-color: var(--shade);
      padding: var(--padding) var(--extraPadding);
      border-radius: var(--radius) var(--radius) 0px 0px;
      list-style: none;
      transition: 0.2s ease-in-out;

      opacity: 0.4;

      p {
        transition: .4s ease-in-out;
      }

      &.active {
        opacity: 1;
        p {
          font-variation-settings: "wght" 900, "wdth" 100;
        }
      }

      &:hover {
        padding: var(--padding) var(--xxPadding);
        p {
          font-variation-settings: "wght" 900, "wdth" 100;
        }
      }
    }
  }
}

</style>
