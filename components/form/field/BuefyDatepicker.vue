<template>
  <b-field label="予約日(Buefy)">
    <b-datepicker custom-class="is-medium" :unselectable-days-of-week="unselectable_dow"
                  :unselectable-dates="unselectable_dates"
                  placeholder="Click to select..."
                  mobile-native="false"
                  icon="calendar-today">
    </b-datepicker>
  </b-field>
</template>

<script>
  export default {
    name: "BuefyDatepicker",
    data() {
      return {
        unselectable_dow: [0, 3],
        unselectable_dates: [new Date(2019, 0, 1),
          new Date(2019, 0, 14),
          new Date(2019, 1, 11),
          new Date(2019, 2, 21),
          new Date(2019, 3, 29),
          new Date(2019, 3, 30),
          new Date(2019, 4, 1),
          new Date(2019, 4, 2),
          new Date(2019, 4, 3),
          new Date(2019, 4, 4),
          new Date(2019, 4, 5),
          new Date(2019, 4, 6),
          new Date(2019, 6, 15),
          new Date(2019, 7, 11),
          new Date(2019, 7, 12),
          new Date(2019, 8, 16),
          new Date(2019, 8, 23),
          new Date(2019, 9, 14),
          new Date(2019, 9, 22),
          new Date(2019, 10, 3),
          new Date(2019, 10, 4),
          new Date(2019, 10, 23),
          new Date(2020, 0, 1),
          new Date(2020, 0, 13),
          new Date(2020, 1, 11),
          new Date(2020, 1, 23),
          new Date(2020, 1, 24),
          new Date(2020, 2, 20),
          new Date(2020, 3, 29),
          new Date(2020, 4, 3),
          new Date(2020, 4, 4),
          new Date(2020, 4, 5),
          new Date(2020, 4, 6),
          new Date(2020, 6, 23),
          new Date(2020, 6, 24),
          new Date(2020, 7, 10),
          new Date(2020, 8, 21),
          new Date(2020, 8, 22),
          new Date(2020, 10, 3),
          new Date(2020, 10, 23),]
      }
    }
  }
</script>

<style scoped>

</style>
