<template>

  <div class="circleTile">
    <div class="halfcircle">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.circleTile {
  background: var(--flavor);
}

.halfcircle {
  position: relative;
  z-index: 10;
  min-height: 100vh;
  background: var(--background);
  border-radius: var(--halfCircle-radius) var(--halfCircle-radius) 0px 0px;

  padding-top: 12rem;

  h1 { 
    text-align: center;
    text-transform: capitalize;
    font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 10;
    line-height: 3rem;
    padding-bottom: 12rem;
    width: max-content;
    margin: auto;
  }

  p { 
    text-align: center;
    font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 10;
  }
}
</style>