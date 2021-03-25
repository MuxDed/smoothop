import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/overview',
    name: 'overview',
    component: () => import('../components/Overview.vue')
  },
  {
    path: '/theatre',
    name: 'theatre',
    component: () => import('../components/Theatre.vue')
  },
  {
    path: '/theatre/operations',
    name: 'operations',
    component: () => import('../components/Operations.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router