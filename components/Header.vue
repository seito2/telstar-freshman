<template>
  <header>
    <nuxt-link to="/">
      <img class="logo" src="../img/index/telstar_logo_black.png" to="/">
    </nuxt-link>
    <div />
    <img src="../img/index/ic_menu_48px.svg" @click="toggleMenu" class="hanbarger">
   </header>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'MyHeader',
  methods: {
    toggle: function () {
      
    },
    ...mapMutations({
      toggleMenu: 'toggleMenu'
    })
  }
}
</script>

<style scoped>
header {
  margin: 14px;
  display: grid;
  grid-template-columns: 132px 1fr 48px;
  grid-template-rows: 48px;
  overflow: hidden;
}
header .logo {
  height: 48px;
  margin-top: -4px;
}
</style>
