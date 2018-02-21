<template lang="html">
  <div class="projects">
    <div v-for="project in projects" class="card card-margin-bottom card-max-width" v-bind:key="project.id">
      <div class="card__header">
        <h3 class="card--title title is-4">{{project.title}}</h3>
        <div class="card-content">
          <div class="content">{{project.description}}</div>
        </div>
      </div>
      <div class="card-image">
        <figure class="image">
          <img v-bind:src="project.featured_image" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-footer">
        <p class="card-footer-item">
          <span>
            <a target="_blank" v-bind:href="project.external_url">View Site</a>
          </span>
        </p>
        <p class="card-footer-item" v-if="project.credits">
          <span>
            Credits:
            <em>{{project.credits}}</em>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['projects'],
  data(){
    return {

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
