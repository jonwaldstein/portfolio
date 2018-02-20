<template>
  <div>
    <Navigation />
    <div class="container site-container">
      <div class="columns is-8">
        <side-nav />
      </div>
      <div class="column is-three-quarters is-offset-one-quarter">
        <main class="main">
          <div class="nuxt">
            <nuxt/>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import Navigation from '~/components/Navigation.vue';
import Footer from '~/components/Footer.vue';
import SideNav from '~/components/SideNav.vue';

export default {
  components: {
    AppLogo,
    Navigation,
    Footer,
    SideNav
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.main {
  min-height: 100vh;
}
.site-container{
  padding-top: 50px;
}
</style>
