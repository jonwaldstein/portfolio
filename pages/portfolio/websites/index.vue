<template lang="html">
  <div>
      <h1 class="subtitle">Websites</h1>
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
          "title": "Kidsense Therapy Group",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image": require('~/assets/images/kidsensetherapygroup.jpg'),
          "external_url": 'https://www.kidsensetherapygroup.com/',
          "credits": ""
        },
        {
          "id": 2,
          "title": "Glamorous Corset",
          "description": "An e-commerce shop built with woocommerce",
          "featured_image": require('~/assets/images/glamorouscorset.jpg'),
          "external_url": 'https://glamorouscorset.com/',
          "credits": ""
        },
        {
          "id": 3,
          "title": "Fresh Green Light",
          "description": "A hand-crafted, custom tailored website, built on wordpress",
          "featured_image":  require('~/assets/images/freshgreenlight.jpg'),
          "external_url": 'https://www.freshgreenlight.com/',
          "credits": "Zero Gravity Marketing"
        },
        {
          "id": 4,
          "title": "Technique Printers",
          "description": "A simple website built on wordpress",
          "featured_image":  require('~/assets/images/techniqueprinters.jpg'),
          "external_url": 'http://techniqueprinters.com/',
          "credits": ""
        },
      ]
    }
  }
}
</script>

<style lang="css">
</style>
