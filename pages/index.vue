<template>
  <div class="mt-5">
    <NuxtLayout name="custom">
      <template #header /> 
      <template #navbar />
      <template #sobre-la-empresa>
        <guiasurInfo />
      </template>
      <template #inmuebles>
        <inmuebles />
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup>
  import guiasurInfo from '../pages/guiasurInfo.vue'
  import inmuebles from '../pages/inmuebles.vue'

  definePageMeta({
    layout: false,
  });
</script>
