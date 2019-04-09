<template>
  <div class="field">
    <label class="label">予約日時</label>

    <div v-if="!$props.editMode">
      <div>{{date}}</div>
    </div>
    <div v-else>

      <div class="control has-icons-left has-icons-right">
        <datepicker v-model="date"
                    name="datetime"
                    v-validate="'required'"
                    input-class="input is-medium"
                    format="yyyy-MM-dd"
                    :disabledDates="holiday"></datepicker>
        <span class="icon is-small is-left" style="font-size: 1.25rem;"><i class="far fa-clock"></i></span>

      </div>
      <div v-if="validationOn">
        <no-ssr>
          <span v-show="errors.has('datetime')" class="help is-success">{{ errors.first('datetime') }}</span>
        </no-ssr>
      </div>
    </div>
  </div>

</template>

<script>
  import Datepicker from 'vuejs-datepicker';

  export default {
    name: "ReservationDatetime",
    props: {
      editMode: Boolean,
      validationOn: Boolean
    },
    data() {
      return {
        holiday: {
          to: new Date((new Date()).valueOf() - 1000*3600*24),
          days: [0, 3],
          dates: [
            new Date(2019, 0, 1),
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
            new Date(2020, 10, 23),
          ]
        }
      }
    },
    components: {
      Datepicker
    },
    computed: {
      date: {
        get: function () {
          return this.$store.state.form.data.date
        },
        set: function (newValue) {
          this.$store.dispatch('form/addDate', newValue)
        }
      }
    },
    methods: {
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
