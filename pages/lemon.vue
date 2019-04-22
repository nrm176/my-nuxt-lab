<template>
  <Hero3/>
</template>

<script>
  import Hero3 from "../components/Hero3";

  export default {
    name: "lemon",
    middleware: ['auth'],
    components: {Hero3}
  }
</script>

<style scoped>

</style>
