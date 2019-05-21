<template>
  <transition name="menu-list">
    <nav class="sp">
      <ul>
        <li><a @click="changePage('/')">HOME</a></li>
        <li><a href="#one" @click="toggleMenu">01:Our&nbsp;Vision</a></li>
        <li><a href="#two" @click="toggleMenu">02:Purpose</a></li>
        <li><a href="#three" @click="toggleMenu">03:Contents</a></li>
        <li><a href="#four" @click="toggleMenu">04:MEMBER</a></li>
        <li><a href="#five" @click="toggleMenu">05:Position</a></li>
        <li><a href="#seven" @click="toggleMenu">07:CONTACT</a></li>
        <li><a @click="changePage('faq')">08:TELSTAR&nbsp;Q＆A</a></li>
      </ul>
    </nav>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'MenuSP',
  created() {
    addEventListener('scroll', e => {
      e.preventDefault();
    })
  },
  methods: {
    changePage: function (name) {
      this.$emit('EVENT_SELECT_MENU', name)
    },
    scrollToFunction: function (position) {
      this.$emit('EVENT_SELECT_MENU', 'HOME')
      setTimeout(() => {
        window.scrollTo(0, position)
      }, 1200);
    },
    ...mapMutations({
      changePage: 'changePage',
      toggleMenu: 'toggleMenu',
    })
  }
}
</script>

<style scoped>
@media (max-width: 750px) {
 nav.sp {
    display: inline;
    position: absolute;
    background-color: rgb(255, 255, 255);
    top: 70px;
    left: 0;
    transition: 0.5s;
  }
  nav.sp ul {
    padding: 0;
    margin: 0;
  }
  nav.sp ul li a {
    border-top: 1px solid #0000003d;
    height: calc((100vh - 65px) / 8);
    width: 100vw;
    line-height: calc((100vh - 65px) / 8);
    font-size: 1em;
    color: rgb(0, 0, 0);
    text-decoration: none;
    display: block;
    background-color: rgb(255, 255, 255);
    text-align: center;
  }
  nav.sp ul li a:hover,
  nav.sp ul li a:active {
    background: #2196f3;
  }
}
@media (min-width: 750px) {
  sp {
    display: none;
  }
}
</style>
