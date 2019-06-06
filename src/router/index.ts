import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'

// const main = require('@/views/main.vue')
// const home = require('@/views/home.vue')
// const login = require('@/views/login.vue')

// const main : AsyncComponent = (): any => import('@/views/main.vue')
// const home: AsyncComponent = (): any => import('@/views/home.vue')
// const login: AsyncComponent = (): any => import('@/views/login.vue')

// import main from '@/views/main.vue'

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/home'
  },
  { name: 'home', path: '/home', component: Home },
  { name: 'login', path: '/login', component: Login },
  { name: 'not_found', path: '*', component: NotFound },
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
