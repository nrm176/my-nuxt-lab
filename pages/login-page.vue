<template>
  <section class="section container">
    <Login/>
  </section>
</template>

<script>
  import Login from "../components/Login";

  export default {
    name: "login-page",
    middleware: ['auth'],
    components: {Login}
  }
</script>

<style scoped>

</style>
