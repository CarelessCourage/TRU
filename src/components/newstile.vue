<script setup>
import { onMounted } from "vue";
import useNavigation from "./navigation/store";
import Split from "../utils/splitting.vue"
import Tile from "./tiles/tile.vue"

const { navigation } = useNavigation();
onMounted(() => {
  navigation.value = false; 
})
</script>

<template>

    <div class="news-wrapper">
      <div class="news">
        <Split :delay="0">
          <h1 data-slide>News</h1>
          <p data-line>
            Here are the latest posts we have published as of today. 
            We regularly post artickles and tutorials on the topics of typography. 
            Subscribe yo our newsletter to be updated on new posts and stay tuned 
            for more content related to typography.
          </p>
        </Split>
        <Split :delay="0" v-if="true">
          <div class="newsTile stagger">
            <Tile path="/artickle">
              <h3 data-line>Livestream - june 10th</h3>
            </Tile>
            <Tile path="/artickle">
             <h3 data-line>Roadmap for 2022</h3>
            </Tile>
            <Tile path="/artickle">
              <h3 data-line>new team member</h3>
            </Tile>
          </div>
        </Split>
      </div>
    </div>

</template>

<style lang="scss">
.news-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--background);
}

.news {width: 100%;}
.newsTile {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  
  width: 100%;
  margin-top: 3rem;
}

.splitWrapper .newsTile {
  --speed: 0.2s;
}
</style>