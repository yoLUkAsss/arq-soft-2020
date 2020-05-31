import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Home.vue'
// import Login from '../views/Login.vue'
import SignUp from '../components/authentication/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
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

const router = new VueRouter({
  routes
})

export default router
