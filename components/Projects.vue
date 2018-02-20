<template lang="html">
  <div class="projects">
    <div v-for="project in projects" class="card card-margin-bottom card-max-width" v-bind:key="project.id">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://picsum.photos/1200/?random" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://picsum.photos/96/96/?random" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{project.title}}</p>
            <p class="subtitle is-6">Credits: ZGM</p>
          </div>
        </div>

        <div class="content">
          {{project.description}}
        </div>
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
