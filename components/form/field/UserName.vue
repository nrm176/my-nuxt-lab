<template>
  <div class="field">
    <label class="label">名前</label>

    <div v-if="!$props.editMode">
      <div>{{user_name}}</div>
    </div>
    <div v-else>

      <div class="control has-icons-left has-icons-right">
        <input class="input is-medium" type="text" placeholder="お名前" value=""
               name="user_name"
               v-model="user_name"
               data-vv-as="名前"
               v-validate="'required'"
               @keyup.enter.native="addUserName"
        >
        <span class="icon is-small is-left"><i class="fas fa-user"></i></span>

      </div>
      <div v-if="validationOn">
        <no-ssr>
          <span v-show="errors.has('user_name')" class="help is-success">{{ errors.first('user_name') }}</span>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserName",
    props: {
      editMode: Boolean,
      validationOn: Boolean
    },
    computed: {
      user_name : {
        get: function () {
          return this.$store.state.form.username
        },
        set: function (newValue) {
          this.$store.dispatch('form/addUserName', newValue)
        }
      }
    },
    methods: {
      getUserName() {
        return this.user_name
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
