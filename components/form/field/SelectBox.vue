<template>
  <div>
    <b-field label="選択肢(Buefy)">
      <b-select icon="clock" placeholder="Select a name" v-model="selectedOption">
        <option
          v-for="option in options"
          :value="option.name"
          :key="option.id"
        >
          {{ option.name }}
        </option>
      </b-select>
    </b-field>
  </div>
</template>

<script>
  export default {
    name: "SelectBox",
    data() {
      return {
        options: [
          {id: 1, name: "中央区"},
          {id: 2, name: "北区"},
          {id: 3, name: "江戸川区"},
          {id: 4, name: "豊島区"},
          {id: 5, name: "新宿区"},
        ],
        selectedOption: ''
      }
    }
  }
</script>

<style scoped>

</style>
