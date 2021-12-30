  <script setup>
  import Navigation from "./components/navigation/navigation.vue";
  </script>

  <template>
    <Navigation/>
    <router-view />
  </template>

<style lang="scss">
@import 'open-props/gradients';
@import "./css";

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
  --flavor: #edfd62;
  --shade: rgb(219, 219, 219);

  --margin: 1rem;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Atacama", "Roboto VF", sans-serif;
  font-variation-settings: "wght" 400, "wdth" 300, "CNTR" 0;
  color: var(--foreground);
  overflow-x: hidden;
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

a {
  position: relative;
  color: var(--foreground);
  text-decoration: none;
  &::before {
    content: "";
    position: absolute;
    top: 3rem;
    left: 0px;
    z-index: -1;
    background: var(--flavor);
    width: 0%;
    height: 2rem;
    transition: 0.4s ease-in-out;
  }
  &:hover::before {
    width: 5em;
    opacity: 0.4;
  }

  &.router-link-active::before {
    width: 20em;
  }
}
</style>
