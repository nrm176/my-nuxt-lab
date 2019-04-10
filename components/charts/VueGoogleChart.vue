<template>
  <!--https://github.com/devstark-com/vue-google-charts?ref=madewithvuejs.com#usage
  -->
  <!--https://madewithvuejs.com/vue-js-google-charts-->
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="box">
          <h2>Bubble Chart</h2>
          <GChart
            type="BubbleChart"
            :data="bubbleChartData"
            :options="chartOptions"
            :resizeDebounce="500"
            style="height: 500px;"
          />
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="column">
          <GChart
            type="AreaChart"
            :data="chartData"
            :options="chartOptions"
            :resizeDebounce="500"
            style="height: 500px;"
          />
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="column">
          <GChart
            type="BarChart"
            :data="chartData"
            :options="chartOptions"
            :resizeDebounce="500"
            style="height: 500px;"
          />
        </div>
      </div>
    </div>

  </div>


</template>

<script>
  import {GChart} from 'vue-google-charts'

  export default {
    name: "VueGoogleChart",
    components: {
      GChart
    },
    data() {
      return {
        // Array will be automatically processed with visualization.arrayToDataTable function
        chartData: [
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250],
          ['2016', 660, 1120, 300],
          ['2017', 1030, 540, 350]
        ],
        bubbleChartData: [
          ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
          ['CAN', 80.66, 1.67, 'North America', 33739900],
          ['DEU', 79.84, 1.36, 'Europe', 81902307],
          ['DNK', 78.6, 1.84, 'Europe', 5523095],
          ['EGY', 72.73, 2.78, 'Middle East', 79716203],
          ['GBR', 80.05, 2, 'Europe', 61801570],
          ['IRN', 72.49, 1.7, 'Middle East', 73137148],
          ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
          ['ISR', 81.55, 2.96, 'Middle East', 7485600],
          ['RUS', 68.6, 1.54, 'Europe', 141850000],
          ['USA', 78.09, 2.05, 'North America', 307007000]
        ],
        chartOptions: {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
