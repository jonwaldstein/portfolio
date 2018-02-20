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
