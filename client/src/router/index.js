import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import registerView from '../views/registerView.vue';
import {authGuard} from '@/_helpers/auth-guard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: authGuard
    },
    {
      path: '/register',
      name: 'register',
      component: registerView
    }
  ]
})

export default router
