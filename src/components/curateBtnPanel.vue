<script setup>
import {ref} from "vue"
import Toggle from "./toggle.vue"

const fav = ref(false)
const save = ref(false)

const props = defineProps({
  item: Object
})

function direct() {

}
</script>

<template>
  <div class="curateBtnPanel">
    <a :href="item.url" target="_blank">
      <button class="source">
        <i class="fa-solid fa-link"></i>
        <p class="details">Go to Source</p>
      </button>
    </a>

    <div class="toggles">
      <button class="favorite" @click="fav = !fav">
        <Toggle :checked="fav"/>
        <p>Favorite this</p>
      </button>
      <button class="save" @click="save = !save">
        <Toggle :checked="save"/>
        <p>Save this</p>
      </button>
    </div>

    <div class="gradient"></div>
    <div class="yellow"></div>
  </div>
</template>

<style lang="scss">
.toggles {
  padding: 1em;
  button {
    padding: 0.2em !important;
  }
}

.curateBtnPanel {
  .gradient, .yellow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .gradient {
    opacity: 0.4;
    transition: 0.4s ease-in-out 0.2s;
  }

  .yellow {
    background-color: var(--flavor);
    z-index: -2;
    transition: 0.8s ease-in-out 0.2s;
  }

  button.source {
    overflow: hidden;
    background-color: var(--shade);
    i, svg { transform: scale(0.6); transition: 0.4s ease-in-out; }
    &:hover {
      background-color: var(--background);
      p { transform: scale(1.5) translateX(4em);}
      i, svg { transform: scale(4) translateX(-0.2em); color: var(--shade) }
    }
    &:active {
      background-color: var(--flavor);
    }
  }
}

.curateBtnPanel {
  position: relative;
  display: flex;
  //gap: 1em;
  flex-direction: column;
  //margin-top: 3em;
  //padding: 2em;
  a {
    width: 100%;
  }
  button {
    width: 100%;
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

    p { transition: 0.4s ease-in-out; }
    .wrapSwitch {
      pointer-events: none;
    }
    &.save .switch {
      --capRadius: 0px;
    }
  }
}
</style>