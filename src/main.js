import Vue from 'vue'
import App from './App.vue'
import Store from './store/store'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false


const router = new VueRouter();

new Vue({
  render: h => h(App),
  store: Store,
  router
}).$mount('#app')
