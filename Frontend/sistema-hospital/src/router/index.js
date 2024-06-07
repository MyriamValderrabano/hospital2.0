import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import registerUser from '@/components/registerUser.vue'
import LoginView from '@/components/login.vue'
import Sidebar from '@/components/sidebar.vue'
import usuarios from '@/components/usuarios.vue'
import personas from '@/components/personas.vue'
import LotesMed from '@/components/LotesMed.vue'
import Personal from '@/components/Personal.vue'


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
      component: Sidebar,
      children:[
        {path:'/personas', name:'personas',component:personas},
        {path:'/LotesMed', name:'LotesMed',component:LotesMed},
        {path:'/Personal', name:'Personal',component:Personal}
      ]
        
  
    }
    
    // {
    //   path: '/personas',
    //   name: 'personas',
    //   component: personas
    // }
  ]
})

export default router
