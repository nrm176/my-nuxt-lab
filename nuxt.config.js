import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},

      /* ロボット対策 */
      {name: 'robots', content: 'noindex'},
      {name: 'robots', content: 'nofollow'},

      /* 互換表示させないIE対策 */
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},

      /* モバイル対応 */
      {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
      /* 著者情報 */
      {name: 'author', content: 'nerimplo'},

      /* OGPタグ */
      {hid: 'og:site_name', property: 'og:site_name', content: 'サイト名'},
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {hid: 'og:url', property: 'og:url', content: 'サイトURL'},
      {hid: 'og:title', property: 'og:title', content: 'サイト名'},
      {hid: 'og:description', property: 'og:description', content: '共通ディスクリプション'},
      {hid: 'og:image', property: 'og:image', content: 'サイトURL/ogp/common.jpg'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr', crossorigin: 'anonymous'
      },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    '~/static/css/global.css'
  ],

  env: {
    function_url: `${process.env.DEPLOY_PRIME_URL}/.netlify/functions`
    // function_url: process.env.CONTEXT === undefined ? process.env.DEPLOY_PRIME_URL : process.env.CONTEXT == 'production' ? `${process.env.URL}/.netlify/functions` : process.env.CONTEXT == 'dev' ? `${process.env.DEPLOY_PRIME_URL}/.netlify/functions` : 'http://localhost:9000'
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: "~plugins/carousel.js", ssr: false},
    {src: '~plugins/vee-validate.js', ssr: true},
    {src: "~plugins/persistedstate.js", ssr: false},
    {src: "~plugins/api.js", ssr: false},
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    'nuxt-buefy',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://127.0.0.1:8000/api/v1/',
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
