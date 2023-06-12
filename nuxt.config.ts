// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
      '@pinia/nuxt'
  ],
  
  

  imports: {
    dirs: ['./store'],
  },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
})


// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   ssr: false,
//   typescript: {
//     shim: false
//   },
//   build: {
//     transpile: ["vuetify"],
//   },
//   vite: {
//     define: {
//       "process.env.DEBUG": false,
//     },
//   },
//   nitro: {
//     serveStatic: true,
//   },
//   devServerHandlers: [],
//   hooks: {
//   },

// })


