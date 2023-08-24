<template>
  <div id="sobre-la-empresa" class="col-end-6 col-span-4 columns-xl mt-5">
    <MazCard :images="['logo-guiasur.jpg']" orientation="square">
      <template #title>
        <h2 style="margin: 0; margin-bottom: 20px">
          Sobre la empresa
        </h2>
      </template>
      <template #content>
        <p class="maz-text-muted" style="margin: 0">
            Guiasur XXI es una empresa con sede en Sevilla (Parque Empresarial Torneo), creada en 2007 
            y se dedica a la promoción inmobiliaria, entre otras cosas.
        </p>
      </template>
    </MazCard>
  </div>
</template>

<script lang="ts" setup>
  import MazCard from 'maz-ui/components/MazCard'

  /* definePageMeta({
    layout: false,
  }); */
</script>
