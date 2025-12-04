import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Terms from '../views/Terms.vue'
import Privacy from '../views/Privacy.vue'
import About from '../views/About.vue'
import Careers from '../views/Careers.vue'
import Versions from '../views/Versions.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers
  },
  {
    path: '/versions',
    name: 'Versions',
    component: Versions
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router