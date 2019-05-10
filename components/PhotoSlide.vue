<template>
  <section class="section container">

        <div class="column padding">

          <no-ssr>
            <carousel
              :autoplay="true"
              :navigationEnabled=false
              :paginationPadding=15
              :perPage="1"
              paginationPosition="bottom-overlay"
              :navigationClickTargetSize=8
              class="no-outline"
            >
              <slide v-for="image in images" :key="image.id">
          <span>
            <img
              :src="`${env.baseImageURL}/${env.cloudinary_param}/${env.imagePathId}/my-nuxt-lab/${image.src}.jpg`"/>
          </span>
              </slide>

            </carousel>
          </no-ssr>
        </div>
  </section>

</template>

<script>
  import env from '@/mixins/cloudinary'
  export default {
    name: "PhotoSlide",
    mixins: [env],
    data() {
      return {
        images: [
          {id: 1, src: 'amy-chen-1413497-unsplash'},
          {id: 2, src: 'frank-albrecht-1403494-unsplash'},
          {id: 3, src: 'element5-digital-500016-unsplash'},
          {id: 4, src: 'pineapple-supply-co-29325-unsplash'},
          {id: 5, src: 'rebecca-matthews-1133972-unsplash'},
        ]

      }
    }
  }
</script>

<style scoped>
  .VueCarousel-slide {
    position: relative;
    color: #fefdff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 50px;
  }

  .VueCarousel-dot-container {
    marin-top: -15px;
  }

  .padding >>> .VueCarousel-dot:focus  {
    outline: none !important;
  }

  .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .padding {
    padding: 2rem;
  }


</style>
