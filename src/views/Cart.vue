<template>
  <div id="cart">
      <div class="row atas">
        <div class="col-md-3">
        </div>
        <div class="col-md-5">
          <p class="text inside">product</p>
        </div>
        <div class="col-md-1">
          <p class="text inside">qty</p>
        </div>
        <div class="col-md-3">
          <p class="text inside">price</p>
        </div>
      </div>
      <hr />
      <div v-for="thing in things">
      <div class="row">
        <div class="col-md-3">
          <img :src="thing.image" alt="">
        </div>
        <div class="col-md-5">
          <h3 class="inside">{{thing.name}}</h3>
        </div>
        <div class="col-md-1">
          <p class="inside">{{thing.number}}</p>
        </div>
        <div class="col-md-3">
          <p class="inside">${{thing.total}}</p>
        </div>
      </div>
    </div>
    <div class="total" v-if="cart.length != 0">
      <p class="totalprice">Total Price: {{totalPrice}}</p>
    </div>
    <div class="checkout" v-if="cart.length != 0">
      <button type="button" class="btn btn-danger checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "cart",
    data: () => ({
      things: [],
      totalPrice: 0
    }),

    created() {
      var uniqueItems = Array.from(new Set(this.cart))
      console.log('asdsadsad', this.cart);
      for (let i = 0; i < uniqueItems.length; i++) {
        for (let j = 0; j < this.cart.length; j++) {
          if (uniqueItems[i].name === this.cart[j].name) {
            uniqueItems[i].number += 1
          }
        }
      }
      for (var k = 0; k < uniqueItems.length; k++) {
        uniqueItems[k].total = uniqueItems[k].number * uniqueItems[k].price
      }

      for (var l = 0; l < uniqueItems.length; l++) {
        this.totalPrice += Number(uniqueItems[l].total)
      }
      this.things = uniqueItems
      console.log('===========', uniqueItems);
    },

    computed: {
      ...mapState([
        'cart'
      ])
    }
  }
</script>

<style lang="scss" scoped>
 img {
   width: 250px;
   height: 180px;
   margin: 20px
 }

 .inside {
   margin: 20px
 }

 .text {
   font-size: 16px;
   font-family: "Montserrat","HelveticaNeue","Helvetica Neue",sans-serif;
   color: #1c1d1d;
   font-weight: 400;
   letter-spacing: 0.1em;
   font-style: normal;
   text-transform: uppercase;
 }

 .atas {
   box-sizing: border-box;
 }

 hr {
   margin: 20px;
   border-top: solid 1px black
 }

 .checkout {
   float: right;
   margin-right: 120px
 }

 .totalprice {
   text-align: center
 }
</style>
