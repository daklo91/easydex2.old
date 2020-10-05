import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PokemonDisplay from '../views/PokemonDisplay.vue'
import Search from '../views/Search.vue'
import Filter from '../views/Filter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/pokemon-display',
    name: 'PokemonDisplay',
    component: PokemonDisplay
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/filter',
    name: 'Filter',
    component: Filter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
