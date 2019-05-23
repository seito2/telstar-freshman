<template>
  <div>
    <div class="pc">
      <p class="pc top">Not Service For PC And Tablets...</p>
      <p class="pc bottom">Please Check By SmartPhone...</p>
    </div>
    <section class="container">
      <MyHeader />
      <div>
        <p class="title">EVENTS</p>
        <div class="img-div">
          <img v-for="(item, index) in img_src" :key="(item, index)" :src="imagePath(item)" @click="changeArticle(index)">
        </div>
        <transition name="fade-in-article">
          <div v-if="isShow" class="pop-up-window">
            <h2>{{ article.name }}</h2>
            <p>{{ article.article }}</p>
            <img src="../img/event/delete.png" @click="closeArticle" class="close">
            <img :src="imagePath(img_path)" class="img">
          </div>    
        </transition>
        <h4>画像をクリック！！</h4>
      </div>  
      <MyMenu v-if="$store.state.isShowMenu"/>
    </section>
  </div>
</template>

<script>
import MyHeader from '../components/Header';
import MyMenu from '../components/Menu';

export default {
  components: {
    MyHeader,
    MyMenu
  },
  data: function () {
    return {
      jsonData: '',
      article: '',
      img_src: ['telstar_club', 'capital', 'yuge', 'library', 'telstar_logo_only','kiz', 'tyu_fes', 'dokushokai', 'kyodai'],
      isShow: false,
      img_path: 'telstar_club'
    }
  },
  mounted: function () {
    this.jsonData = require('../static/json/event_detail.json')
    this.article = this.jsonData[0]
    console.log(this.article)
  },
  methods: {
    imagePath: function (path) {
      return require("../img/event/" + path + ".jpg")
    },
    changeArticle: function (index) {
      this.isShow = true
      if (index !== 4) {
        this.article = this.jsonData[index]
        this.img_path = this.img_src[index]
      }
    },
    closeArticle: function () {
      this.isShow = false
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sawarabi+Mincho');

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


p.title {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 30px;
  font-weight: bold;
  color: rgb(3, 7, 63);
  margin: 0;
  margin-top: 10px;
  text-align: center;
  font-family: 'Sawarabi Mincho', sans-serif;
}
.img-div {
  width: 100%;
  height: 400px;
  margin-left: 4%;
  margin-top: 20px;
}
div.img-div img {
  width: 30vw;
  height: 30vw;
  float: left;
  margin: 0.5%;
}
.pop-up-window {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.918);
  width: 96%;
  height: 500px;
  top: 100px;
  left: 2%;
  box-shadow: 0 0 8px gray;
}
.pop-up-window h2 {
  margin-top: 1em;
  margin-bottom: 0.4em;
  font-size: 1.5em;
}
.pop-up-window p {
  font-size: 1em;
  margin-right: 20px;
  margin-left: 20px;
  text-align: left;
  font-family: 'Sawarabi Gothic', sans-serif;
}
.pop-up-window img.img {
  width: 140px;
  position: absolute;
  bottom: 10px;
  left: 15px;
}
.pop-up-window img.close {
  width: 40px;
  position: absolute;
  bottom: 10px;
  right: 15px;
}
h4 {
  color: rgba(255, 0, 0, 0.733);
}
/* transition animations */
.fade-in-article-enter-active, .fade-in-article-leave-active {
  transition: 0.6s;
}
.fade-in-article-enter {
  opacity: 0;
}
.fade-in-article-enter-to {
  opacity: 1;
}
.fade-in-article-leave-to{
  opacity: 0;
}
</style>
