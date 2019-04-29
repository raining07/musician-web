import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import HomeRoute from './modules/home'
import AboutRoute from './modules/about'
import ContactRoute from './modules/contact'
import GalleryRoute from './modules/gallery'
import PricingRoute from './modules/pricing'
import PromoRoute from './modules/promo'
import ServicesRoute from './modules/services'
import SkillRoute from './modules/skill'
import TeamRoute from './modules/team'
import TestimonialsRoute from './modules/testimonials'

Vue.use(Router)

const topRoutes = [
  HomeRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  PricingRoute,
  PromoRoute,
  ServicesRoute,
  SkillRoute,
  TeamRoute,
  TestimonialsRoute
]

export default new Router({
  routes: topRoutes
})
