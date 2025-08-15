<script setup>
import { computed } from 'vue';

const props = defineProps({
  tag: {
    type: String,
    default: 'p',
    validator: (value) => ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div'].includes(value)
  },
  // class: {
  //   type: String,
  //   default: ''
  // }
});
</script>

<template>
  <component
  class="blockipi-text"
    :is="tag"
  >
    <slot />
  </component>
</template>