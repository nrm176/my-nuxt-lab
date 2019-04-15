<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column" v-for="work in works" :key="work.id">
          <Article :title="work.title" :body="work.body" :cardColor="work.cardColor" :card-icon="work.cardIcon"></Article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Article from "./Article";

  export default {
    name: "Columns",
    components: {Article},
    data() {
      return {
        works: [
          {
            id: 0,
            title: '吾輩は猫である',
            body: '吾輩わがはいは猫である。名前はまだ無い。どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ',
            cardColor: 'is-light',
            cardIcon: 'fas fa-2x fa-cat'
          },
          {
            id: 1,
            title: '蜘蛛の糸',
            body: 'ある日の事でございます。御釈迦様おしゃかさまは極楽の蓮池はすいけのふちを、独りでぶらぶら御歩きになっていらっしゃいました。池の中に咲いている蓮はすの花は、みんな玉のようにまっ白で、そのまん中にある金色きんいろの蕊ずいからは、何とも云えない好よい匂においが、絶間たえまなくあたりへ溢あふれて居ります',
            cardColor: 'is-light',
            cardIcon: 'fas fa-2x fa-spider'
          },
          {
            id: 2,
            title: '走れメロス',
            body: 'メロスは激怒した。必ず、かの 邪智暴虐 （ じゃちぼうぎゃく ） の王を除かなければならぬと決意した。メロスには政治がわからぬ。メロスは、村の牧人である。笛を吹き、羊と遊んで暮して来た。けれども邪悪に対しては、人一倍に敏感であった。',
            cardColor: 'is-light',
            cardIcon: 'fas fa-2x fa-running'
          },
        ]

      }
    }
  }
</script>

<style scoped>
  /*<!--Need this in order to keep all three columns the same height-->*/
  /*https://stackoverflow.com/questions/43564132/how-to-set-column-height-equal-to-longest-column-in-bulma-flexbox*/
  .column {
    display: flex;
  }

</style>
