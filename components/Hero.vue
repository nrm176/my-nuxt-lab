<template>
  <section class="hero has-background-black">
    <div class="hero-body">
      <div class="container">
        <figure class="image center">
          <img :src="`https://res.cloudinary.com/dfkqsafii/image/upload/w_0.1/v1554265123/my-nuxt-lab/${photoId}.jpg`">
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Hero",
      data() {
          return {
            photoId: "amy-chen-1413497-unsplash"
          }
      }
    }
</script>

<style scoped>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
