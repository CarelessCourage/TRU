<script setup>
import Multiselect from './multiselect.vue'
import MultiselectSort from './multiselectSort.vue'
import Search from './search.vue'

import "@fortawesome/fontawesome-free/css/all.css";

import {ref} from "vue"

const activeTab = ref("search")
const sortUp = ref(false)

function sortClick() {
  console.log("sortClick");
  sortUp.value = !sortUp.value
}
</script>

<template>
<div class="comboBox" data-speed="0.8">
  <ul class="tabs">
    <li :class="{active: activeTab === `search`}" @click="activeTab = `search`"><p class="web">Search</p></li>
    <li :class="{active: activeTab === `tags`}" @click="activeTab = `tags`"><p class="web">Filter</p></li>
    <li :class="{active: activeTab === `sort`}" @click="activeTab = `sort`"><p class="web">Sort</p></li>
  </ul>
  <div class="flex web text" v-show="activeTab === `search`">
    <i class="fa-solid fa-magnifying-glass"></i>
    <Search/>
  </div>
  <div class="flex web text" v-show="activeTab === `tags`">
    <i class="fa-solid fa-tags"></i>
    <Multiselect/>
  </div>
  <div class="flex web text sort" v-show="activeTab === `sort`">
    <div v-if="sortUp" class="i" @click="sortClick"><i class="fa-solid fa-arrow-up-short-wide"></i></div>
    <div v-if="!sortUp" class="i" @click="sortClick"><i class="fa-solid fa-arrow-down-short-wide"></i></div>
    <MultiselectSort/>
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

  .flex > svg,
  .flex > i,
  .flex > .i {
    left: 16px;
    position: absolute;
    z-index: 1;
    transition: .4s ease-in-out;
  }

  .sort .i {
    cursor: pointer;
  }

  .sort .i:hover {
    left: 0px;
    background-color: var(--flavor);
    padding: 16px;
    border-radius: 6px;
  }

  .sort .i:active {
    background-color: var(--background);
    padding: 10px 16px;
    transition: .2s ease-in-out;
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
