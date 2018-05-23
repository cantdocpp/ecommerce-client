<template>
  <div id="add">
    <form>
      <div class="form-group">
        <input class="form-control" type="text" placeholder="product name" v-model="name">
        <input class="form-control" type="text" placeholder="price" v-model="price">
        <input type="file" id="image" class="form-control-file">
        <button type="button" class="btn btn-default" @click="upload">Upload</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "add",
  data: () => ({
    name: '',
    price: '',
    image: ''
  }),

  methods: {
    upload() {
      let fileInput = document.querySelector('#image')
      let formData = new FormData()
      formData.append('name', this.name)
      formData.append('price', this.price)
      formData.append('image', fileInput.files[0])
      console.log(fileInput.files);
      var self = this
      axios.post('http://35.185.3.77//product/upload', formData)
      .then(function(response) {
        console.log(response);
        self.$router.push('/')
      })
      .catch(function(err) {
        console.log('ererere', err);
      })
    }
  },
  uploadHandler() {
    this.image = event.target.files[0]
  }
}
</script>

<style lang="scss" scoped>
</style>
