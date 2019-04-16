<template>
  <section class="hero is-dark is-fullheight">
    <div class="hero-head">
      <div class="columns is-mobile is-marginless heading has-text-weight-bold">
        <div class="column left" style="min-height: 100px;">
          <p class="navbar-item tesla-logo"></p>
        </div>
        <div class="column center desktop">
          <p class="navbar-item has-text-black">松グレード</p>
          <p class="navbar-item has-text-black">竹グレード</p>
          <p class="navbar-item has-text-black">梅グレード</p>
        </div>
        <div class="column right">
          <p class="navbar-item desktop has-text-black">SHOP</p>
          <p class="navbar-item desktop has-text-black">SIGN IN</p>
          <figure class="navbar-item image has-text-black center">
            <i class="fas fa-bars" style="width: 1rem; height: 1rem;"></i>
          </figure>
        </div>
      </div>
    </div>

    <header class="hero-body">
      <div class="is-overlay has-text-centered single-spaced" style="top: 120px;">
        <h1 class="subtitle is-4 has-text-white">これが</h1>
        <h1 class="title is-1 has-text-white">世界が認めた檸檬。</h1>
      </div>
    </header>

    <main class="hero-foot center" style="padding: 2rem;">
      <div id="grid" style="width: 768px;">
        <div id="a" class="center-column has-text-centered subtitle" style="">Lemon is one of the important category of
          citrus.<br/> It is mainly known for its pulp and juice throughout the world.
        </div>
        <div id="b" class="center-column">
                    <span>
                        <i class="fas fa-lemon" style="width: 1.2rem;height: 1.2rem;"></i> <span
                      class="title is-4">100mg</span>
                    </span>
          <p class="subtitle is-7">ビタミンC</p>
        </div>
        <div id="c" class="center-column" style="border-left: 1px solid grey;">
                    <span>
                      <i class="fas fa-nutritionix" style="width: 1.2rem;height: 1.2rem;"></i>
                        <span class="title is-4">クエン酸</span>
                    </span>
          <p class="subtitle is-7">疲労回復</p>
        </div>
        <div id="d" class="center-column" style="border-left: 1px solid grey;">
                    <span>
                    <i class="fas fa-utensils-alt" style="width: 1.2rem;height: 1.2rem;"></i>
                      <span class="title is-4">食べる</span>
                    </span>
          <p class="subtitle is-7">デトックス</p>
        </div>
        <div id="e" class="center-column">
          <a class="button is-danger is-rounded is-outlined has-text-weight-bold has-text-white"
             style="width: 100%; border: 0.15em solid white;">檸檬好き？</a>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
  export default {
    name: "Hero3"
  }
</script>

<style scoped>
  .hero {
    background: url(https://res.cloudinary.com/dfkqsafii/image/upload/c_thumb,w_auto,g_face/v1554265123/my-nuxt-lab/frank-albrecht-1403494-unsplash.jpg) center/cover;
  }

  @media (max-width: 1024px) {
    .hero {
      background: url(https://res.cloudinary.com/dfkqsafii/image/upload/c_thumb,w_auto,g_face/v1554265123/my-nuxt-lab/frank-albrecht-1403494-unsplash.jpg) center/cover;
    }
  }

  @media (max-width: 768px) {
    .hero {
      background: url(https://res.cloudinary.com/dfkqsafii/image/upload/c_thumb,w_auto,g_face/v1554265123/my-nuxt-lab/frank-albrecht-1403494-unsplash.jpg) center/cover;
    }
  }

  #a {
    grid-area: a;
  }

  #b {
    grid-area: b;
  }

  #c {
    grid-area: c;
  }

  #d {
    grid-area: d;
  }

  #e {
    grid-area: e;
  }

  #grid {
    display: grid;
    grid-template-areas: "a a a a" "b c d e";
    grid-row-gap: 1rem;
  }

  @media (max-width: 512px) {
    #grid {
      grid-template-areas: "a a a" "b c d" "e e e";
    }
  }

  .center, .center-column, .top, .right, .bottom, .left {
    display: flex;
    /*    flex-direction: row; //by default */
    justify-content: center;
    align-items: center;
  }

  .center-column {
    flex-direction: column;
  }

  .top {
    align-items: flex-start;
  }

  .right {
    justify-content: flex-end;
  }

  .bottom {
    align-items: flex-end;
  }

  .left {
    justify-content: flex-start;
  }

  .single-spaced, .single-spaced * {
    line-height: 1;
  }

  @media (max-width: 1024px) {
    .desktop {
      display: none;
    }
  }

  .tesla-logo {
    background-image: url("../assets/lovelemon.png");
    background-repeat: no-repeat;
    background-size: 140px 60px;
    height: 100%;
    width: 100%;
  }

</style>
