<template>
    <div>
      <Intro />
    </div>
</template>

<script>
import Intro from '~/components/Intro.vue';

export default {
  components: {
    Intro
  }
}
</script>

<style>
.nuxt {
    display: block;
    padding: 50px;
    border: 10px solid black;
    text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
