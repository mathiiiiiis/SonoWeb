import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/packs',
    name: 'Packs',
    component: () => import('../views/Packs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 