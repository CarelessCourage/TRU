<template>
<div class="breaker">
  <div class="cap" data-speed="1.3"></div>
  <div class="base"></div>
</div>
</template>

<style lang="scss" scoped>
.breaker {
  width: 100%;
  min-height: 40em;
  grid-column: span 6;
  overflow: hidden;
  position: relative;

  .cap {
    background-color: var(--foreground);
    width: 100%; min-height: 50em;


    transform: scale(2);
    position: absolute;
    top: 30em;

    --rounded: 50em;
    border-top-left-radius: var(--rounded);
    border-top-right-radius: var(--rounded);
  }
  .base {
    background-color: var(--foreground);
    width: 100%; min-height: 10em;
    opacity: 0.2;
  }
}
</style>