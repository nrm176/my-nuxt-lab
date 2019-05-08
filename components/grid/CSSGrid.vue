<template>
  <div>
    <div class="app-container">
      <div class="app-box" v-for="stock in stocks">
        <div class="card">
          <div class="card-container">
              <div class="pill">
                <div class="text-align-center">{{stock.cName}}</div>
              </div>

            <p>{{ stock.pxChange}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  const data = require('@/assets/json/stocks.json')
  export default {
    name: "CSSGrid",
    data() {
      return {
        raw_data: data.items
      }
    },
    computed: {
      stocks() {
        return [].concat.apply([], this.raw_data.map((e)=>e.children))
      }
    }
  }
</script>

<style scoped>
  .app-container {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    /*grid-auto-rows: minmax(1rem, auto);*/
  }

  .app-box {
    /*border: 1px solid coral;*/
    padding: 0.2rem;
  }

  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.10);
    transition: 0.3s;
    border: 1px solid rgb(221, 219, 218);
    -webkit-border-radius: .25rem;
    -moz-border-radius: .25rem;
    border-radius: .25rem;

  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  /* Add some padding inside the card container */
  .card-container {
    padding: 2px 2px;
    text-align: center;
    font-size: 0.8rem;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1.5;
    max-width: 100%;
    padding: .125rem;
    border: 1px solid rgb(221, 219, 218);
    border-radius: .25rem;
    background-color: rgb(255, 255, 255);
    position: relative;
    min-height: 1.625rem
  }

  .media-title {
    display: block;
    justify-content: center;
  }

  .text-align-center {
    text-align: center;
  }
</style>
