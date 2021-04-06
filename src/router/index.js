import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase";

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
    component: () => import('../components/Overview.vue'),
    meta: {
      requiresAuth: true
    }
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

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  console.log(to.name);

  if (requiresAuth && !currentUser) {
    next({name: 'login'}); 
  } else if (currentUser && to.name =="login") {
    next({name: 'overview'});
  } else {
    next();
  }
})

export default router