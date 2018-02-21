module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jon Waldstein',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio' }
    ],
    htmlAttrs: {
      class: 'has-navbar-fixed-top'
    },
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,500,600,700|Open+Sans+Condensed:300|Quicksand:400,500,700|Montserrat:300,400,500' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'axios',
      'wpapi'
    ],
  },
  css: [
    'bulma',
    '@/assets/css/main.scss',
    '@/assets/css/main.css',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    proxy: true // Can be also an object with default options
  },

  proxy: {
    '/fishtivityApi/': 'https://fishtivity.net/wp-json/wp/v2/posts',
  }
}
