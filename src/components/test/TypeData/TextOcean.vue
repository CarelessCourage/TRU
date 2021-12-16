<script setup>
import {onMounted} from "vue"

//fetch star wars characters from api
const fetchCharacters = async () => {
  const response = await fetch("https://swapi.dev/api/people/");
  const data = await response.json();
  return data.results;
};

console.log(fetchCharacters());

onMounted(() => {
});
</script>

<template>
  <div id="ocean">
    <h1 v-for="(x, index) in 20" :key="index">
      Type Structure. The DNA of human language
    </h1>
  </div>
</template>

<style lang="scss">
#ocean {
  transform: scale(8) rotate(45deg);
  position: fixed;
  z-index: -1;
  opacity: 0.4;
}
#ocean h1 {
  font-size: 2em;
  font-variation-settings: "wght" 900, "wdth" 900, "CNTR" 100;
  line-height: 0.82em;
  letter-spacing: -1px;
  text-transform: uppercase;
  opacity: 0.28;
  &:nth-child(even) {
    opacity: 0.3;
    transform: translateX(-5em);
    animation: ocean 80s ease-in-out infinite alternate;
  }
  &:nth-child(odd) {
    transform: translateX(0em);
    animation: ocean 74s ease-in-out infinite alternate;
  }
}

@keyframes ocean {
  0% {
    transform:  translateX(-0em);
  }
  50% {
    transform: translateX(-10em);
  }
  100% {
    ransform:  translateX(-0em);
  }
}
</style>
