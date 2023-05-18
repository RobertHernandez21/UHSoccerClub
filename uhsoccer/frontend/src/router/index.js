import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home.vue'),
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('@/components/Games.vue'),
    },
    {
      path: '/roster',
      name: 'roster',
      component: () => import('@/components/Roster.vue'),
    },
    {
      path: '/interest',
      name: 'interest',
      component: () => import('@/components/Interest.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/components/Contact.vue'),
    },
  ]
})

export default router
