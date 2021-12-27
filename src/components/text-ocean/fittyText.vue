<script setup>
import { onMounted, ref } from "vue";

const slotRef = ref(null);
let slotText = ref("");

onMounted(() => {
  //i have no idea why this works. but it does, and thats great
  slotText.value = slotRef.value.innerText;
});
</script>

<template>
  <div class="fittyWrapper">
    <h1 id="fitty" ref="slotRef">
      <span><slot></slot></span>
      <span>{{" "}}</span>
      <span><slot></slot></span>
    </h1>
  </div>
</template>

<style scoped>
  h1 {
    display: inline-block;
    white-space: nowrap;
    font-size:2em;
  }
</style>