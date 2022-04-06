import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/home.vue"
import Artickle from "../views/artickle.vue"
import Archive from "../views/archive.vue"
import Info from "../views/info.vue"
import Simple from "../views/simple.vue"
import Research from "../views/research.vue"
import Herbert from "../views/herbert.vue"
import Josef from "../views/josef.vue"

const routes = [
  { 
    path: '/legacy',
    name: "legacy",
    component: Home
  },
  { 
    path: '/archive',
    name: "archive",
    component: Archive
  },
  { 
    path: '/artickle',
    name: "artickle",
    component: Artickle
  },
  { 
    path: '/research',
    name: "research",
    component: Research
  },
  { 
    path: '/info',
    name: "info",
    component: Info
  },
  { 
    path: '/herbert',
    name: "herbert",
    component: Herbert
  },
  { 
    path: '/josef',
    name: "josef",
    component: Josef
  },
  { 
    path: '/',
    name: "home",
    component: Simple
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router