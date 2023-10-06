<template>
    <div id="inmuebles" class="lg:basis-1/3 mt-5">
      <h2 class="text-3xl text-blue-300 font-bold bg-clip-text mb-4">Oficina en Alquiler o Venta</h2>
      <MazCard
        :images="imagesTorneo"
        :height="200"
        zoom
      >
        <template #title>
          <h3 style="margin: 0">
            🏢 Oficina (Alquiler / Venta)
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
              y dispone de muy buena localización, ya que se puede llegar a través de la SE-30 y la SE-20.
            </p>
        </template>
      </MazCard>
    </div>
    <div class="lg:basis-1/3 col-span-2 mt-5 cardOther">
      <h2 class="text-3xl text-blue-300 font-bold bg-clip-text mb-4">Locales, Oficinas y Plazas de Garaje</h2>
      <MazCard
        :images="imagesCorredera"
        :height="200"
        zoom
      >
        <template #title>
          <h3 style="margin: 0">
            🏢 Venta de Locales Comerciales, Oficinas y Plazas de Garaje en Arahal
          </h3>
        </template>
        <template #subtitle>
          <span>
              Calle Corredera 19, Arahal (Sevilla)
          </span>
        </template>
        <template #content>
          <p class="maz-text-muted" style="margin: 0; margin-top: 20px">
              Se venden locales comerciales, oficinas y plazas de garaje en el centro de Arahal, interesados
              mandar correo electrónico al correo de la imagen o rellenar el formulario.
          </p>
        </template>
      </MazCard>
    </div>
   
</template>

<script lang="ts" setup>
  import MazCard from 'maz-ui/components/MazCard'

  import { trackEvent } from "@aptabase/web";

  const imagesTorneo = [
      { src: './torneo-oficina/oficina1.jpg', alt: '' },
      { src: './torneo-oficina/oficina2.jpg', alt: '' },
      { src: './torneo-oficina/oficina3.jpg', alt: '' },
      { src: './torneo-oficina/oficina4.jpg', alt: '' },
      { src: './torneo-oficina/oficina5.jpg', alt: '' },
      { src: './torneo-oficina/oficina6.jpg', alt: '' },
      { src: './torneo-oficina/oficina7.jpg', alt: '' }
  ]

  const imagesCorredera = [
    { src: './corredera-images/corredera-1.jpg', alt: 'Fachada' },
    { src: './corredera-images/corredera-2.jpg', alt: 'Planta Garaje -1' },
    { src: './corredera-images/corredera-3.jpg', alt: 'Planta Garaje -2' },
    { src: './corredera-images/corredera-4.jpg', alt: 'Planta Garaje -3' },
    { src: './corredera-images/corredera-5.jpg', alt: 'Azotea' },
    { src: './corredera-images/corredera-6.jpg', alt: 'Azotea 2' },
    { src: './corredera-images/corredera-7.jpg', alt: 'Azotea 3' }
  ]

  trackEvent("app_started");
  trackEvent("page_view", { name: "Inmuebles", path: "#inmuebles" });
</script>

<style scoped>
    .cardOther {
        /* display: grid; */
    }
</style>