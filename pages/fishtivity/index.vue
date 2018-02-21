<template lang="html">
  <div>
      <h1 class="subtitle">Fishtivity: Articles</h1>
      <h2 class="subtitle--link">
        <a href="https://fishtivity.net" target="_blank">Visit Fishtivity.net</a>
      </h2>
      <Blog v-bind:blog="blog"/>
  </div>
</template>

<script>
import Blog from '~/components/Blog.vue';
import axios from 'axios'

export default {
  components: {
    Blog
  },
  data(){
    return{
      blog: []
    }
  },
  asyncData ({ params }, callback) {
    axios.get('https://fishtivity.net/wp-json/wp/v2/posts?_embed')
    .then((response) => {
      callback(null,
        { blog: response.data }
      )
    })
  },
}
</script>

<style lang="css">
</style>
