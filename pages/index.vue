<template>
  <section>
    <h1>Hello</h1>
    <LoginForm />
  </section>
</template>

<script>

  import Nav from "../components/Nav";
  import LoginForm from "../components/LoginForm";

  export default {
    components: {
      LoginForm,
      Nav
    },
  }
</script>

<style>
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }

</style>
