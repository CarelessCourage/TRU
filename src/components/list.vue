<script setup>
import { useRouter } from 'vue-router'
import { array, setResearch } from "../store/index.js"

const router = useRouter()

function click(index = 0) {
  setResearch(index)
  router.push({name: 'research'})
}

function getFirst(item, check = "undefined") {
  let result = item.userTags[0]
  return result !== check ? result : false
}
</script>

<template>
  <div class="list-info">
   <slot></slot>
  </div>
  <div class="list">
    <div v-for="(item, index) in array" :key="index" class="list-item" @click="click(index)">
      <div class="userTag" v-if="getFirst(item, 'favorite')">
        <i class="fa-solid fa-star-of-life"></i>
      </div>
      <div class="userTag" v-if="getFirst(item, 'saved')">
        <i class="fa-solid fa-bookmark"></i>
      </div>
      <p class="list-item-title">{{item.title}}</p>
      <p class="details">{{item.datetime}}</p>
    </div>
  </div>
</template>

<style lang="scss">
.list-info {
  //background-color: blue;
  padding-right: 2em;

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

.list {
  //background: red;
  //height: 2em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: span 5;
  column-gap: 2em;
  row-gap: 1em;
  text-transform: uppercase;
  margin-bottom: 5em;
  //padding: 2em 0px;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1150px) {
    grid-column: span 5;
  }
}

.list-item {
  grid-column: span 2;
  //margin-bottom: 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  position: relative;
  cursor: pointer;

  transition: 0.4s ease-in-out;

  @media (max-width: 1270px) {
    grid-column: span 4;
  }

  .userTag {
    //text-transform: lowercase;
    //opacity: 0.3;
    //justify-self: end;
    position: absolute;
    z-index: -1;
    left: -1.3rem;
    //top: -1.5rem;
    //opacity: 0.3;

    i, svg {
      color: var(--flavor);
      font-size: 1rem;
      &.fa-bookmark {
        color: var(--shade);
      }
    }
  }

  p {
    transition: 0.2s ease-in-out;
  }

  &:hover {
    background: var(--flavor);
    p {
      font-variation-settings: "wght" 900, "wdth" 90, "CNTR" 20;
    }
  }

  .details {
    //justify-self: end;
    //font-style: italic;
    //padding-right: 2em;
  }
}


</style>