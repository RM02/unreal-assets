export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Unreal Assets',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: 'body'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img1.png' },
      { rel: 'stylesheet', src: 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css' },
      { type: 'script', src: 'https://code.jquery.com/jquery-3.6.0.js', integrity: 'sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=', defer: true },

      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap' },
    ]
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      }
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/client.js", mode: "client" },
    { src: "~/plugins/boostrap.js", mode: "client" }
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'three',
      '@nuxtjs/vuetify'
    ],
  }
}
