<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div 
    class="blockipi-background-image"
    :style="{ backgroundImage: `url(${src})` }"
    role="img"
    :aria-label="alt || undefined"
  >
    <slot></slot>
  </div>
</template>