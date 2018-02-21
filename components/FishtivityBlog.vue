<template lang="html">
  <div class="blog">
    <div class="spinner" v-show="this.$store.state.loading">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
      <div v-for="post in blog" class="card card-margin-bottom card-max-width" v-bind:key="post.id">
        <div class="card-image">
          <figure class="image">
            <img v-bind:src="hasThumbnail(post)" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">

            <div class="media-left">
              <figure class="image is-48x48">
                <img v-bind:src="hasAuthorThumbnail(post)" alt="Placeholder image" style="border-radius: 50%;">
              </figure>
            </div>

            <div class="media-content">
              <p class="title is-4" v-html="post.title.rendered"></p>
              <p class="subtitle is-6">By: {{post.author_meta.display_name}}</p>
            </div>
          </div>

          <div class="content has-text-left" v-html="post.content.rendered"></div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  computed: {
    blog(){
      return this.$store.state.blog;
    },
  },
  data(){
    return {
      siteUrl: 'https://fishtivity.net'
    }
  },
  methods: {
    hasThumbnail: function(post) {
       if (post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes)
       {
         return  this.siteUrl + post._embedded['wp:featuredmedia'][0].source_url;
       }
    },
    hasAuthorThumbnail: function(post) {
       if (post._embedded['author'] && post._embedded['author'][0].avatar_urls)
       {
         return  post._embedded['author'][0].avatar_urls['96'];
       }
    }
  }
}
</script>

<style lag="css" scoped>
  .content figure{
    display: none;
  }
</style>
