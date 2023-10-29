// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [['@nuxtjs/google-fonts', {
    families: {
      Montserrat: [300, 400, 700],
    },
  }
  ]],
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/abstracts" as *;'
        }
      }
    }
  }
})
