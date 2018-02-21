<template lang="html">
  <div>
      <h1 class="subtitle">Designs</h1>
      <Projects v-bind:projects="projects"/>
  </div>
</template>

<script>
import Projects from '~/components/Projects.vue';

export default {
  components: {
    Projects
  },
  data(){
    return{
      projects: [
        {
          "id": 1,
          "title": "Wordpress Project 1",
          "description": "Wordpress project 1 description"
        },
        {
          "id": 2,
          "title": "Wordpress Project 2",
          "description": "Wordpress project 2 description"
        },
        {
          "id": 3,
          "title": "Wordpress Project 3",
          "description": "Wordpress project 3 description"
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
