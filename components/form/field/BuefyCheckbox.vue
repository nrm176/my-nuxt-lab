<template>
  <section>
    <b-field label="選択肢(Buefy)">
      <div class="block">
        <b-checkbox v-for="city in cities" :key="city.id" v-model="checkboxGroup"
                    :native-value="city.name">
          {{city.name}}
        </b-checkbox>
      </div>
    </b-field>
  </section>
</template>

<script>
  export default {
    name: "BuefyCheckbox",
    data() {
      return {
        cities: [
          {id: 0, name: '埼玉'},
          {id: 1, name: '東京'},
          {id: 2, name: '千葉'},
          {id: 3, name: '神奈川'},
          {id: 4, name: '栃木'},
          {id: 5, name: '群馬'},
          {id: 6, name: '茨城'},
          {id: 7, name: '静岡'},
        ],
        checkboxGroup: []
      }
    }
  }
</script>

<style scoped>

</style>
