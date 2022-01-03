<script setup>
  import { onMounted, ref } from "vue";
  const isMounted = ref(false)
  onMounted(() => {
    isMounted.value = true
  })
</script>

<template>
    <div class="flow-wrapper" >
      <slot></slot>
    </div>
</template>
