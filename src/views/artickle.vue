<script setup>
import { onMounted } from "vue";

import Structure from '../components/test/structure.vue';
import useNavigation from "../components/navigation/store";

const { navigation } = useNavigation();
onMounted(() => {
  navigation.value = false;
})
</script>

<template>
<div class="article">
  <Structure/>
</div>
</template>

<style lang="scss">
.article {
  background: var(--background);
  width: 100%;
}
</style>