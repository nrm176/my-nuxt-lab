<template>
  <DataViewer/>
</template>

<script>
  import DataViewer from "../components/DataViewer";

  export default {
    name: "viewer",
    middleware: ['auth'],
    components: {DataViewer}
  }
</script>

<style scoped>

</style>
