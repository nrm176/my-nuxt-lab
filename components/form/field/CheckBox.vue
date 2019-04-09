<template>
  <div class="field">
    <label class="label">選択肢</label>
    <div class="field">
      <div class="control">
            <span v-for="choice in choices" :key="choice.id" style="padding-right: 1rem;">
              <input type="checkbox" id="${choice.id}" name="checkbox" v-model="checkedChoice"
                     :value="choice">
              <label class="checkbox" for="${choice.id}">{{choice.name}}</label>
            </span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CheckBox",
        data() {
          return {
            choices: [
              {id:0, name:'埼玉'},
              {id:1, name:'東京'},
              {id:2, name:'千葉'},
              ]
          }
        },
        computed: {
          checkedChoice: {
            get: function () {
              return this.$store.state.form.data.checkedChoice
            },
            set: function (newValue) {
              this.$store.dispatch('form/setCheckedChoice', newValue)
            }
          }
        }
    }
</script>

<style scoped>

</style>
