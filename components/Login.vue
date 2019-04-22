<template>

  <div class="columns">
    <div class="column is-3"></div>
    <div class="column is-6">
      <div class="box">
        <b-field label="Username">
          <b-input value="" v-model="username" maxlength="30"/>
        </b-field>

        <b-field label="Password">
          <b-input type="password" value="" v-model="password" password-reveal/>
        </b-field>

        <b-field>
          <a class="button" size="is-medium" name="Login" type="is-primary" @click="login">ログイン</a>
        </b-field>
      </div>
    </div>
    <div class="column is-3"></div>
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
        console.log("logging in......")
        try {
          await this.$auth
            .loginWith('local', {
              data: {
                username: this.username,
                password: this.password
              }
            })
          console.log("logging in......")
          await this.$router.push({path: '/lemon', force: true})
        } catch (e) {
          console.log(e)
        }
      }

    }
  }
</script>

<style scoped>

</style>
