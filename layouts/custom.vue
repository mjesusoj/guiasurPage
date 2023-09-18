<template>
  <div class="md:container md:mx-auto">
    <header>
      <slot name="header">
        <h1 class="text-4xl text-sky-500 font-bold bg-clip-text text-center mb-4">Guiasur Inmobiliaria</h1>
      </slot>
    </header>
    <main>
      <slot name="navbar">
        <nav class="col-10 col-start-2 col-span-4 flex md:justify-center mt-5 md:mt-0">
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
                  <a title="Inmuebles a Alquilar o Vender" href="#formulario-de-contacto" class="text-gray-300 hover:bg-blue-300 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                      Formulario de contacto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </slot>
      <div class="grid grid-cols-1 lg:grid-cols-6 gap-4">
        <slot name="sobre-la-empresa" />
      </div>
      <div class="flex flex-col md:flex-row justify-center gap-4 md:p-[1%] p-[3%]">
        <slot name="inmuebles" />
      </div>
      <div class="xl:flex justify-center gap-4 md:p-[1%] p-[3%]">
        <slot name="formulario-de-contacto" />
      </div>
    </main>
    <footer class="">
      <slot name="footer">
        <p class="text-2xl text-gray-400 px-3 py-2 rounded-md font-bold bg-clip-text text-center mt-5 mb-5">©️ Guiasur XXI 2023</p>
      </slot>
    </footer>
  </div>
</template>

<style lang="postcss">
  body {
    @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
  }
</style>