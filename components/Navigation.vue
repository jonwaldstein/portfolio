<template lang="html">
<div>
  <nav class="navbar is-transparent is-fixed-top container">

    <div class="navbar-brand">
      <nuxt-link class="navbar-item has-text-weight-semibold" to="/">Jon Waldstein</nuxt-link>
    </div>

    <div class="navbar-menu" style="box-shadow: none;">

      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/">
          <Gravatar />
        </nuxt-link>

      </div>

    </div>

  </nav>

</div>
</template>

<script>
import Gravatar from "~/components/Gravatar.vue";

export default {
  components: {
    Gravatar,
  },
};
</script>

<style>
.navbar-brand {
  flex: 1;
}
.navbar,
.navbar-menu,
.navbar-start,
.navbar-end {
  display: flex;
  align-items: stretch;
}
a.navbar-item:hover,
a.navbar-item.is-active,
a.navbar-link:hover,
a.navbar-link.is-active {
  background-color: transparent;
  color: #6ba49a;
}
</style>
