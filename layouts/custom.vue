<template>
  <div class="md:container md:mx-auto">
    <header>
      <slot name="header">
        <h1 class="text-4xl text-sky-500 font-bold bg-clip-text text-center mb-4">Guiasur Inmobiliaria</h1>
      </slot>
    </header>
    <main class="grid grid-cols-6 gap-4">
      <slot name="navbar">
        <nav class="col-start-2 col-span-4 flex md:justify-center mt-5 md:mt-0">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="flex items-center md:hidden"></div>
            <div class="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
              <div class="hidden md:block md:ml-6">
                <div class="flex space-x-4">
                  <a title="Inicio" href="#" class="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                      Inicio
                  </a>
                  <a title="Sobre la empresa" href="#sobre-la-empresa" class="text-gray-300 hover:bg-blue-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                      Sobre la empresa
                  </a>
                  <a title="Inmuebles a Alquilar o Vender" href="#inmuebles" class="text-gray-300 hover:bg-blue-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                      Inmuebles a Alquilar o Vender
                  </a>

                  <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }">
                    <UButton 
                      class="px-3 py-2 rounded-md text-sm font-medium" 
                      label="Inmuebles a Alquilar o Vender" 
                      trailing-icon="i-heroicons-chevron-down-20-solid" />
                  </UDropdown>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </slot>
      <slot name="sobre-la-empresa" />
    </main>
    <slot name="inmuebles" />
  </div>
</template>

<script setup>
  const items = [
    [{
      label: 'Oficina en Sevilla - Torneo',
    }],
    [{
      label: 'Solar en Antequera',
    }],
    [{
      label: 'Locales y aparcamientos en Arahal',
    }]
  ]
</script>

<style lang="postcss">
  body {
    @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
  }
</style>