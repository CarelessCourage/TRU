<script setup>
import { onMounted } from "vue"
import useNavigation from "./navigation/store";

const { navigation } = useNavigation();

onMounted(() => {
  navigation.value = false;
})
</script>

<template>
  <div class="simpleWrapper">
    <div class="simple">
     <slot></slot>
   </div>
  </div>
</template>

<style lang="scss">
.simple, .simpleWrapper {
  position: relative;
  z-index: 0;
}

.simpleWrapper {
  background: var(--foreground);
  padding: 2em 3em 0em 3em;
  min-height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;

  animation: colorShift 1.2s backwards ease-in-out;
  animation-delay: 0.8s;

  &::after{
    content: ""; opacity: 0;
    position: fixed; z-index: -1;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: radial-gradient(circle at 50% 100%,black,var(--foreground),#0075c3,#fff3c7);
    animation: gradientShift 2s cubic-bezier(0.72, 0.01, 0.32, 0.99);
    animation-fill-mode: forwards;
    animation-delay: 0s;
  }

  @media (max-width: 800px) {
    padding: 0px;
  }
}


@keyframes colorShift {
  0% {
    background: var(--flavor);
  }
  100% {
    background: var(--foreground);
  }
}

@keyframes gradientShift {
  0% {opacity: 0;}
  50% {opacity: 1;}
  100% {opacity: 0;}
}

.simple {
  background: var(--background);
  overflow: hidden;

  //animation: paperUnwrap 2s cubic-bezier(0.72, 0.01, 0.32, 0.99);
  animation-fill-mode: backwards;
  animation-delay: 2s;
  //animation-play-state: paused;

  h1 { margin: 0px; }

  @media (max-width: 400px) {
    padding: 0em 2em 5em;
  }

  @media (max-width: 350px) {
    padding: 0em 1em 5em;
  }
}



@keyframes paperUnwrap {
  0% {
    transform: translateY(10em);
    width: 40%;
    max-height: 15em;
  }
  100% {
    transform: translateY(0em);
    width: 100%;
    max-height: 500em;
  }
}
</style>