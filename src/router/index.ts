import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    {
      path: '/equipos-supervision',
      name: 'supervision-teams',
      component: () => import('../views/Us/SupervisionView.vue'),
    },
    {
      path: '/international/expansion',
      name: 'international-expansion',
      component: () => import('../views/Us/ExpansionView.vue'),
    },
    {
      path: '/services/supervision',
      name: 'internation',
      component: () => import('../views/services/ServicesView.vue'),
    },
    {
      path:'/commments/users',
      name:'comments',
      component: () => import('../views/CommentsView.vue'),
    },
    {
      path: '/history/us',
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
