<script setup>
import PaperWrapper from "../components/paperWrapper.vue"
</script>

<template>
<PaperWrapper>
  <div class="hirarchy">

    <h1>Title of document</h1>
    <h3>compiling and curating collections of typographic research and resources; celebrating the history of type and the cutting edge of type on the web</h3>
    <p class="details">Click and drag the titles below. Its an infinite scroll listing featured essays on typography</p>
  
    <h2>Subtitle</h2>
    <p>They recognized that in all human endeavors a technology had adjusted to man’s demands; while no marked change or improvement had taken place in man’s most profound invention, printing-writing, since Gutenberg.</p>
    <h3 class="pullquote">compiling and curating collections of typographic research and resources; celebrating the history of type and the cutting edge of type on the web</h3>
    <p>They recognized that in all human endeavors a technology had adjusted to man’s demands; while no marked change or improvement had taken place in man’s most profound invention, printing-writing, since Gutenberg.</p>
    <p>This is a list of research publications related to typography. It is gathered by TRU users and curated by the TRU team. Feel free to submit any suggestions along with a short abstract to our official email address: research@tru.com</p>
    

    <h2>Subtitle</h2>
    <p>They recognized that in all human endeavors a technology had adjusted to man’s demands; while no marked change or improvement had taken place in man’s most profound invention, printing-writing, since Gutenberg.</p>
    <h4>The manual skill and approach of the craftsman was seen to be inevitably replaced by mechanical techniques.</h4>
    <p>They recognized that in all human endeavors a technology had adjusted to man’s demands; while no marked change or improvement had taken place in man’s most profound invention, printing-writing, since Gutenberg.</p>
    <p>This is a list of research publications related to typography. It is gathered by TRU users and curated by the TRU team. Feel free to submit any suggestions along with a short abstract to our official email address: research@tru.com</p>

    <h1 class="element">Element Title</h1>

    <h1>header 1</h1>
    <h2>header 2</h2>
    <h3>header 3</h3>
    <h4>header 4</h4>

  </div>
</PaperWrapper>
</template>

<style>
.hirarchy {
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: var(--background);
  padding: 5em;
  max-width: 50em;
}

.hirarchy .element {
  text-align: left;
}
</style>