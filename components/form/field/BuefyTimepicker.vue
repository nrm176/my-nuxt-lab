<template>
  <section>
    <b-field label="Select time">
      <b-timepicker
        placeholder="Click to select..."
        :increment-minutes="increment"
        :min-time="min"
        :max-time="max"
        icon="clock"
        custom-class="is-medium"
        mobile-native="false"
      >
      </b-timepicker>
    </b-field>
  </section>
</template>

<script>
    export default {
        name: "BuefyTimepicker",
      data() {
        const min = new Date()
        min.setHours(9)
        min.setMinutes(0)
        const max = new Date()
        max.setHours(18)
        max.setMinutes(0)
        return {
          min: min,
          max: max,
          increment: 30
        }
      }
    }
</script>

<style scoped>

</style>
