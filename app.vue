<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { init } from "@aptabase/web";

  init("A-EU-0235263891"); // 👈 this is where you enter your App Key

  useHead({
    title: 'Guiasur Inmobiliaria - Inmuebles en Alquiler o en Venta',
    meta: [
      { 
        name: 'description', 
        content: 'Alquiler de Oficina de 100m2 en Parque Empresarial Torneo, Sevilla y Venta de Locales Comerciales, Oficinas y Plazas de Garaje en Arahal (Sevilla)' 
      }
    ]
  })
</script>