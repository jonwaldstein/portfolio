<template lang="html">
  <footer class="site-footer">
    <div class="content has-text-centered">
      <p>
        <strong>Jon Waldstein</strong> by <a href="https://github.com/jpwaldstein">Jon Waldstein</a>.
      </p>
      <p>{{date}} Copyright, whatever.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data(){
    return{
        date: new Date().getFullYear()
    }
  },
}
</script>

<style lang="css">
.site-footer{
  border-top: 4px solid gainsboro;
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>
