<template>
  <div>
    <Nav/>
    <section class="section">
      <ConfirmSubmission/>
    </section>
  </div>


</template>

<script>
  import ConfirmSubmission from "@/components/form/ConfirmSubmission";
  import Nav from "../components/Nav";
  export default {
    name: "confirm",
    components: {Nav, ConfirmSubmission}
  }
</script>

<style scoped>

</style>
