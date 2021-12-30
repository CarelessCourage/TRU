<script setup>
import { onMounted } from "vue";
import useNavigation from "../components/navigation/store";
import Split from "../utils/splitting.vue"

const { navigation } = useNavigation();
onMounted(() => {
  navigation.value = false; 
})
</script>

<template>
  <div class="home body">
    <div class="news-wrapper">
      <div class="news">
        <Split :delay="0"><h1 data-slide>News</h1></Split>
        <Split :delay="1"><p data-line>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, nisi eu consectetur consectetur,
          nisl nunc consectetur nisl, eget consectetur nisl nunc
          eget consectetur nisl nunc.
        </p></Split>
        <div class="newsTile">
          <div class="tile">
            <h3>title</h3>
          </div>
          <div class="tile">
            <h3>title</h3>
          </div>
          <div class="tile">
            <h3>title</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.news-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.news {
  width: 100%;
}

.newsTile {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  width: 100%;
  margin-top: 3rem;
  //background-color:blue;
  
  .tile {
    background: var(--flavor);
    background-image: var(--gradient-13);
    border-radius: 0.4rem;
    height: 250px;
    padding: 2em;
    display: flex;
    align-items: end;

    h3 {
      color: var(--background);
    }
  }
}
</style>