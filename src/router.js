import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Products from './views/Products.vue'
import AddProduct from './components/AddProduct.vue'
import Cart from './views/Cart.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/products',
      component: Products,
      children: [
        {
          path: 'add',
          name: 'add',
          component: AddProduct
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
