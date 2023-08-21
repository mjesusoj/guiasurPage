<template>
  <div class="mt-5">
    <NuxtLayout name="custom">
      <template #header /> 
      <template #navbar />
        The rest of the page
    </NuxtLayout>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: false,
  });
</script>
