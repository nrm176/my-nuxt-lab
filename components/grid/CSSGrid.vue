<template>
  <div>
    <div class="app-container">
      <div class="app-box" v-for="stock in stocksv2">
        <div class="card" :class="stock.rank">
          <div class="card-container">
            <div class="pill">
              <div class="text-align-center text-style">{{stock.c_name}}</div>
            </div>
            <div class="text-align-right">{{stock.px}} ({{ stock.chg}})</div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  const datav2 = require('@/assets/json/stocks.v2.json')
  export default {
    name: "CSSGrid",
    data() {
      return {
        // raw_data: data.items,
        stocksv2: datav2
      }
    },
    // computed: {
    //   stocks() {
    //     return [].concat.apply([], this.raw_data.map((e) => e.children))
    //   },
    // }
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

  .text-align-right {
    text-align: right;
  }


  .p-0 {
    background-color: #ffebee;
  }


  .p-1 {
    background-color: #ffcdd2;
  }


  .p-2 {
    background-color: #ef9a9a;
  }


  .p-3 {
    background-color: #e57373;
  }


  .p-4 {
    background-color: #ef5350;
  }


  .p-5 {
    background-color: #f44336;
  }


  .p-6 {
    background-color: #e53935;
  }


  .p-7 {
    background-color: #d32f2f;
  }


  .p-8 {
    background-color: #c62828;
  }


  .p-9 {
    background-color: #b71c1c;
  }


  .n-0 {
    background-color: #e3f2fd;
  }


  .n-1 {
    background-color: #bbdefb;
  }


  .n-2 {
    background-color: #90caf9;
  }


  .n-3 {
    background-color: #64b5f6;
  }


  .n-4 {
    background-color: #42a5f5;
  }


  .n-5 {
    background-color: #2196f3;
  }


  .n-6 {
    background-color: #1e88e5;
  }


  .n-7 {
    background-color: #1976d2;
  }


  .n-8 {
    background-color: #1565c0;
  }


  .n-9 {
    background-color: #0d47a1;
  }

  .text-style {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>
