// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Welcome from './components/Welcome'
import Bienvenue from './components/Bienvenue'
import About from './components/About'
import Issues from './components/Issues'
import Members from './components/Members'
import Accord from './components/Accord'
import Publications from './components/Publications'

Vue.config.productionTip = false

const routes = [
  { path: '/', redirect: '/en/welcome' },
  { path: '/welcome', redirect: '/en/welcome' },
  { path: '/about', redirect: '/en/about' },
  { path: '/issues', redirect: '/en/issues' },
  { path: '/members', redirect: '/en/members' },
  { path: '/accord', redirect: '/en/accord' },
  { path: '/publications', component: Publications },
  { path: '/en/welcome', component: Welcome },
  { path: '/en/about', component: About },
  { path: '/en/issues', component: Issues },
  { path: '/en/members', component: Members },
  { path: '/en/accord', component: Accord },
  { path: '/en/publications', component: Publications },
  { path: '/fr/bienvenue', component: Bienvenue },
  { path: '/fr/faisons', component: About },
  { path: '/fr/questions', component: Issues },
  { path: '/fr/membres', component: Members },
  { path: '/fr/accord', component: Accord },
  { path: '/fr/publications', component: Publications }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior: function (to, from, savedPosition) {
    if (savedPosition) {
      console.log(savedPosition)
      return savedPosition
    } else {
      console.log('banana')
      return { x: 0, y: 0 }
    }
  }
})

Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
