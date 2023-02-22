/**
 * 配置跨域访问
 * @date 23/02/12
 * @author gwj
 */

export default {
  // 配置跨域访问
  modules: [
    '@nuxtjs/axios','@nuxtjs/proxy'
  ],
  axios: {
      proxy: true,    // 表示开启代理
      prefix: '/api', // 表示给请求url加个前缀/api
      credentials: true // 开启跨域
  },
  proxy: {
    '/api': {
      target: 'http://win.gwj1314.cn:1337', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '/api', // 把 /api 替换成 /
      }
    }
  },
  build: {
    vendor: ['axios'] //为防止重复打包
  },
  // 以下为默认配置
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'juejin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
