import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Navbar from './components/Navbar/Navbar.vue'
import Esp from './components/esp/esp.vue'
import Cyclone from './components/cyclone/cyclone.vue'
import Signup from './components/signup/signup.vue'
import Login from './components/login/login.vue'
import CycloneResult from './components/cyclone/cyclone_result.vue'
import CycloneCompare from './components/cyclone/cyclone_compare.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // { path: '/', name: 'home', component: Home },
    // { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ './views/About.vue') },
    {
      path: '/welcome',
      component: Navbar,
      children: [
        { path: 'esp/:id', component: Esp },
        { path: 'cyclone/:id', component: Cyclone },
        { path: 'cyclone_result/:id', component: CycloneResult },
        { path: 'cyclone_compare/:id', component: CycloneCompare }
      ]
    },
    {
      path: '*', redirect: '/signup'
    },
    {
      path: '/login', component: Login
    },
    {
      path: '/signup', component: Signup
    }
  ]
})
