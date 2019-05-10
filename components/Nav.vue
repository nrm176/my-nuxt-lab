<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger burger"
         v-bind:class="{ 'is-active': menuActive }" v-on:click="menuToggle()"
         aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': menuActive }">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>

        <nuxt-link to="/slide" class="navbar-item" @click.native="closeNav()">
          Slide
        </nuxt-link>
        <nuxt-link to="/contact-form" class="navbar-item">
          Contact Form
        </nuxt-link>

        <nuxt-link to="/bulma-tiles" class="navbar-item">
          Bulma Tiles
        </nuxt-link>

        <nuxt-link to="/form-page" class="navbar-item">
          Form Page
        </nuxt-link>

        <nuxt-link to="/charts" class="navbar-item">
          Chart
        </nuxt-link>

        <nuxt-link to="/grid" class="navbar-item">
          CSS Grid
        </nuxt-link>

        <nuxt-link to="/hero-page" class="navbar-item">
          Hero
        </nuxt-link>

        <nuxt-link to="/lemon" class="navbar-item">
          Lemon
        </nuxt-link>

        <nuxt-link to="/login-page" class="navbar-item">
          Login Test
        </nuxt-link>

        <nuxt-link to="/login-page2" class="navbar-item">
          Login Form
        </nuxt-link>


        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!--<template v-if="$auth.$state.loggedIn">-->
              <!--<a class="button is-dark" @click="logout">Log out</a>-->
            <!--</template>-->
            <!--<template v-else>-->
              <!--<a class="button is-primary">-->
                <!--<strong>Sign up</strong>-->
              <!--</a>-->
              <!--<a class="button is-light" @click="login">-->
                <!--Log in-->
              <!--</a>-->
            <!--</template>-->
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
  export default {
    name: "Nav",
    data() {
      return {
        menuActive: false,
      }
    },
    methods: {
      closeNav() {
        console.log('clicked!')
        this.menuActive = false
      },
      menuToggle() {
        this.menuActive = !this.menuActive;
      },
      async login() {
        this.$router.push({path: '/'})
      },
      async logout() {
        await this.$auth.logout();
      },
    },
    watch: {
      '$route' () {
        console.log('route change detected!!!!!!!')
        this.menuActive = false
      }
    },
  }
</script>

<style scoped>
  .fade {
    opacity: 0.0;
    transition: all .5s ease-out;
  }

  .fade.is-active {
    opacity: 1.0;
  }

</style>
