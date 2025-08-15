<script setup>
defineProps({
  // Ruta de la imagen (requerida)
  src: {
    type: String,
    required: true
  },
  // Texto alternativo para accesibilidad
  alt: {
    type: String,
    default: ''
  },
});
</script>

<template>
    <img
      :src="src"
      :alt="alt"
      class="blockipi-image"
      loading="lazy"
    />
</template>