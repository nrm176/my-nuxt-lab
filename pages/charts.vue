<template>
  <VueGoogleChart/>
</template>

<script>
  import VueGoogleChart from "../components/charts/VueGoogleChart";

  export default {
    name: "charts",
    middleware: ['auth'],
    components: {VueGoogleChart}
  }
</script>

<style scoped>

</style>
