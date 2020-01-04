export default {
  mode: 'universal',
  render: {
    resourceHints: false, // 添加prefetch和preload，以加快初始化页面加载时间。如果有许多页面和路由，可禁用此项
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Scrook.Blog',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/icon.jpg'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#f40'
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'assets/main.css',
    'assets/common.css',
    'assets/border.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}