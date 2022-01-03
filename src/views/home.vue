<script setup>
import { onMounted } from "vue";
import useNavigation from "../components/navigation/store";
import Split from "../utils/splitting.vue"
import Tile from "../components/tiles/tile.vue"

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
          <Tile>
            <Split :delay="0.5"><h3 data-line>Livestream - june 10th</h3></Split>
          </Tile>
          <Tile>
            <Split :delay="0.9"><h3 data-line>Roadmap for 2022</h3></Split>
          </Tile>
          <Tile>
            <Split :delay="1.2"><h3 data-line>new team member</h3></Split>
          </Tile>
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

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  
  width: 100%;
  margin-top: 3rem;
  //background-color:blue;
}
</style>