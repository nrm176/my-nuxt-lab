<template>
  <div>
    <Nav/>
    <ContactForm/>
  </div>
</template>

<script>
  import ContactForm from "@/components/form/ContactForm";
  import Nav from "../components/Nav";

  export default {
    name: "contact-form",
    components: {Nav, ContactForm}
  }
</script>

<style scoped>

</style>
