<template>
  <div class="carousel">
    <no-ssr>
      <carousel :data="imageData"></carousel>
    </no-ssr>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    data() {
      return {
        imageData: [
          '<div class="example-slide">Slide 1</div>',
          '<div class="example-slide">Slide 2</div>',
          '<div class="example-slide">Slide 3</div>',
        ],
      };
    },
  }
</script>

<style scoped>
  .carousel >>> .example-slide {
    align-items: center;
    background-color: #fefdff;
    color: #fefdff;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }

</style>
