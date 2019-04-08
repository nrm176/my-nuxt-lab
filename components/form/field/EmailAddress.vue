<template>
    <div class="field">
      <label class="label">メールアドレス</label>
      <div v-if="!$props.editMode">
      </div>
      <div v-else>

        <div class="control has-icons-left has-icons-right">
          <input class="input is-medium" type="email" placeholder="Email" value=""
                 name="email"
                 v-model="form.email"
                 v-validate="'required|email'"
          >
          <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
        </div>
        <no-ssr>
          <span v-show="errors.has('email')" class="help is-success">{{ errors.first('email') }}</span>
        </no-ssr>
      </div>
    </div>
</template>

<script>
  export default {
    name: "EmailAddress",
    props: {
      editMode: Boolean,
      validationOn: Boolean
    },
    data() {
      return {
        email_address: ''
      }
    },
    methods: {
      getEmailAddress() {
        return this.email_address
      }
    }
  }
</script>

<style scoped>

</style>
