<script setup>
import Time from "./time.vue"
import Dawn from "./dawn.vue"
</script>

<template>
<div class="goblet">
  <Time :circleIn="true">
    <h1 class="element">...<br> evolves civilisation <br>...</h1>
  </Time>
  <Time :circleIn="false">
    <h1 class="element">...<br> evolves civilisation <br>...</h1>
  </Time>
  <Dawn>
    <h1 class="element">...<br> corrodes mountains <br>...</h1>
  </Dawn>
</div>
</template>