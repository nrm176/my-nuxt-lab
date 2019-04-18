<template>
  <b-field horizontal :label="label" style="padding-bottom: 1.5rem"
           :type="{'is-danger': errors.has('date_time')}"
           :message="errors.first('date_time')">


    <div v-if="!editMode">
      {{picked_date_str}} {{picked_timeslot_str}}
    </div>
    <div v-else>
      <div class="columns">
        <div class="column is-6">
          <b-datepicker
            name="date_time"
            :unselectable-days-of-week="unselectable_dow"
            :unselectable-dates="unselectable_dates"
            placeholder="Click to select..."
            :min-date="today"
            icon="calendar-today"
            v-model="picked_date"
            custom-class="is-medium">
          </b-datepicker>
        </div>
        <div class="column is-6">
          <b-select placeholder="Select a character"
                    v-model="picked_timeslot"
                    size="is-medium">
            <option v-for="option in slotOptions" :value="option">{{option}}</option>
          </b-select>
        </div>
      </div>


    </div>


  </b-field>
</template>

<script>
  const min = new Date()
  min.setHours(9)
  min.setMinutes(0)
  const max = new Date()
  max.setHours(18)
  max.setMinutes(0)
  export default {
    name: "DateTime",
    props: {
      editMode: Boolean,
      validationOn: Boolean,
      label: String
    },
    data() {

      return {
        today: new Date(),
        picked_date: undefined,
        picked_timeslot: undefined,
        min: min,
        max: max,
        increment: 30,
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
          new Date(2020, 10, 23),],
        slotOptions: [
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
        ]
      }
    },
    computed: {
      picked_date_str: function () {
        if (this.picked_date !== undefined) {
          return `${this.picked_date.getFullYear()}年${this.picked_date.getMonth() + 1}月${this.picked_date.getDate()}日`
        }

        return this.picked_date !== undefined ? this.picked_date.toLocaleString('ja-JP').substr(0, 9) : undefined
      },
      picked_timeslot_str: function () {
        return this.picked_timeslot
        // return this.picked_timeslot !== undefined ? `${this.picked_timeslot.getHours()}時${this.picked_timeslot.getMinutes() == 0 ? "00分" : "30分"}` : undefined
      }
    },
    methods: {
      getDateAndTimeSlot() {
        return {date: this.picked_date_str, slot: this.picked_timeslot_str}
      },
      reset() {
        Object.assign(this.$data, this.$options.data())
      },
      isValid() {
        return this.$validator.validateAll().then(x => {
          if (x) {
            return true
          }
        }).catch(e => {
          return false
        })
      }
    }
  }
</script>

<style scoped>

</style>
