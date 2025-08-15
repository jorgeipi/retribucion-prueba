import { computed, onMounted } from "vue";
import AOS from "aos";
import { getAosAttributes } from "@/utils/getAosAttributes.js";

export function useAosAttributes(block) {
  const aosAttributes = computed(() => getAosAttributes(block));

  onMounted(() => {
    AOS.init();
  });

  return {
    aosAttributes,
  };
}