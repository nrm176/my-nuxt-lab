<template>
  <div>
    <VueGoogleChart/>
    <MaterialBar/>
    <Pie/>
    <Waterfall />
  </div>

</template>

<script>
  import VueGoogleChart from "../components/charts/VueGoogleChart";
  import MaterialBar from "../components/charts/MaterialBar";
  import Pie from "../components/charts/Pie";
  import Waterfall from "../components/charts/Waterfall";

  export default {
    name: "charts",
    // middleware: ['auth'],
    components: {Waterfall, Pie, MaterialBar, VueGoogleChart}
  }
</script>

<style scoped>

</style>
