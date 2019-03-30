import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Navbar from './components/Navbar/Navbar.vue'
import Esp from './components/esp/esp.vue'
import Cyclone from './components/cyclone/cyclone.vue'
import FacebookLogin from './components/facebooklogin/facebooklogin.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // { path: '/', name: 'home', component: Home },
    // { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ './views/About.vue') },
    {
      path: '/',
      component: Navbar,
      children: [
        { path: '/login', component: FacebookLogin },
        { path: '/esp', component: Esp },
        { path: '/cyclone', component: Cyclone }
      ]
    }
  ]
})
