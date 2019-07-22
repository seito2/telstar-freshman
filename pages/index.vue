<template>
  <div>
    <div class="pc">
      <p class="pc top">Not Service For PC And Tablets...</p>
      <p class="pc bottom">Please Check By SmartPhone...</p>
    </div>
    <section class="container">
      <MyHeader />
      <div class="home-gif-container">
        <img src="../img/index/home.gif" alt="" class="topBackground">
      </div>
      <img src="../img/index/telstar_logo_white.png" alt="" class="telstar-logo-on-background">
      <div id="one" class="empty" />
      <MyTitle 
        number="01" 
        title_one="Our Vision" 
        title_two="団体理念"
        />
      <MySentence 
        h2="宇宙産業を日本の基幹産業に"
        p="私たちTELSTARは、宇宙産業を日本の基幹産業にすることを理念に掲げています。近い未来、宇宙産業は私たちの社会に欠かせないものになると考えています。中高生の”宇宙は難しい”という意識を興味へと変えることで、来たる宇宙時代、日本が宇宙産業で世界をリードしていく未来を目指しています。"
        />
      <div id="two" class="empty" />
      <MyTitle 
        number="02" 
        title_one="Activity Purpose" 
        title_two="活動目的"
        />
      <MySentence 
        h2="「 宇宙への興味を０→１へ 」"
        p="私たちTELSTARは、宇宙をフィールドに活躍する多種多様な人材を創出するため、宇宙への興味の入り口を提供する活動を行っています。"
        />
      <MySentence 
        p="進路選択の重要な時期である中高生をメインターゲットとして、宇宙フリーマガジンTELSTARの発行を中心に、ウェブサイト・SNSによる情報発信やイベントなどの広報活動を推進しています"
        />
      <div id="three" class="empty" />
      <MyTitle 
        number="03"
        title_one="Content" 
        title_two="活動内容"
        />
      <MySentence 
        h2="FREE MAGAGINE"
        p="宇宙フリーマガジン「TELSTAR」は、大学生の視点から宇宙を伝える、今までになかった宇宙雑誌です。研究機関や企業を取材した記事を美大生を中心に分かりやすいデザインでまとめ、文理を問わずに宇宙の魅力を紹介しています。完成したフリーマガジンは、全国の高校・科学館に配布され、宇宙教育の促進を目指しています。"
        />
      <img src="../img/index/telstar_freemagazine.png" alt="" class="three-section" @click="jumpToOtherPage('https://telstar.actibookone.com/')">
      <MySentence 
        h2="EVENT"
        p="フリーマガジンよりも幅広いターゲット層にアプローチできるイベント運営を行います。宇宙や教育に関する様々な外部イベントへのブース出展や、オリジナルで考えたコンセプトに沿った宇宙イベントの主催を行っています。気軽に参加でき、また私たちが参加者と直接関わることで興味を広げるサポートができるよう運営しています。"
        />
      <nuxt-link to="/event">
        <img src="../img/index/event.jpg" alt="" class="three-section">
      </nuxt-link>
      <MySentence 
        h2="TELSTAR WEB"
        p="TELSTARのWEBサイトでは、フリーマガジンに載せきれなかったインタビューなどの冊子スピンオフの他に、WEB特集や月や星まつわる話題を扱う記事なども掲載しています。また、TELSTARが参加もしくは主催する各種イベントの告知や報告の記事も随時更新しています。"
        />
      <img src="../img/index/web.png" alt="" class="three-section" @click="jumpToOtherPage('http://spacemgz-telstar.com/')">
      <div id="four" class="empty" />
      <MyTitle 
        number="04"
        title_one="Member" 
        title_two="メンバー紹介"
        />
      <nuxt-link to="/member">
        <img src="../img/index/more_icon.jpg" alt="" class="icon" to="/member">
      </nuxt-link>
      <img src="../img/index/japan.png" alt="" class="japan-img">
      <div id="five" class="empty" />
      <MyTitle 
        number="05"
        title_one="Position" 
        title_two="担当紹介"
        />
      <img v-for="(item, index) in img_src" :key="(item, index)" :src="imagePath(item)" @click="showDetail(10 + index)" class="position-img">
      <MyPosition 
        :h2="Position_h2"
        :p="Position_p"
        />
      <img v-for="(item, index) in img_src_2" :key="(item, index)" :src="imagePath(item)" @click="showDetail(20 + index)" class="position-img">
      <div id="seven" class="empty" />
      <JoinUs />

      <GrayBackground />
      <MyMenu v-if="$store.state.isShowMenu"/>
    </section>
  </div>
</template>

<script>
import MyHeader from '../components/Header';
import MyTitle from '../components/title';
import MySentence from '../components/sentence';
import MyPosition from '../components/Position';
import JoinUs from '../components/JoinUs';
import GrayBackground from '../components/gray_back';
import MyMenu from '../components/Menu';

export default {
  components: {
    MyHeader,
    MyTitle,
    MySentence,
    MyPosition,
    JoinUs,
    GrayBackground,
    MyMenu
  },
  data() {
    return {
      img_src: ['designer','external_affaires','reporter'],
      img_src_2: ['koho','marketing','affaires'],
      position_data: [],
      Position_h2: 'デザイナー',
      Position_p: '冊子の表紙やレイアウト、イベントで使用するフライヤーなどのデザインを担当しています。'
    }
  },
  created() {
    this.position_data = require('../static/json//position.json');
  },
  methods: {
    imagePath: function (path) {
      return require("../img/index/" + path + ".jpg")
    },
    showDetail(index) {
      console.log(index);
      switch (index) {
        case 10:
          this.Position_h2 = this.position_data[0].h2;
          this.Position_p  = this.position_data[0].p;
          break;
        case 11:
          this.Position_h2 = this.position_data[1].h2;
          this.Position_p  = this.position_data[1].p;
          break;
        case 12:
          this.Position_h2 = this.position_data[2].h2;
          this.Position_p  = this.position_data[2].p;
          break;
        case 20:
          this.Position_h2 = this.position_data[3].h2;
          this.Position_p  = this.position_data[3].p;
          break;
        case 21:
          this.Position_h2 = this.position_data[4].h2;
          this.Position_p  = this.position_data[4].p;
          break;
        case 22:
          this.Position_h2 = this.position_data[5].h2;
          this.Position_p  = this.position_data[5].p;
          break;
            
        default:
          break;
      }
    },
    jumpToOtherPage: url => window.open(url),
  }
}
</script>

<style scoped>
.container {
  margin: 0;
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

div.home-gif-container {
  overflow: hidden;
}

img.topBackground {
  height: calc(100vh - 76px);  
  /* width: 100vw; */
  filter: grayscale(90%);
}
@media screen and (max-width: 641px) {
  img.topBackground {
    width: 100vw;
    height: auto;
  }
}
img.telstar-logo-on-background {
  width: 250px;
  margin: auto;
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 125px);
  opacity: 0.8;
  z-index: 0;
}
img.three-section {
  height: 40px;
}
img.japan-img {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 30px;
}
img.icon {
  width: 100px;
  height: 50px;
  position: absolute;
  margin-top: 100px;
  margin-left: 40px;
  z-index: 10;
}
img.position-img {
  width: 33%;
  margin-top: 20px;
}
</style>
