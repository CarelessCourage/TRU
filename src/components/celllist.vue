<script setup>
import { ref } from "vue"
import { useRouter } from 'vue-router'
import { array, setResearch } from "../store/index.js"

const router = useRouter()

function click(index = 0) {
  setResearch(index)
  router.push({name: 'research'})
}

const column = ref(0);

function over(index) {
  column.value = index;
}
</script>

<template>
  <div class="explainer">
    <h1>Accademic Research</h1>
  </div>
  <div class="explainertwo">
    <p>
      This is a <span>list of research publications</span> related to typography. 
      It is gathered by TRU users and curated by the TRU team. 
      Feel free to <span>submit any suggestions</span> along with a short abstract to our official email address: research@tru.com
    </p>
  </div>
  <div class="celllist">
    <div 
      v-for="(item, index) in array" 
      :key="index" 
      class="cell"
      @mouseenter="over(index)"
    >
      <h2>res</h2>
      <div class="about">
        <p class="cell-title">{{item.title}}</p>
        <p class="details">{{item.datetime}}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.celllist {
  grid-column: span 6;
  display: grid; gap: 2em;
  grid-template-columns: repeat(6, 1fr);
}

.explainer {
  grid-column: span 3;
  //h1 { padding-bottom: 20px;}
}

.explainertwo {
  grid-column: 2 / span 3;
}

.cell {
  cursor: pointer;
  min-width: 0px;
  min-height: 0px;
  background: var(--flavor);

  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  transition: 0.4s ease-in-out;
  h1 {
    transition: 0.4s ease-in-out;
  }
  &:hover {
    min-width: 20em;
    min-height: 5em;
    h1 {
      font-variation-settings: 
        "wght" 100, 
        "wdth" 900, 
        "CNTR" 90 !important;
    }
  }
}

.cell {
  .about {
    position: absolute;
    top: 120%; left: 0em;
    width: 100%; height: 100%;
    padding: 1em;
    background-color: var(--background);
    color: var(--foreground);
    transition: 0.4s ease-in-out;
    display: flex;
    justify-content: center;
    //align-items: center;
    flex-direction: column;
  }

  --lol: 2;

  &:hover {
    .about {
      top: 0em; left: 0em;
    }
  }
}

</style>