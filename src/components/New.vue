<script setup>
import {onMounted, ref} from "vue"

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

onMounted(() => {
  Splitting();
});
</script>

<template>
  <div class="plank">
    <div class="column" data-splitting>
      <h3>This is a text that is very texty. Read it, and read it good. You fucking creep. This is a text that is very texty. Read it, and read it good. You fucking creep.</h3>
      <p>This is a text that is very texty. Read it, and read it good. You fucking creep. This is a text that is very texty. Read it, and read it good. You fucking creep. This is a text that is very texty. Read it, and read it good. You fucking creep. This is a text that is very texty. Read it, and read it good. You fucking creep.</p>
    </div>
  </div>
</template>

<style scoped>
  .blob {
    background-color: #f0f0f0;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


  .plank {
    height: 100vh;
    width: 100vw;
    padding-top: 8em;
    border-top: var(--foreground) 1px solid;
  }

  .plank .column {
    width: 40em;
    margin: auto;
  }

  p {
    margin-top: 20px;
    line-height: 32px;
    letter-spacing: 0.2px;
  }

  .splitting {
    --delay: 0;
    --duration: 3s;
    --percent: 0;
  }
  
  .plank .char {
    --percent: calc(var(--char-index) / var(--char-total));
    --delay: calc(var(--percent) * var(--duration));
  }

  h3 {
    flex: 1;
    font-size: 2em;
    font-variation-settings: "wght" 300, "wdth" 75, "slnt" 12;
    margin: 0px;
    letter-spacing: 0.2px;
    line-height: 42px;
    background-image: linear-gradient(to right, yellow 0, yellow 100%);
    background-size: 0 100%;
    background-repeat: no-repeat;
    transition: background .5s;
    cursor: pointer;
  }

  h3:hover {
    background-size: 100% 100%;
  }

  h3 .word:nth-child(1),
  h3 .word:nth-child(3),
  h3 .word:nth-child(5)  {
    font-variation-settings: "wght" 1200, "wdth" 120, "slnt" 12;
  }
</style>
