<template>
  <div>
    <Hero2 />
    <Columns />
  </div>

</template>

<script>
    import Hero from "../components/Hero";
    import Columns from "../components/Columns";
    import Hero2 from "../components/Hero2";
    export default {
        name: "hero-page",
      components: {Hero2, Columns, Hero}
    }
</script>

<style scoped>

</style>
