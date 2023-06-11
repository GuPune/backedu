<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

    <p>Counter: {{ getCount }}</p>
  <button type="button" @click="increment">Increment</button>
  </div>
</template>



<script setup lang="ts">

import { useCounterStore } from '@/stores/counter';

</script>
