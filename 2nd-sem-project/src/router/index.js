import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/day',
    name: 'day',
    // route level code-splitting
    // this generates a separate chunk (Day.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/DayView.vue')
  },
  {
    path: '/evening',
    name: 'evening',
    // route level code-splitting
    // this generates a separate chunk (Evening.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/EveningView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If there is a saved position, use it (this is for browser back/forward navigation)
    if (savedPosition) {
      return savedPosition;
    } else {
      // Always scroll to the top of the page
      return { left: 0, top: 0 };
    }
  }
})

export default router
