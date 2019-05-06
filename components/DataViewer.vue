<template>
  <section class="container">
    <div v-for="result in results">
      <div class="box">
        {{result}}
      </div>
    </div>
  </section>
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
      if (!this.$store.state.auth.loggedIn) {
        this.$router.go({path: '/login'})
        return
      }
      const response = await this.$axios.$get('search?title=特別利益')
      if (response) {
        if (response.status == '401') {
          console.log('401')
        } else {
          this.results = response.results
          console.log(response.results)
        }
      }

    }
  }
</script>

<style scoped>

</style>
