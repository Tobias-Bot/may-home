import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Profile from '../components/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes
})

export default router
