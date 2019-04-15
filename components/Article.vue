<template>
  <article class="media notification" v-bind:class="cardColor">
    <figure class="media-left">
        <span class="icon is-medium">
          <i v-bind:class="cardIcon"></i>
        </span>
    </figure>
    <div class="media-content">
      <div class="content">
        <h1 class="title is-size-4">{{ title }}</h1>
        <p class="is-size-5">{{ body }}</p>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: "Article",
    props: {
      title: String,
      body: String,
      cardColor: String,
      cardIcon: String
    }
  }
</script>

<style scoped>

</style>
