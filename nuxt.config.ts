// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
      '@pinia/nuxt'
  ],
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.API_BASE || "default_api_url",
      otherUrl: process.env.OTHER_URL || "default_other_url"
    }
  },
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


