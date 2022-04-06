<script setup>
import '@fortawesome/fontawesome-free/js/all.js';
</script>

<template>
  <div class="sidebar">
    <div class="square">
      <i class="fas fa-home"></i>
    </div>
    <div class="square">
      <i class="fas fa-book"></i>
    </div>
    <div class="square">
      <i class="fas fa-folder-open"></i>
    </div>
  </div>
</template>

<style lang="scss">
.sidebar {
  top: 2em;
  right: 0em;
  position: fixed;
  z-index: 500000;
  .square {
    background: var(--foreground);
    color: var(--background);
    height: 2.1em; width: 2.1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>