<script setup>
import { onMounted } from "vue"
import PaperWrapper from "../components/paperWrapper.vue"
import Combobox from "../components/filter/combobox.vue"
import List from "../components/list.vue"
import MediaList from "../components/imglist.vue"

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);


onMounted(() => {
  gsap.to(window, {duration: 0, scrollTo: "0"});
});
</script>

<template>
  <PaperWrapper>
    <div class="content padding">
      <Combobox/>
      <List>
        <h1>Accademic Research</h1>
        <p data-speed="1.2">
          This is a list of research publications related to typography. 
          It is gathered by TRU users and curated by the TRU team. 
          Feel free to submit any suggestions along with a short abstract to our official email address: research@tru.com
        </p>
      </List>
      <MediaList>
        <h1>Lessons in Web Type</h1>
        <p data-speed="1.2">
          This is a list of research publications related to typography. 
          It is gathered by TRU users and curated by the TRU team. 
          Feel free to submit any suggestions along with a short abstract to our official email address: research@tru.com
        </p>
      </MediaList>
    </div>
  </PaperWrapper>
</template>

<style lang="scss">
.simple .content {
  padding: 1em 3em 12em;
  display: grid; gap: 2em;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 400px) { padding: 1em 0em 12em; }
}

.comboBox {
  margin-top: 0em;
  margin-bottom: 5em;
  grid-column: span 6;
  z-index: 1000;
}
</style>