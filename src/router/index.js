import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: () => import('../views/Inbox.vue')
  },
  {
    path: '/sent',
    name: 'Sent',
    component: () => import('../views/Sent.vue')
  },
  {
    path: '/spam',
    name: 'Spam',
    component: () => import('../views/Spam.vue')
  },
  {
    path: '/trash',
    name: 'Trash',
    component: () => import('../views/Trash.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
