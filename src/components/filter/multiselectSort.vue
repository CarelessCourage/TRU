<script setup>
import Multiselect from '@vueform/multiselect'
import '@vueform/multiselect/themes/default.css'

import { ref } from "vue"

const value = ref(null);
const options = ref([
  {label: 'Age of Sorce'},
  {label: 'Date Added'},
  {label: 'Alphabetical'},
])

function testOption(what) {
  console.log("lol: ", what);
  console.log("lol1: ", value.value);
}
</script>

<template>
<Multiselect
  v-model="value"
  :options="options"
  :searchable="true"
  mode="tags"
  placeholder="Sort content"
  @select="(lol) => testOption(lol)"
  class="text web"
>
  <template v-slot:tag="{ option, handleTagRemove, disabled }">
    <div class="multiselect-tag text web">
     {{ option.label }}
      <span
        v-if="!disabled"
        class="multiselect-tag-remove"
        @mousedown.prevent="handleTagRemove(option, $event)"
      >
        <span class="multiselect-tag-remove-icon"></span>
      </span>
    </div>
  </template>

  <template v-slot:option="{ option }">
    <p class="web">{{ option.label }}</p>
  </template>
</Multiselect>
</template>

<style lang="scss">
.multiselect-group-label {
  background-color: var(--shade);
  border-bottom: dotted 1px var(--foreground);
  opacity: 0.7;
  span {
    opacity: 0.7;
    font-variation-settings: "wght" 100, "CNTR" 90;
    font-size: 1.1rem;
    letter-spacing: 1px;
    font-style: italic;
    
  }

  &.is-selected {
    color: var(--flavor-contrast);
    background-color: var(--flavor);
    span {
      opacity: 1;
    }
  }
}

li.multiselect-option {
  padding-left: 15px;
  transition: .1s ease-in-out;
  &:hover {
    background: var(--flavor);
    color: var(--flavor-contrast);
  }

}

.multiselect {
  background-color: var(--shade);
  border: none;
  --ms-ring-color: var(--foreground);
  --ms-ring-width: 1px;
  --ms-tag-bg: var(--flavor);
  transition: .1s ease-in-out;

  --ms-group-label-bg-selected: var(--foreground);
  --ms-group-label-color-selected: var(--background);

  --ms-group-label-bg-selected-pointed: var(--foreground);
  --ms-group-label-color-selected-pointed: var(--foreground);

  --offsetForSearchIcon: 32px;
  padding: calc(var(--margin) / 1.5);
  padding-left: var(--offsetForSearchIcon);
  .multiselect-placeholder {
    left: var(--offsetForSearchIcon);
  }

  .multiselect-group-label {
    background: var(--foreground);
    color: var(--background);
    //--ms-group-label-bg-selected-pointed: var(--foreground);
    --ms-group-label-color-selected-pointed: var(--background);
  }

  .multiselect-option {
    background: var(--shade);
  }

  input,
  .multiselect-search, 
  .multiselect-tags-search {
    background-color: rgba(255, 255, 255, 0);
  }

  .multiselect-tag {
    overflow: hidden;
    animation-name: growIn;
    animation-duration: .2s;
    color: var(--foreground);
  }

  @keyframes growIn {
    from {
      max-width: 0px;
    }
    to {
      max-width: 100px;
    }
  }

  .multiselect-dropdown {
    max-height: 200px;
    transition: max-height .2s;
    --ms-dropdown-border-width: 1px;
    --ms-dropdown-border-color: var(--foreground);

    &.is-hidden {
      display: block;
      max-height: 0px;
      --ms-dropdown-border-width: 0px;
    }
  }
}
</style>
