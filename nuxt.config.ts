// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '~/modules/sitemap',
  ],
  sitemap: {
    hostname: 'https://guiasurinmobiliaria.vercel.app/'
  },
  css: [
    'maz-ui/css/main.css',
  ],
  build: {
    transpile: ['maz-ui'], // ⚠️ important ⚠️
  },
  colorMode: {
    classSuffix: ''
  },
  devtools: { enabled: true }
})