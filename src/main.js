import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuetify from 'vuetify'
import VueAxios from 'vue-axios'
// import 'materialize-css'
// import 'materialize-css/dist/css/materialize.min.css'
// import VueMathjax from 'vue-mathjax'
// Vue.use(VueMathjax)
Vue.use(VueAxios, axios)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
