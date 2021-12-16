  <script setup>
  import Home from './views/home.vue';
  </script>

  <template>
    <Home/>
  </template>

<style lang="scss">
@font-face {
  font-family: "Atacama";
  src: url("./assets/fonts/AtacamaVF.ttf") format("truetype");
  font-style: normal;
  font-weight: 0 900;
}

@font-face {
  font-family: "Flexa";
  src: url('./assets/fonts/GT-Flexa-VF-Trial.woff2') format('woff2 supports variations'),
      url('./assets/fonts/GT-Flexa-VF-Trial.woff2') format('woff2-variations');
  font-stretch: 75% 100%;
  font-style: oblique 0deg 12deg;
  font-weight: 100 900;
}

:root {
  --background: rgb(244, 252, 246);
  --foreground: #2c3e50;
  --flavor: #2c3e50;
  --shade: rgb(219, 219, 219);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Atacama", "Roboto VF", sans-serif;
  font-variation-settings: "wght" 400, "wdth" 300, "CNTR" 0;
  color: var(--foreground);
  //padding-top: 30vh;

  //width: 60em;
  //max-width: 100vw;
  //margin: auto;
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
