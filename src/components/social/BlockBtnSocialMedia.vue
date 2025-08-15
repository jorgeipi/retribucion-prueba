<script setup>
// import { useNote } from '@modules/retribucion/composables/useNote';
// import { useAosAttributes } from "@modules/retribucion/composables/useAosAttributes";

</script>

<template>
  <a rel="noopener">
    <button class="block-btn_social-media">
      <slot></slot>
    </button>
  </a>
</template>


<style scoped lang="scss">
.block-btn_social-media {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  flex-shrink: 0;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 50%;

  color: #000;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 36px;

  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: black;
    border-color: white;
    color: white;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    color: black;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
    background-color: rgba(0, 0, 0, 0.1);
    border-color: #000;
  }
}

</style>