<template lang="html">
<div>
  <nav class="navbar is-transparent is-fixed-top">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">Jon Waldstein</nuxt-link>
      <div class="navbar-burger burger" v-bind:class="{'is-active': ToggleNav}" v-on:click="navBurgerToggleNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu" v-bind:class="{'is-active': ToggleNav}">
      <div class="navbar-start">

        <div class="navbar-item has-dropdown is-hoverable">
          <nuxt-link class="navbar-link" to="/about">About</nuxt-link>
          <div class="navbar-dropdown is-boxed">
            <nuxt-link class="navbar-item" to="/projects">Project</nuxt-link>
            <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          </div>
        </div>

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
            <div class="control">
              <a class="button is-primary" v-bind:class="{'is-loading': Wow}" :Disabled="WowGreedy" v-on:click="wowToggle">
                <span>Wow Me</span>
              </a>
            </div>
        </div>
      </div>
    </div>
  </nav>
  <div v-if="Wow" class="container">

    <div class="notification is-primary" v-show="windowMessage">
      <button class="delete" v-on:click="deleteNotification"></button>
      <p>You clicked 'wow me' so now I have to do something. Just click this button until it's over I guess.</p>
    </div>
    <a class="button is-warning" v-on:click="addProgress" style="margin: 25px auto 50px;">
      <span>Click Me</span>
    </a>
    <progress v-if="Wow" class="progress is-primary" :value.prop="progressWidth" max="101">{{ progressWidth + '%'  }}</progress>

  </div>
  <div v-if="WowGreedy" class="container">
    <div class="notification is-primary" v-show="windowMessage">
      <button class="delete" v-on:click="deleteNotification"></button>
      <p>You already got Wowed, don't be greedy.</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      ToggleNav: false,
      Wow: false,
      WowGreedy: false,
      windowMessage: true,
      progressWidth: 25
    }
  },
  methods: {
    navBurgerToggleNav(){
      this.ToggleNav = !this.ToggleNav;
    },
    wowToggle(){
      if (this.progressWidth >= 101){
        this.Wow = false;
        this.WowGreedy = true;
      } else{
        this.Wow = !this.Wow;
      }
    },
    deleteNotification(){
      this.windowMessage = false;
    },
    addProgress(){
      this.progressWidth = this.progressWidth += 25;
      if (this.progressWidth >= 101){
        this.Wow = false;
      }
    }
  },
}
</script>

<style lang="css">
</style>
