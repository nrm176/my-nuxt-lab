# PLUGINS

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains Javascript plugins that you want to run before mounting the root Vue.js application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/plugins).


**Vue-Carousel

`npm install --save vue-carousel`

plugins/carousel.js
```vue
import Vue from 'vue';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

```

nuxt.config.js
```javascript
  plugins: [
   {src: "~plugins/carousel.js", ssr: false}
  ]
```
