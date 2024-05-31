import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import registerUser from '@/components/registerUser.vue'
import LoginView from '@/components/login.vue'
import Sidebar from '@/components/sidebar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: registerUser
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: Sidebar
    }
  ]
})

export default router
