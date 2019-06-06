import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, { preLoad: 1 })

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let login = store.getters.isLogin
  if (login) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // not login
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

const app: Vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

export default app
