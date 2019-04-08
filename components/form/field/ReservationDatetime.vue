<template>
  <div class="field">
    <label class="label">予約日時</label>

    <div v-if="!$props.editMode">
      <div>{{datetime}}</div>
    </div>
    <div v-else>

      <div class="control has-icons-left has-icons-right">
        <datepicker v-model="datetime"
                    name="datetime"
                    v-validate="'required'"
                    input-class="input is-medium"
                    format="yyyy-MM-dd"
        ></datepicker>
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
      components: {
        Datepicker
      },
      computed: {
        datetime : {
          get: function () {
            return this.$store.state.form.datetime
          },
          set: function (newValue) {
            this.$store.dispatch('form/addDateTime', newValue)
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
