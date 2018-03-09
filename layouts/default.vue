<template>
  <div>
    <Navigation />
    <div class="container is-fluid site-container">
      <div class="is-hidden-tablet mobile-nav">
        <nuxt-link class="navbar-item" to="/about">My Story</nuxt-link>
        <nuxt-link class="navbar-item" to="/portfolio/websites">Portfolio</nuxt-link>
      </div>
      <div class="columns">
        <side-nav />
      </div>
      <div class="column is-three-quarters is-offset-one-quarter">
        <main class="main">
          <div class="nuxt">
            <nuxt/>
          </div>
          <div class="is-hidden-tablet">
            <Footer />
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
