<template lang="html">
  <aside id="side-nav" class="menu column is-hidden-mobile">
    <p class="menu-label">
      About
    </p>
    <ul class="menu-list">
      <nuxt-link to="/about">My Story</nuxt-link>
      <nuxt-link to="/projects">Projects</nuxt-link>
    </ul>
    <p class="menu-label">
      Websites
    </p>
    <ul class="menu-list">
      <nuxt-link to="/projects/wordpress">Wordpress</nuxt-link>
      <li><a>Woocommerce</a></li>
      <li><a>Shopify</a></li>
    </ul>
    <p class="menu-label">
      Open Source
    </p>
    <ul class="menu-list">
      <li><a>SCSS Utility Classes</a></li>
      <li>
        <a>Active</a>
        <ul>
          <li><a>item</a></li>
          <li><a>item</a></li>
          <li><a>item</a></li>
        </ul>
      </li>
    </ul>
    <Footer />
  </aside>
</template>

<script>
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Footer
  }
}
</script>

<style lang="css">
#side-nav{
  position: fixed;
  top: 75px;
  bottom: 0;
  overflow-y: scroll;

}
</style>
<style lang="css" scoped>
  a.nuxt-link-active {
      background-color: #00c4a7;
      color: #fff;
  }
</style>
