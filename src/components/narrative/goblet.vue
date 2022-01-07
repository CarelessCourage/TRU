<script setup>
import Time from "./time.vue"
import Dawn from "./dawn.vue"
import Radialtype from "./utils/radialtype.vue";
import VariableText from "./variabletext.vue"
</script>

<template>
<div class="goblet">
  <Time :circleIn="true">
    <VariableText>
      <h1 class="element" v-if="true">...<br> evolves civilisation <br>...</h1>
    </VariableText>
  </Time>
  <Time :circleIn="false" v-if="true">
    <VariableText>
      <h1 class="element">...<br> evolves civilisation <br>...</h1>
    </VariableText>
  </Time>
  <Dawn v-if="true">
    <h1 class="element">...<br> corrodes mountains <br>...</h1>
  </Dawn>
  <Time :circleIn="true">
    <Radialtype>
      <h3>A new dawn of type <br> on the web</h3>
    </Radialtype>
  </Time>
</div>
</template>