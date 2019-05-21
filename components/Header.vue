<template>
  <header>
    <img class="logo" src="../img/index/telstar_logo_black.png" @click="changePage('/')">
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
      toggleMenu: 'toggleMenu',
      changePage: 'changePage'
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
