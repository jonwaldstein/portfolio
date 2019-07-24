module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Jon Waldstein | Web Developer RI CT",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "This website showcases web developer, Jon Waldstein, and his work"
      }
    ],
    htmlAttrs: {
      class: "has-navbar-fixed-top"
    },
    script: [{ src: "https://use.fontawesome.com/releases/v5.0.6/js/all.js" }],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Raleway:400,500,600,700|Open+Sans+Condensed:300|Quicksand:400,500,700|Montserrat:300,400,500"
      }
    ]
  },
  plugins: [{ src: "~plugins/ga.js", ssr: false }],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    vendor: ["axios"]
  },
  css: ["bulma", "@/assets/css/main.scss", "@/assets/css/main.css"],
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],

  axios: {
    proxy: true // Can be also an object with default options
  }
};
