<template>
    <div class="grid grid-cols-6 gap-4">
        <div id="inmuebles" class="col-end-4 col-span-2  mt-5">
          <h3 class="text-3xl text-blue-300 font-bold bg-clip-text mb-4">Inmuebles a alquilar o vender</h3>
          <MazCard
            :images="['logo-guiasur.jpg']"
            :gallery-height="200"
            zoom
          >
            <template #title>
              <h3 style="margin: 0">
                Oficina (Alquiler / Venta)
              </h3>
            </template>
            <template #subtitle>
              <span>
                  Calle Astronomia, 1 - TORRE 3, PLT 7, MODULO 1, Sevilla, 41015 (Torneo Parque Empresarial)
              </span>
            </template>
            <template #content>
              <p class="maz-text-muted" style="margin: 0; margin-top: 20px">
                  Este inmueble es una oficina ubicada en el parque empresarial de Torneo en Sevilla. Tiene 100m2 
                  y muy buena localización
              </p>
            </template>
          </MazCard>
        </div>
    </div>
</template>

<script lang="ts" setup>
  import MazCard from 'maz-ui/components/MazCard'

  import { trackEvent } from "@aptabase/web";

  trackEvent("app_started");
  trackEvent("page_view", { name: "Inmuebles", path: "#inmuebles" });

  /* definePageMeta({
    layout: false,
  }); */
</script>