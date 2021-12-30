import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/home.vue"
import Artickle from "../views/artickle.vue"
import Info from "../views/info.vue"

const routes = [
  { 
    path: '/',
    name: "home",
    component: Home
  },
  { 
    path: '/artickle',
    name: "artickle",
    component: Artickle
  },
  { 
    path: '/info',
    name: "info",
    component: Info
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router