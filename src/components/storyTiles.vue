<script setup>
import Split from "../utils/splitting.vue"
import Tile from "./tiles/tile.vue"
</script>

<template>
  <div class="anotherTile">
    <Tile path="/info">
      <Split :delay="0.5">
        <p>This is a title that is long and says many things</p>
        <h3 data-line>
          We cant always be on top of 
          every problem. The problem 
          must unfurl itself over time
        </h3>
        <p class="button">Read More</p>
      </Split>
    </Tile>
    <Tile path="/info">
      <Split :delay="0.5">
        <p>This is a title that is long and says many things</p>
        <h3 data-line>
          We cant always be on top of 
          every problem. The problem 
          must unfurl itself over time
        </h3>
        <p class="button">Read More</p>
      </Split>
    </Tile>
    <Tile path="/info">
      <Split :delay="0.5">
        <p>This is a title that is long and says many things</p>
        <h3 data-line>
          We cant always be on top of 
          every problem. The problem 
          must unfurl itself over time
        </h3>
        <p class="button">Read More</p>
      </Split>
    </Tile>
  </div>
</template>

<style lang="scss">
.anotherTile {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  --width: 200vw;
  width: var(--width);

  --oneTile: calc(var(--width) / 4);

  transform: translateX(calc(0% - var(--oneTile)));
  transition: all 0.5s ease;

  .tile:nth-of-type(2) .yellow {
    opacity: 1;
  }

  .tile {
    height: 45vh;
    border-radius: 1rem;

    position: relative;

    .yellow {
      opacity: 0.5;
      //z-index: 2;
    }

    h1, h2, h3, p {
      position: relative;
      z-index: 20;
    }

    h3 {
      margin: 20px 0px;
    }

    .button {
      text-align: right;
      max-width: 100%;
    }

    p {
      font-variation-settings: "wght" 400, "wdth" 100, "CNTR" 0;
      opacity: 0.5;
    }
  }
}
</style>