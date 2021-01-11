import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    meta: { hidden: true, title:"林科大教务处小助手" }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home'),
    meta: { hidden: true, title:"林科大教务处小助手" }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
