<template>
  <div>{{results}}</div>
</template>

<script>
  export default {
    name: "DataViewer",
    data() {
      return {
        results: undefined
      }
    },

    async mounted() {
      const response = await this.$axios.$get('search?title=特別利益')
      if (response){
        this.results = response.results
        console.log(response.results)
      }

    }
  }
</script>

<style scoped>

</style>
