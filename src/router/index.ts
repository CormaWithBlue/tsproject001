import Vue from 'vue'
// import VueRouter from 'vue-router'
import Router from 'vue-router'
import Body from '@/components/Body.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Body',
    component: Body,

  }]
})