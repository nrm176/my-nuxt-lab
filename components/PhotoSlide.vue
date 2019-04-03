<template>
  <div>
    <no-ssr>
      <carousel :autoplay="true" :navigationEnabled="true">
        <slide>
                <span>
                  Slide 1 Content
                </span>
        </slide>
        <slide>
                <span>
                  Slide 2 Content
                </span>
        </slide>
        <slide>
                <span>
                  Slide 3 Content
                </span>
        </slide>
        <slide>
                <span>
                  Slide 4 Content
                </span>
        </slide>
      </carousel>
    </no-ssr>
  </div>
</template>

<script>
    export default {
        name: "PhotoSlide"
    }
</script>

<style scoped>

</style>
