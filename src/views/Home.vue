<template>
  <div class="home">
    <ImageSlider></ImageSlider>
    <ProductHome></ProductHome>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ImageSlider from '@/components/ImageSlider.vue'
import ProductHome from '@/components/ProductHome.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ImageSlider,
    ProductHome
  },

  beforeCreate() {
    //do something before creating vue instance
    // console.log($store);
  }
}
</script>

<style scoped>

</style>
