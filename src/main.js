import Vue from 'vue'
import App from './App.vue'
import 'assets/icon/iconfont/iconfont.css'
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  router
}).$mount('#app')
