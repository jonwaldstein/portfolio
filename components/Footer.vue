<template lang="html">
  <footer class="site-footer">
    <div class="content">
      <p>
        <strong>Jon Waldstein</strong> by <a href="https://github.com/jpwaldstein">Jon Waldstein</a>.
      </p>
      <p>{{date}} Copyright, whatever.</p>
      <div class="contact-links">
    	   <a href="#" v-on:click.prevent="mail = !mail"><i class="far fa-envelope fa-2x"></i></a>
         <a href="http://linkedin.com/in/jon-waldstein" target="_blank"><i class="fab fab fa-linkedin fa-2x"></i></a>
         <a href="https://github.com/jpwaldstein" target="_blank"><i class="fab fa-github fa-2x"></i></a>
      </div>
      <transition name="fade">
        <p class="has-text-weight-semibold" style="margin-top: 25px;" v-show="mail">jpwaldstein@gmail.com</p>
      </transition>
    </div>
  </footer>
</template>

<script>
export default {
  data(){
    return{
        date: new Date().getFullYear(),
        mail: false
    }
  }
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
