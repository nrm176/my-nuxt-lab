<template>
  <GChart
    type="CandlestickChart"
    :data="chartData"
    :options="chartOptions"
    style="width: 900px; height: 500px;"
  />
</template>

<script>
  import {GChart} from 'vue-google-charts'
  export default {
    name: "Waterfall",
    components: {
      GChart
    },
    data() {
      return {
        chartData: [
          ['','','','','',],
          ['18/3合計', 28, 0, 38, 38],
          ['為替変動', 38, 38, 55, 55],
          ['販売数量', 55, 55, 77, 77],
          ['販売価格', 77, 77, 66, 66],
          ['コスト', 66, 66, 22, 22],
          ['19/3合計', 22, 0, 22, 22],
        ],
        chartOptions: {
          legend: 'none',
          bar: { groupWidth: '100%' }, // Remove space between bars.
          candlestick: {
            fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
            risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
