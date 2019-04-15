<template>
  <section class="hero is-fullheight has-background-black">
    <div id="grid">
      <div id="a">これは檸檬</div>
    </div>

  </section>
</template>

<script>
  export default {
    name: "Hero2",
    data() {
      return {
        photoId: "frank-albrecht-1403494-unsplash"
        // photoId: "amy-chen-1413497-unsplash"
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

  .hero {
    background: black url("https://res.cloudinary.com/dfkqsafii/image/upload/c_thumb,w_auto,g_face/v1554265123/my-nuxt-lab/frank-albrecht-1403494-unsplash.jpg") center / cover;
  }

  /*.hero::before {*/
  /*background-image: url(https://res.cloudinary.com/dfkqsafii/image/upload/c_thumb,w_auto,g_face/v1554265123/my-nuxt-lab/amy-chen-1413497-unsplash.jpg);*/
  /*background-size: cover;*/
  /*content: "";*/
  /*display: block;*/
  /*position: absolute;*/
  /*top: 0;*/
  /*left: 0;*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*z-index: -2;*/
  /*opacity: 0.4;*/
  /*}*/


  #a {
    grid-area: a
  }

  #b {
    grid-area: b
  }

  #c {
    grid-area: c
  }

  #d {
    grid-area: d
  }

  #e {
    grid-area: e
  }

  #grid {
    display: grid;
    grid-template-areas: "a a a a" "b c d e";

    grid-row-gap: 1rem;
  }

  @media (max-width: 512px) {
    #grid {
      grid-template-areas: "a a a" "b c d" "e e e";
    }
  }
</style>
