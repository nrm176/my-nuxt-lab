<template>
  <div>
    <Nav/>
    <section>
      <h1>Hello</h1>
    </section>
  </div>
</template>

<script>

import Nav from "../components/Nav";
export default {
  components: {
    Nav
  },
  mounted() {
    console.log(process.env)
  }
}
</script>

<style>

</style>
