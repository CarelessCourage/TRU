<script setup>
import HelloWorld from './components/HelloWorld.vue'
import New from './components/New.vue'
import TypeData from './components/TypeData/TypeData.vue'
import Dollhouse from './components/dollhouse.vue';
</script>

<template>
  <div id="app">
    <TypeData v-if="false"/>
    <Dollhouse/>
    <HelloWorld msg="Variable Font" v-if="false"/>
    <New v-if="false"/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Atacama";
  src: url("./assets/fonts/AtacamaVF.ttf") format("truetype");
  font-style: normal;
  font-weight: 0 900;
}

:root {
  --background: #2c3e50;
  --foreground: white;;
  --flavor: red;
  --shade: gray;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Atacama", "Roboto VF", sans-serif;
  font-variation-settings: "wght" 400, "wdth" 300, "CNTR" 0;
  color: var(--foreground);
  padding-top: 5em;
}

html {
  background: var(--background);
}

body {
  margin: 0px;
}

* {
  box-sizing: border-box;
  margin: 0px;
}
</style>
