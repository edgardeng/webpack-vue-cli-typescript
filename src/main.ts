import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let islogin = store.getters.isLogin
  if (islogin) {
    next() // is login
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

// router.afterEach(transition => {
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
