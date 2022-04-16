<script setup>
import {ref} from "vue"
import Toggle from "./toggle.vue"

const fav = ref(false)
const save = ref(false)
</script>

<template>
  <div class="curateBtnPanel">
    <button>
      <i class="fa-brands fa-sourcetree"></i>
      <p class="">Go to Source</p>
    </button>
    <button class="favorite" @click="fav = !fav">
      <Toggle :checked="fav"/>
      <p>Favorite this</p>
    </button>
    <button class="save" @click="save = !save">
      <Toggle :checked="save"/>
      <p>Save this</p>
    </button>
  </div>
</template>

<style lang="scss">
.curateBtnPanel {
  display: flex;
  //gap: 1em;
  flex-direction: column;
  //margin-top: 3em;
  //padding: 2em;
  button {
    color: var(--foreground);
    background: var(--shade);
    background: transparent;
    min-height: 0px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0.5em;
    text-align: left;
    gap: 0.5em;
    transition: 0.4s ease-in-out;
    &:hover {
      background: var(--foreground);
      color: var(--shade);
    }
    .wrapSwitch {
      pointer-events: none;
    }
    &.save .switch {
      --capRadius: 0px;
    }
  }
}
</style>