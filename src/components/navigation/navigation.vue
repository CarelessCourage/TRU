<script setup>
import { onMounted } from "vue";
import Burger from "./burger.vue";
import Sidebar from "./sidebar.vue";
import useNavigation from "./store"
import Splitting from "splitting";

const { navigation } = useNavigation();

onMounted(() => {
  Splitting({target: "[data-slide]"});
})
</script>

<template>
  <Burger @click="navigation = !navigation" :navigation="navigation"/>
  <Sidebar v-if="false"/>
  <div class="navigation" :class="{active: navigation}">
    <div class="body">
      <router-link :to="{ name: 'home'}">
       <h2 class="item" data-slide>Home</h2>
      </router-link>
      <router-link :to="{ name: 'essays'}">
        <h2 class="item" data-slide>Essays</h2>
      </router-link>
      <router-link :to="{ name: 'archive'}">
        <h2 class="item" data-slide>Archive</h2>
      </router-link>
    </div>
  </div>
  <div class="rainbow" :class="{active: navigation}"></div>
</template>

<style lang="scss">
.active a h2 {
  --del: 0s;
  overflow: hidden;
  .char {
    --delay: calc(var(--char-index) * 0.1s + var(--del));
    display: inline-block;
    animation: pulsex 0.8s var(--delay) backwards;
  }
}

.active a:nth-child(2) h2 {
  --del: 0.4s;
}

.active a:nth-child(3) h2 {
  --del: 0.8s;
}

@keyframes pulsex {
  0% {
    opacity: 0;
    transform: translateY(8rem);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0rem);
  }
}

.rainbow.active {
  //background-color: red;
  clip-path: circle(200% at calc(100% - 5rem) 5%);
  transition: 0.4s ease-in-out;
  transition-delay: 0s;
}

.rainbow {
  background-color: var(--flavor);
  position: fixed;
  z-index: 200000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  clip-path: circle(0px at calc(100% - 5rem) 4rem);
  transition: 0.4s ease-in-out;
  transition-delay: 0.2s;
}


.navigation.active {
  //background-color: red;
  clip-path: circle(200% at calc(100% - 5rem) 4rem);
  transition: 0.8s ease-in-out; 
}

.navigation {
  clip-path: circle(0px at calc(100% - 5rem) 4rem);
  position: fixed;
  z-index: 300000;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 2rem 0px;
  background-color: var(--background);
  transition: 0.4s ease-in-out;

  .body {
    position: relative;
    z-index:4;
  }
  .item {
    cursor: pointer;
    padding: 0.2rem 0px;
    width: 100%;
    max-width: 100vw;
    transition: 0.2s ease-in-out;
    &:hover {
      font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 80;
    }
    &:active {
      letter-spacing: -2rem;
      transition: 0.1s ease-in-out;
    }
  }
}
</style>