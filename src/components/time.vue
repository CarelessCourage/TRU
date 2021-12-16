<script setup>
import scrollTrigger from "../utils"
let { scroll } = scrollTrigger(".dawn", "center center")
</script>

<template>
<div class="dawn">
  <h1 class="element">...<br> evolves civilisation <br>...</h1>
</div>
</template>

<style lang="scss" scoped>
.dawn {
  --scroll: v-bind(scroll);
  height: 100vh;
  background-color: var(--foreground);
  color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;

  --radius: calc(v-bind(scroll) * 1px);
  border-radius: 0 0 var(--radius) var(--radius);
  border-bottom: solid var(--background) 1rem;

  h1.element {
    --text-contrast: calc(var(--scroll) * 0.1);
    --text-weight: calc(var(--scroll) * 0.9);
    --type: clamp(7rem, 15vw, 12rem);
    font-size: var(--type);
    line-height: var(--type);
    text-align: center;
  }
}

.lol {

  position: relative;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  --radius: calc(var(--scroll) * 1px);

  background: var(--background);
  background-color: var(--flavor);
  color: var(--background);
  width: 100vw;
  height: 100vh;
  max-height: 100vw;
  border-radius: var(--radius) var(--radius) 0 0;
  border-top: solid var(--flavor) 0.5rem;
  opacity: 1;
}
</style>