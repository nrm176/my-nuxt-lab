<template>
  <section>
    <b-field label="Select time">
      <b-timepicker
        placeholder="Click to select..."
        :increment-minutes="increment"
        :min-time="minTime"
        :max-time="maxTime"
        icon="clock"
        custom-class="is-medium"
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
          minTime: min,
          maxTime: max,
          increment: 30
        }
      }
    }
</script>

<style scoped>

</style>
