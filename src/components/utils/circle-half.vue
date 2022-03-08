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

  padding-top: 10rem;

  p {
    width: 24.9rem;
    margin: auto;
    opacity: 0.4;
    padding-top: 1rem;
    padding-bottom: 10rem;
  }
}
</style>