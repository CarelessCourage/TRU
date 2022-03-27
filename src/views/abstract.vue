<script setup>
import { onMounted} from "vue"
import useNavigation from "../components/navigation/store";

let research = {title: "How to make type readable.", url: "https://psycnet.apa.org/record/1941-01004-000", datetime: "1940-01-01" }

const { navigation } = useNavigation();
onMounted(() => {
  navigation.value = false;
})
</script>

<template>
  <div class="simpleWrapper">
    <div class="simple">
      <div class="content">
        
      </div>
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

  @media (max-width: 800px) {
    padding: 0px;
  }
}

.simple .content {
  padding: 1em 3em 0em;
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  row-gap: 4rem;
  column-gap: 2em;
}

.simple {
  //padding: 1em 3em 0em;
  background: var(--background);
  min-height: 100vh;
  overflow: hidden;
  h1 { margin: 0px; }

  @media (max-width: 400px) {
    padding: 0em 2em 5em;
  }

  @media (max-width: 350px) {
    padding: 0em 1em 5em;
  }
}
</style>