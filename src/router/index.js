import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import HomeRoute from './modules/home'
import AboutRoute from './modules/about'

Vue.use(Router)

const topRoutes = [
  HomeRoute,
  AboutRoute
]

export default new Router({
  routes: topRoutes
})

