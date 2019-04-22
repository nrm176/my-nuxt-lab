<template>
  <section>
    <h1>Hello</h1>
  </section>
</template>

<script>

  import Nav from "../components/Nav";

  export default {
    components: {
      Nav
    },
    mounted() {
      console.log(process.env.function_url)
    }
  }
</script>

<style>

</style>
