<template>
  <section class="container">
    <MyHeader />
    <MemberArticle />
    <MyMenu v-if="$store.state.isShowMenu"/>
  </section>
</template>

<script>
import MyHeader from '../components/Header';
import MemberArticle from '../components/MemberAirticle';
import MyMenu from '../components/Menu';

export default {
  components: {
    MyHeader,
    MemberArticle,
    MyMenu
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  min-height: 100vh;
  padding: 0;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
