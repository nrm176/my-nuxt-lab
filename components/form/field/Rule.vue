<template>
  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input type="checkbox" id="checkbox"
               name="term_checked"
               v-model="term_checked"
               v-validate="'required'" :disabled="!$props.editMode">
        <span>
              個人情報保護指針に同意する
            </span>
      </label>
      <no-ssr>
              <span v-show="errors.has('term_checked')"
                    class="help is-success">{{ errors.first('term_checked') }}</span>
      </no-ssr>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Rule",
      props: {
        editMode: Boolean,
        validationOn: Boolean
      },
      computed: {
        term_checked: {
          get: function () {
            return this.$store.state.form.status.term_checked
          },
          set: function (newValue) {
            this.$store.dispatch('form/setTermChecked', newValue)
          }
        }
      }
    }
</script>

<style scoped>

</style>
