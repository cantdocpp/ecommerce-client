<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" style="color: black; font-size: 25px; margin-right: 20px">Store</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" style="color: black">Home</router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/about" style="color: black; margin-left: 20px">About</router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/products" style="color: black; margin-left: 20px">Products</router-link>
            </li>
            <div v-if="localStorage == null">
              <li class="nav-item active">
                <router-link to="/login" style="color: black; margin-left: 20px">Login</router-link>
              </li>
            </div>
            <div v-else>
              <button type="button" class="btn btn-primary" style="margin-left: 20px">Logout</button>
            </div>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <router-link to="/cart" style="font-size: 20px; padding-top: 10px; color: black">cart({{cart.length}})</router-link>
          </form>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data: () => ({
      carts: 0,
      localStorage: ''
    }),

    methods: {
      addToCart(product) {
        this.$store.commit('addCart', product)
      }
    },

    beforeCreate() {
      //do something before creating vue instance
      var status = localStorage.getItem('email')
      this.localStorage = status
      this.carts = cart.length

    },

    computed: {
      ...mapState([
        'items',
        'cart'
      ])
    }
  }
</script>

<style lang="scss">

</style>
