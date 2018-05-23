<template>
  <div id="">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://cdn.shopify.com/s/files/1/0718/3585/files/Gift_card-desktop_1500x.jpg?v=1520482509" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://cdn.shopify.com/s/files/1/0718/3585/files/TFearrings-desktop_1500x.jpg?v=1526551720" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://cdn.shopify.com/s/files/1/0718/3585/files/Home_slider-Personalise_914c4115-04ae-4eb0-85d4-85f0cd839d82_1500x.jpg?v=1509965129" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "imageSlider",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
  .carousel {
    padding-top: 30px;
    justify-content: center
  }
</style>
