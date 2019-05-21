<template>
  <div>
    <MemberAll @EVENT_CHANGE_ARTICLE="changeArticle" />
    <div class="content">
      <h2>{{ article.name }}</h2>
      <p v-if="isKanto" class="region">
        <span class="one">E</span>
        <span class="two">A</span>
        <span class="three">S</span>
        <span class="four">T</span>
      </p>
      <p v-if="!isKanto" class="region">
        <span class="one">W</span>
        <span class="two">E</span>
        <span class="three">S</span>
        <span class="four">T</span>
      </p>
      <p class="position">{{ article.position }}</p>
      <p class="belongs">{{ article.univercity }}&nbsp;{{ article.department }}&nbsp;{{ article.grade }}</p>
      <p class="nickname">ニックネーム：{{ article.nickname }}</p>
      <p class="question top">Q. TELSTARに入ったきっかけは？</p>
      <p class="answer">A. {{ article.trigger }}</p>
      <p class="question top">Q. TELSTARでやっていることは？</p>
      <p class="answer">A. {{ article.activity }}</p>
      <p class="question top">Q. 宇宙のどんなことが好き？</p>
      <p class="answer">A. {{ article.FavoriteField }}</p>
      <p class="question top">Q. 新入生へ熱いメッセージ！</p>
      <p class="answer">A. {{ article.message }}</p>
    </div>
  </div>
</template>

<script>
import MemberAll from './MemberAll';

export default {
  components: {
    MemberAll
  },
  data: function () {
    return {
      items: '',
      article: '',
      isKanto: false
    }
  },
  created: function () {
    this.items = require('../static/json/member.json');
  },
  methods: {
    changeArticle: function (index) {
      this.article = this.items[index]
      if (this.article.region === '0') {
        this.isKanto = false
      } else if (this.article.region === '1') {
        this.isKanto = true
      }
      console.log(this.article.region)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sawarabi+Mincho');

div.contect {
  width: 100%;
  top: 100px;
  margin-bottom: 30px;
}
p.region {
  font-size: 80px;
  position: absolute;
  right: 0px;
  width: 100px;
  z-index: -1;
  color: #c9c9c9;
  font-family: 'Sawarabi Mincho', sans-serif;
  text-align: center;
}
h2, p {
  margin-left: 20px;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 20px;
  text-align: left;
}
h2 {
  padding: 0;
}
p.nickname, p.belongs {
  font-size: 15px;
}
p.top {
  margin-top: 20px;
}
p.question {
  font-size: 15px;
  font-weight: bold;
}
p.answer {
  font-size: 13px;
}
p.belongs {
  margin-top: 10px;
}
img {
  width: 60px;
  position: absolute;
  top: 230px;
  right: 25px;
  transform: rotate(3deg);
}
</style>
