<template>
  <div>
    <Nav/>
    <section class="section">

      <div class="tile is-ancestor">

        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="title">李</p>
                <p class="subtitle">Sumomo ・ Plum</p>
                <figure class="image">
                  <img :src="`https://res.cloudinary.com/dfkqsafii/image/upload/w_auto:100:400/v1554265123/my-nuxt-lab/${images[4].src}.jpg`">
                </figure>
              </article>
              <article class="tile is-child notification is-warning">
                <p class="title">パイナップル</p>
                <p class="subtitle">Pineapple</p>
                <figure class="image">
                  <img :src="`https://res.cloudinary.com/dfkqsafii/image/upload/w_auto:100:400/v1554265123/my-nuxt-lab/${images[3].src}.jpg`">
                </figure>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">果物</p>
                <p class="subtitle">Fruits Basket</p>
                <figure class="image">
                  <img :src="`https://res.cloudinary.com/dfkqsafii/image/upload/w_auto:100:400/v1554265123/my-nuxt-lab/${images[2].src}.jpg`">
                </figure>
                <div class="content">
                  Fruits are the means by which angiosperms disseminate seeds. Edible fruits, in particular, have propagated with the movements of humans and animals in a symbiotic relationship as a means for seed dispersal and nutrition; in fact, humans and many animals have become dependent on fruits as a source of food.[1] Accordingly, fruits account for a substantial fraction of the world's agricultural output, and some (such as the apple and the pomegranate) have acquired extensive cultural and symbolic meanings.
                </div>
              </article>
            </div>
          </div>
          <!--<div class="tile is-parent">-->
            <!--<article class="tile is-child notification is-danger">-->
              <!--<p class="title">レモン</p>-->
              <!--<p class="subtitle">Lemon</p>-->
              <!--<figure class="image">-->
                <!--<img :src="`https://res.cloudinary.com/dfkqsafii/image/upload/w_auto:100:400/v1554265123/my-nuxt-lab/${images[1].src}.jpg`">-->
              <!--</figure>-->
              <!--<div class="content">-->
                <!--The lemon, Citrus limon (L.) Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.-->
              <!--</div>-->
            <!--</article>-->
          <!--</div>-->
        </div>

        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
              <p class="title">ハックルベリー</p>
              <p class="subtitle">Huckleberry</p>
              <figure class="image">
                <img :src="`https://res.cloudinary.com/dfkqsafii/image/upload/w_auto:100:400/v1554265123/my-nuxt-lab/${images[0].src}.jpg`">
              </figure>
              <div class="content">
                Huckleberries grow wild on subalpine slopes, forests, bogs and lake basins of the northwestern United States and western Canada.[4] The plant has shallow, radiating roots topped by a bush growing from an underground stem. Attempts to cultivate huckleberry plants from seeds have failed, with plants devoid of fruits. This may be due to inability for the plants to fully root and to replicate the native soil chemistry of wild plants
              </div>
          </article>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
  import Nav from "../components/Nav";

  export default {
    name: "bulma-tiles",
    components: {Nav},
    data() {
      return{
        images: [
          {id: 1, src: 'amy-chen-1413497-unsplash'},
          {id: 2, src: 'frank-albrecht-1403494-unsplash'},
          {id: 3, src: 'element5-digital-500016-unsplash'},
          {id: 4, src: 'pineapple-supply-co-29325-unsplash'},
          {id: 5, src: 'rebecca-matthews-1133972-unsplash'},
        ]

      }
    }
  }
</script>

<style scoped>

</style>
