import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'blue'
})

import { sync } from 'vuex-router-sync'
import router from './router/router'
import store from './store/store'

sync(store, router)
store.dispatch('loadArticles')

import App from './components/App'

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
