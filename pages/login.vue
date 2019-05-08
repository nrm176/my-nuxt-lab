<template>
  <section class="section container">
    <LoginFrom/>
  </section>
</template>

<script>
  import LoginFrom from "../components/LoginForm";

  export default {
    name: "login",
    middleware: ['auth'],
    components: {
      LoginFrom
    }
  }
</script>

<style scoped>

</style>
