<script setup>
defineProps({
  navigation: Boolean,
});
</script>

<template>
  <div class="burger-wrapper">
    <div 
      class="burger" 
      :class="{cross: navigation}" 
    >
      <div class="burger-line"></div>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .burger {
    --line: 6px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    top: 2em; right: 2em;
    position: fixed;
    z-index: 500000;

    height: 30px;
    box-sizing: content-box;

    //border: var(--line) solid var(--foreground);
    padding: 12px;
    cursor: pointer;

    overflow: hidden;
    background: var(--background);
    transition: 0.2s ease-in-out;

    @media (max-width: 800px) {
      top: 0.2em; right: 0.2em;
    }
  }

  .burger-line {
    width: 100%;
    height: var(--line);
    width: var(--line);
    border-radius: 50%;
    background-color: var(--foreground);
    transition: .2s ease-in-out;
  }

  .burger.cross {
    border: 0px solid var(--foreground);
    .burger-line {
      border-radius: 1em;
      --offset: 3px;
      &:nth-child(1) {
        width: 40px;
        transform: rotate(45deg) translateY(calc(0px - var(--offset)));
        transform-origin: center left; 
      }
      &:nth-child(2) {
        transform: translateX(-19px);
      }
      &:nth-child(3) {
        width: 40px;
        transform: rotate(-45deg) translateY(var(--offset));
        transform-origin: center left; 
      }
    }
  }

  .burger:not(.cross):hover .burger-line {
    border-radius: 1em;
    &:nth-child(1) {
      width: 42px;
    }
    &:nth-child(2) {
      width: 22px;
    }
    &:nth-child(3) {
      width: 42px;
    }
  }

  .burger:active {
    height: 3rem;
  }
</style>