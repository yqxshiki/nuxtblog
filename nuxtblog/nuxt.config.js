const env = require("./env")
export default {
  mode: 'universal',
  render: {
    resourceHints: true, // 添加prefetch和preload，以加快初始化页面加载时间。如果有许多页面和路由，可禁用此项
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Scrook.Blog',
    titleTemplate: '%s --一直向前',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'baidu-site-verification',
      content: '3nPimulmkL'
    },
    { name: "renderer", content: "webkit" },
    { name: "force-rendering", content: "webkit" },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || 'Scrook博客'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/icon.jpg'
    }],
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
    'assets/page.css',
    'assets/common.scss',
    'assets/border.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/vuelazyload'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    // ['@nuxtjs/dotenv', { filename: '.env.development' }],
    // 配置选项
  ],
  styleResources: {
    scss: ['./assets/variables.scss'],
  },
  generate: {
    dir: "web",
  },
  env: {
    baseUrl: env[process.env.MODE].ENV_API
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    extractCSS: true,
    // analyze: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}