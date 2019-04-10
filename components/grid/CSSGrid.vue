<template>
  <div>
    <div class="app-container">
      <div class="app-box">1</div>
      <div class="app-box">1</div>
      <div class="app-box">1</div>
      <div class="app-box">1</div>
      <div class="app-box">1</div>
      <div class="app-box">1</div>
      <div class="app-box">1</div>
      <div class="app-box">1</div>
      <div class="app-box">1</div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "CSSGrid"
    }
</script>

<style scoped>
  .app-container {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(2.5rem, auto);
  }

  .app-box {
    border: 1px solid coral;
  }
</style>
