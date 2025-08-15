<script setup>
import { ref, watch, onMounted, onBeforeUnmount, defineExpose } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  closeOnEsc: {
    type: Boolean,
    default: true,
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['update:modelValue', 'open', 'close']);

const isOpen = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
  isOpen.value = val;
});

watch(isOpen, (val) => {
  emit('update:modelValue', val);
  emit(val ? 'open' : 'close');
  document.body.style.overflow = val ? 'hidden' : '';
});

const close = () => {
  if (props.closeOnClickOutside) {
    isOpen.value = false;
  }
};

const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.closeOnEsc && isOpen.value) {
    close();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});

defineExpose({
  open: () => (isOpen.value = true),
  close,
});
</script>

<template>
    <div v-if="isOpen" class="globalmodal-overlay img-modal" @click.self="close" role="dialog" aria-modal="true">
      <div class="globalmodal-box" @click="close">
        <h3 v-if="name" class="img-modal--title">{{ name }}</h3>
        <div class="globalmodal-container img-modal-container">
          <button class="globalmodal-close" @click="close" aria-label="Cerrar modal">
            &times;
          </button>
          <img :src="img" class="img" :alt="name || 'Imagen de la noticia'" />
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as v;
@use '@/styles/mixins' as m;


.globalmodal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 99999;
  isolation: isolate;

  .globalmodal-box {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 0 40px;

    .img-modal--title{
      color: white;
      font-size: 18px;
    }

    .globalmodal-container {
      position: relative;
      border-radius: 1rem;
      max-width: 80vw;
      max-height: 90vh;
      height: 90vh;
      display: flex;

      // background-color: red;

      @include m.tablet {
        height: auto;
      }

      @include m.mobile {
        max-width: 100vw;
        max-height: 100vh;
        width: 100%;
      }

      .globalmodal-close {
        position: absolute;
        top: -25px;
        right: -25px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        background-color: white;
        border-radius: 50%;
      }

      &.img-modal-container {

        // background-color: yellow;
        // width: 100%;
        // height: auto;
        .img {
          min-height: 200px;
          height: 100%;
          width: 100%;
          object-fit: contain;

          @include m.mobilexs {
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
