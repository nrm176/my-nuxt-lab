<template>
  <section class="section container is-fullheight">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-3">
        <div class="box">

          <div class="columns">
            <div class="column">
              <div class="field">
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input class="input" type="email" v-model="username" placeholder="Email">
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input class="input" type="password" v-model="password" placeholder="Password">
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <a class="button is-primary" @click="login">Login</a>
        </div>
      </div>
      <div class="column"></div>
    </div>

  </section>
</template>

<script>
  export default {
    middleware: ['auth'],
    name: "LoginForm",
    data() {
      return {
        username: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login() {
        try {
          await this.$auth
            .loginWith('local_drf', {
              data: {
                username: this.username,
                password: this.password
              }
            })
          this.$router.push({path: '/lemon', force: true})
        } catch (e) {

        }


      }

    }
  }
</script>

<style scoped>

</style>
