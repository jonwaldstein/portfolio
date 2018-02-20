<template lang="html">
  <div>
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
          "title": "Project 1",
          "description": "This is a project 1 description"
        },
        {
          "id": 2,
          "title": "Project 2",
          "description": "This is a project 2 description"
        },
        {
          "id": 3,
          "title": "Project 3",
          "description": "This is a project 3 description"
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
