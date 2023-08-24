// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxthq/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  css: [
    'maz-ui/css/main.css',
  ],
  build: {
    transpile: ['maz-ui'], // ⚠️ important ⚠️
  },
  colorMode: {
    classSuffix: ''
  },
  devtools: { enabled: true },
})