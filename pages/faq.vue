<template>
  <div>
    <div class="pc">
      <p class="pc top">Not Service For PC And Tablets...</p>
      <p class="pc bottom">Please Check By SmartPhone...</p>
    </div>
    <div class="container">
      <MyHeader />
      <h2 @click="toggleOrg" class="arrow arrow1">TELSTARについて...</h2>
      <section v-if="isShowOrg">
        <p class="question">Q.どんな人が参加していますか？</p>
        <p class="answer">A.いろいろな大学の学生が参加しています<br><br>　関東:首都大学東京, 芝浦工業大学, 電気通信大学, 学習院大学, 明治大学, 東京電機大学, 東京大学, 一橋大学, 中央大学, 東京工芸大学, 武蔵野美術大学, 他<br><br>　関西:関西大学, 大阪工業大学, 大阪大学, 同志社大学, 大阪府立大学, 名古屋大学, 神戸大学, 他</p>
        <p class="question">Q.メンバーに女子はいますか？</p>
        <p class="answer">A.います。男女比はおよそ6:4です。</p>
        <p class="question">Q.兼部できますか？</p>
        <p class="answer">A.それなりに忙しくなると思いますが、できます。実際にしている人もたくさんいます。</p>
        <p class="question">Q.文系ですが、参加できますか？</p>
        <p class="answer">A.大歓迎です。文系メンバーもいるので安心してください。</p>
        <p class="question">Q.宇宙の知識はどれぐらい必要ですか？</p>
        <p class="answer">A.徐々に身に着いていくので、宇宙が好きという気持ちがあれば大丈夫です。 </p>
        <p class="question">Q.団体外との関わりはありますか？</p>
        <p class="answer">A.取材や渉外、イベントなどで企業や研究室、学生団体と関わる機会は多いです。</p>
        <p class="question">Q.何年生でも入れますか？</p>
        <p class="answer">A.大学生または大学院生であれば何年生でも大歓迎です。</p>
      </section>
      <h2 @click="toggleMagazine" class="arrow arrow1">冊子制作について...</h2>
      <section v-if="isShowMagazine">
        <p class="question">Q.冊子はどうやって作っていますか？</p>
        <p class="answer">A.テーマを決め、必要があれば取材に行き、文章やデザインを編集して冊子を作っています</p>
        <p class="question">Q.取材はどこに行きますか？</p>
        <p class="answer">A.JAXAのような宇宙機関や宇宙に関わる企業、研究室などが主です。</p>
        <p class="question">Q.冊子の発行部数はどのくらいですか？</p>
        <p class="answer">A.一号につき1万2000部発行しています。現在、総発行部数は17万部以上になりました。</p>
        <p class="question">Q.現状は年何回冊子を発行していますか？</p>
        <p class="answer">A.年に3~4回発行しています。</p>
      </section>
      <h2 @click="toggleMeeting" class="arrow arrow1">ミーティングについて...</h2>
      <section v-if="isShowMeeting">
        <p class="question">Q.ミーティングはいつやってますか？</p>
        <p class="answer">A.関東は毎週日曜日、関西は月の最終日曜日です。</p>
        <p class="question">Q.ミーティングは強制参加ですか？</p>
        <p class="answer">A.ご自身の都合に合わせて参加してもらえれば大丈夫です。 </p>
        <p class="question">Q.活動場所はどこですか？</p>
        <p class="answer">A.ミーティングは大学やフリースペースを利用しています。<br>関東:新宿や秋葉原<br>関西:梅田</p>
      </section>
      <h2 @click="toggleOtherActivity" class="arrow arrow1">冊子以外の活動について...</h2>
      <section v-if="isShowOtherActivity">
        <p class="question">Q.冊子制作以外にどんな活動をしてますか？</p>
        <p class="answer"> A.イベントの企画や外部イベントに参加しています。またWEBやSNSで宇宙情報を発信しています。 </p>
        <p class="question">Q.内部でのイベント等はありますか？</p>
        <p class="answer">A.バーベキュー、クリスマスパーティー、夏合宿などがあります。</p>
      </section>
      <h2 @click="toggleWork" class="arrow arrow1">事務作業や部費等について...</h2>
      <section v-if="isShowWork">
        <p class="question">Q.部費のようなものはありますか？</p>
        <p class="answer"> A.毎年、年度始めに団体維持費を集めています。昨年は3000円でした。</p>
      </section>
      <MyMenu v-if="$store.state.isShowMenu"/>
    </div>
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
      article: '',
      isShowOrg: false,
      isShowMagazine: false,
      isShowEvent: false,
      isShowMeeting: false,
      isShowOtherActivity: false,
      isShowWork: false,
      isShowOthers: false
    }
  },
  methods: {
    toggleOrg: function () {
      this.isShowOrg = !this.isShowOrg
    },
    toggleMagazine: function () {
      this.isShowMagazine = !this.isShowMagazine
    },
    toggleEvent: function () {
      this.isShowEvent = !this.isShowEvent
    },
    toggleMeeting: function () {
      this.isShowMeeting = !this.isShowMeeting
    },
    toggleOtherActivity: function () {
      this.isShowOtherActivity = !this.isShowOtherActivity
    },
    toggleWork: function () {
      this.isShowWork = !this.isShowWork
    },
    toggleOthers: function () {
      this.isShowOthers = !this.isShowOthers
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 1.4em;
  text-align: center;
  margin-left: 30px;
}
p {
  word-wrap: break-word;
  text-align: left;
  margin-left: 30px;
  margin-right: 20px;
}
p.question {
  color: rgb(0, 3, 206);
  font-size: 20px;
}
p.answer {
  color: black;
  font-size: 13px;
}
img.left {
  width: 80%;
  height: 100px;
  line-height: 100px;
  margin-left: 0;
  margin-right: 20%;
}
/* arrow css */
.arrow{
  position: relative;
  display: inline-block;
  padding: 0 0 0 16px;
  color: #000;
  vertical-align: middle;
  text-decoration: none;
}
.arrow::before,
.arrow::after{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  content: "";
  vertical-align: middle;
}
.arrow1::before{
    width: 12px;
    height: 12px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: #7a0;
}
.arrow1::after{
    left: 5px;
    box-sizing: border-box;
    width: 3px;
    height: 3px;
    border: 3px solid transparent;
    border-left: 3px solid #fff;
}
</style>
