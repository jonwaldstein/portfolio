<template lang="html">
  <footer class="site-footer">
    <div class="content">
      <p>
        <strong>Jon Waldstein</strong> by <a href="https://github.com/jpwaldstein">Jon Waldstein</a>.
      </p>
      <p>{{date}} Copyright, whatever.</p>
      <div class="contact-links">
    	   <a href="mailto:%20jpwaldstein@gmail.com" target="_blank"><i class="far fa-envelope fa-2x"></i></a>
         <a href="http://linkedin.com/in/jonathanwaldstein" target="_blank"><i class="fab fab fa-linkedin fa-2x"></i></a>
         <a href="https://github.com/jpwaldstein" target="_blank"><i class="fab fa-github fa-2x"></i></a>
      </div>
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
  margin-top: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>
