<template>
  <div id="home-product">
    <h1 class="reminder-text">Meaningful Everyday Reminder</h1>
    <hr />
    <div class="row">
      <div class="card product-card" style="width: 12rem;" v-for="(item) in items" >
        <img class="card-img-top" v-bind:src="item.image" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <h6 class="price">{{item.price}}</h6>
          <a href="#" class="btn btn-primary btn-xs" @click="addToCart(item)">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "",
  data: () => ({

  }),

  methods: {
    addToCart(product) {
      product.number = 1
      this.$store.commit('addCart', product)
    }
    // addCart() {
    //   let item = {price: '$45'}
    //   this.$store.commit('addItem', item) //manggil mutations
    // },

    // addItemToDatabse() {
    //   let item = {price: '$45'}
    //   this.$store.dispatch('postProduct', item) //manggil action
    // }
  },

  computed: {
    ...mapState([
      'items'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .image img {
    position: relative;
    width: 88%
  }

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

  .reminder-text {
    font-family: 'Baskerville',Baskerville,Baskerville Old Face,Hoefler Text, Garamond, Times New Roman, serif;
    font-weight: 100;
    color: #333333;
    font-size: 33px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  hr {
    width: 170px
  }
</style>
