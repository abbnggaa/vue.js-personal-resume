import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'personal',
      component: () => import('../views/PersonalView.vue')
    },
    {
      path: '/porto',
      name: 'porto',
      component: () => import('../views/PortoView.vue')
    }
  ]
})

export default router
