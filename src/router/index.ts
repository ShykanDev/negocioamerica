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
      path: '/supervision',
      name: 'supervision',
      component: () => import('../views/Home/SupervisionProccessView.vue'),
    },
    {
      path: '/teams',
      name: 'supervision-teams',
      component: () => import('../views/Us/SupervisionView.vue'),
    },
    {
      path: '/international',
      name: 'international-expansion',
      component: () => import('../views/Us/ExpansionView.vue'),
    },
    {
      path: '/services',
      name: 'internation',
      component: () => import('../views/services/ServicesView.vue'),
    },
    {
      path:'/comments',
      name:'comments',
      component: () => import('../views/CommentsView.vue'),
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/History/HistoryOne.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/History/ContactView.vue'),
    },
    // fallback to main if path not found
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
