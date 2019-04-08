<template>
  <div class="field">
    <label class="label">電話番号(ハイフンなし)</label>
    <div v-if="!$props.editMode">
      <div>{{phone_number}}</div>
    </div>
    <div v-else>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-medium" type="tel" placeholder="電話番号" value=""
               name="phone"
               v-model="phone_number"
               v-validate="'required|numeric|alpha_num'"
               @keyup.enter.native="addPhoneNumber"
        >
        <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
      </div>
      <div v-if="validationOn">
        <no-ssr>
          <span v-show="errors.has('phone')" class="help is-success">{{ errors.first('phone') }}</span>
        </no-ssr>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "PhoneNumber",
    props: {
      editMode: Boolean,
      validationOn: Boolean
    },
    computed: {
      phone_number: {
        // getter
        get: function () {
          return this.$store.state.form.phone
        },
        // setter
        set: function (newValue) {
          this.$store.dispatch('form/addPhoneNumber', newValue)
        }

      }
    },
    methods: {
      getPhoneNumber() {
        return this.phone_number
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
