import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        image: 'https://cdn.shopify.com/s/files/1/0718/3585/files/RainbowRing0003.png?v=1520229579',
        name: 'Reminders Rings',
        price: '65'
      },
      {
        image: 'https://cdn.shopify.com/s/files/1/0718/3585/files/ChainBraceletRoseGoldFinal05_38f6b5ef-a783-4a7f-a466-dcd0064ea853.png?v=1504060299',
        name: 'Reminders Chains',
        price: '89'
      },
      {
        image: 'https://cdn.shopify.com/s/files/1/0718/3585/files/gratitude_-_gold_and_burgandy_braid.png?v=1504060323',
        name: 'Reminder Braids',
        price: '58'
      },
      {
        image: 'https://cdn.shopify.com/s/files/1/0718/3585/files/Breathe_-_Gold.png?v=1504060371',
        name: 'Reminder Cuffs',
        price: '48'
      },
      {
        image: 'https://cdn.shopify.com/s/files/1/0718/3585/files/Journey_silver_shd_1200_1200_final.jpg?v=1520229739',
        name: 'Reminder Key',
        price: '58'
      }
    ],

    cart: [],
    uniqueCart: []
  },
  mutations: {
    // addItem(state, payload) {
    //   state.items.push(payload) //menambahkan item ke dalam state items
    // }
    addCart(state, payload) {
      state.cart.push(payload)
    }
  },
  actions: {
    // postProduct(context, payload) {
    //   axios.post('', payload) //post ke database
    //   .then(function(response) {
    //     context.commit('addItem', payload) //lanjut lagi lempar ke mutation
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    // }
  }
})
