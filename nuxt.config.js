const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Baloo+Bhaijaan|Comfortaa' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&amp;subset=cyrillic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&amp;subset=cyrillic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Mallanna|Nixie+One&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Righteous&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fredoka+One|Gloria+Hallelujah|Montserrat|Righteous&display=swap' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
