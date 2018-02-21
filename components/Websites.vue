<template lang="html">
  <div class="websites">
    <div v-for="website in websites" class="card card-margin-bottom card-max-width" v-bind:key="website.id">
      <div class="card__header">
        <h3 class="card--title title is-4">{{website.title}}</h3>
        <div class="card-content">
          <div class="content">{{website.description}}</div>
        </div>
      </div>
      <div class="card-image">
        <figure class="image">
          <img v-bind:src="website.featured_image" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-footer">
        <p class="card-footer-item">
          <span>
            <a target="_blank" v-bind:href="website.external_url">View Site</a>
          </span>
        </p>
        <p class="card-footer-item" v-if="website.credits">
          <span>
            Credits:
            <em>{{website.credits}}</em>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    websites(){
      return this.$store.state.websites
    }
  }
}
</script>

<style lang="css">
.card-margin-bottom{
  margin-bottom: 50px;
}
.card-max-width{
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}
</style>
