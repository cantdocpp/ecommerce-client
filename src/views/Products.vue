<template>
  <div id="products">
    <router-link to="/products/add">Add products</router-link>
    <router-view></router-view>
    <div class="row">
      <div class="card product-card" style="width: 12rem;" v-for="(item) in items" >
        <img class="card-img-top" v-bind:src="item.image" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <h6 class="price">${{item.price}}</h6>
          <a href="#" class="btn btn-primary btn-xs" @click="addToCart(item)">Add to Cart</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="card product-card" style="width: 12rem;" v-for="(product) in products" >
        <img class="card-img-top" v-bind:src="product.image" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{product.name}}</h5>
          <h6 class="price">${{product.price}}</h6>
          <a href="#" class="btn btn-primary btn-xs" @click="addToCart(product)">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "products",
  data: () => ({
    products: ''
  }),

  methods: {
    addToCart(product) {
      product.number = 0
      console.log('sadsadsadsa', this.cart);
      this.$store.commit('addCart', product)
    }
  },

  computed: {
    ...mapState([
      'items',
      'cart'
    ])
  },

  beforeCreate() {
    var self = this
    axios.get('http://35.185.3.77/product/')
    .then(function(response) {
      console.log(response.data.response);
      self.products = response.data.response
    })
    .catch(function(error) {
      console.log('errererer', error);
    })
  }
}
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }

  .row {
    padding-left: 50px
  }

  .card-body {
    height: 100px
  }

  .card-img-top {
    height: 150px
  }

  .card-title {
    font-size: 18px;
    margin: 0;
    padding: 0
  }

  .card-text {
    font-size: 15px;
    margin: 0
  }

  .btn-xs {
    font-size: 13px;
    width: 90px
  }

  .price {
    font-size: 12px
  }

  #home-product {
    text-align: center;
    padding-left: 85px;
  }

  #products {
    text-align: center;
    padding-left: 80px;
    margin-top: 30px
  }
</style>
