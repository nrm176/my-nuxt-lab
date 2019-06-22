<template>
  <GChart
    type="PieChart"
    :data="chartData"
    :options="chartOptions"
    style="width: 900px; height: 500px;"
  />
  <!--  <GChart-->
  <!--    type="PieChart"-->
  <!--    :data="chartData"-->
  <!--    :options="chartOptions"-->
  <!--  />-->
</template>

<script>
  import {GChart} from 'vue-google-charts'

  export default {
    name: "Pie",
    components: {
      GChart
    },
    data() {
      return {
        chartData: [
          ['タスク', 'Hours per Day'],
          ['仕事', 11],
          ['食事', 2],
          ['通勤', 2],
          ['テレビ', 2],
          ['寝る', 7]
        ],
        chartOptions: {
          title: '大人の１日',
          sliceVisibilityThreshold: .05,
          pieSliceText: 'percentage',
          pieHole: 0.2,
          chartArea: {
            top: 50,
            left: 300,

          }
        }

      }

    },
  }
</script>

<style scoped>

</style>
