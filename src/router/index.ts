import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/beneficios',
      name: 'spaOne',
      component: () => import('../views/SpaOneView.vue'),
    },
    {
      path: '/ingredientes',
      name: 'spaTwo',
      component: () => import('../views/SpaTwoView.vue'),
    },
    {
      path: '/preguntas',
      name: 'spaThree',
      component: () => import('../views/SpaThreeView.vue'),
    },
    {
      path: '/mision',
      name: 'mision',
      component: () => import('../views/Home/MissionHomeView.vue'),
    },
    {
      path: '/servicios-supervision',
      name: 'supervision',
      component: () => import('../views/Home/SupervisionProccessView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
