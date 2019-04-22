<template>
  <div>
    <b-field label="Username"
             type="is-success"
             message="This username is available">
      <b-input value="" v-model="username" maxlength="30"></b-input>
    </b-field>

    <b-field label="Password">
      <b-input type="password"
               value="" v-model="password"
               password-reveal>
      </b-input>
    </b-field>

    <b-field>
        <a class="button"
          size="is-medium"
          name="Login" type="is-primary" @click="login">ログイン</a>
    </b-field>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      async login() {
        this.error = null
        return this.$auth
          .loginWith('local_drf', {
            data: {
              username: this.username,
              password: this.password
            }
          })
          .catch(e => {
            this.error = e + ''
          })
      }

    }
  }
</script>

<style scoped>

</style>
