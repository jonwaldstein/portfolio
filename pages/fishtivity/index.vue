<template lang="html">
  <div>
      <h1 class="subtitle">Fishtivity: Articles</h1>
      <h2 class="subtitle--link">
        <a href="https://fishtivity.net" target="_blank">Visit Fishtivity.net</a>
      </h2>
      <fishtivity-blog />
  </div>
</template>

<script>
import FishtivityBlog from '~/components/FishtivityBlog.vue';
import axios from 'axios'

export default {
  components: {
    FishtivityBlog
  },
  mounted() {
    this.$store.dispatch('loadFishtivityBlog');
  }
}
</script>

<style lang="css">
</style>
