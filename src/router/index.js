import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store/index'
import Bbs from 'components/bbs/bbs'
import Stock from 'components/stock/stock'
import Login from 'components/user/login'
import ForgetPassword from 'components/user/forgetPassword'
import Register from 'components/user/register'

Vue.use(VueRouter)

// const productDesc = (resolve) => {
//   import('components/product/desc').then((module) => {
//     resolve(module)
//   })
// }

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: 'stock'
    },
    {
      path: '/bbs',
      component: Bbs
    },
    {
      path: '/stock',
      component: Stock
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/forgetPassword',
      component: ForgetPassword
    },
    {
      path: '/fegister',
      component: Register
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
