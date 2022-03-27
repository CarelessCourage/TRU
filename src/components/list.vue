<script setup>
import { useRouter } from 'vue-router'
import { array, setResearch } from "../store/index.js"

const router = useRouter()

function click(index = 0) {
  setResearch(index)
  router.push({name: 'research'})
}
</script>

<template>
  <div class="list-info">
   <slot></slot>
  </div>
  <div class="list">
    <div v-for="(item, index) in array" :key="index" class="list-item" @click="click(index)">
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
  grid-column: span 4;
  column-gap: 2em;
  text-transform: uppercase;
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
  display: grid;
  grid-template-columns: 1fr;
  //padding-bottom: 0.5em;
  cursor: pointer;

  transition: 0.4s ease-in-out;

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