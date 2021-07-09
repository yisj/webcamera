import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
//  {
//    path: '/',
//    name: 'Home',
//    component: Home
//  },
  {
    path: '/',
    redirect: '/share'
  },
  {
    path: '/share',
    name: 'Share',
    component: () => import(/* webpackChunkName: "about" */ '../views/Share.vue')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import(/* webpackChunkName: "about" */ '../views/Watch.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
