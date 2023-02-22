import Vue from 'vue'
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由
import router from './router'

Vue.config.productionTip = false
Vue.config.silent = true

//应用插件
Vue.use(VueRouter)

//创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
