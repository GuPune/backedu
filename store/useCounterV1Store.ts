import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterV1Store = defineStore("counterV1", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  function add() {
    alert('ok');
  }

  return { count, doubleCount, add };
});