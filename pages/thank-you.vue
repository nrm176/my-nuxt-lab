<template>
  <section>
    <div class="container">

      <div class="content">
        <h1 class="title">
          問い合わせを受け付けました。
        </h1>
        <p class="text-center">
          <a href="/">Back to home</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import Nav from "../components/Nav";

  export default {
    name: "thank-you",
    components: {Nav},
    mounted() {
      this.$store.dispatch('form/clearFormDataFromStore')
    }
  }
</script>

<style scoped>

</style>
