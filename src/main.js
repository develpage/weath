import Vue from 'vue'
import App from './App.vue'
import Store from './store/store'
import VueRouter from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_TOKEN
  }
})
Vue.config.productionTip = false


const router = new VueRouter();

new Vue({
  render: h => h(App),
  store: Store,
  router
}).$mount('#app')
