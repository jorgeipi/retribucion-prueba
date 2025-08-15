<script setup>
import { ref, watch, onMounted, onBeforeUnmount, defineExpose } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const props = defineProps({
  modelValue: Boolean,
  sliders: {
    type: Array,
    required: true
  },
  name: String,
  closeOnEsc: {
    type: Boolean,
    default: true
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['update:modelValue', 'open', 'close']);

const isOpen = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
  isOpen.value = val;
});

watch(isOpen, (val) => {
  emit('update:modelValue', val);
  emit(val ? 'open' : 'close');
});

const close = () => {
  if (props.closeOnClickOutside) {
    isOpen.value = false;
  }
};

const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.closeOnEsc && isOpen.value) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
});

// Métodos expuestos
const open = () => { isOpen.value = true; };
defineExpose({ open, close });
</script>

<template>
  <transition name="fade">
    <div v-if="isOpen" class="globalmodal-overlay" @click.self="close" role="dialog" aria-modal="true">
      <h3 v-if="name" class="swiper--title">{{ name }}</h3>
      <div class="globalmodal-container">
        <button class="globalmodal-close" @click="close" aria-label="Cerrar modal">&times;</button>

        <swiper
          space-between="30"
          :navigation="true"
          :pagination="{ clickable: true }"
          :modules="[Pagination, Navigation]"
          class="swiper-modal__swiper"
        >
          <swiper-slide v-for="(slider, index) in sliders" :key="index">
            <img :src="slider.url" class="slider-image" :alt="slider.nombre || slider.name" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@use '@styles/base/variables' as v;
@use '@styles/base/mixins' as m;

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

  .swiper--title {
    max-width: 80vw;
    padding: 0 3rem;
    font-size: 1.5rem;
    color: v.$white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .globalmodal-container {
    position: relative;
    border-radius: 1rem;
    max-width: 80vw;
    max-height: 90vh;
    display: flex;

    @include m.mobile {
      max-width: 100vw;
      max-height: 100vh;
      width: 100%;
      height: 60%;
    }

    .globalmodal-close {
      position: absolute;
      top: 0;
      right: 0;
      background: white;
      border: none;
      font-size: 2.4rem;
      cursor: pointer;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
    }
  }
}
</style>