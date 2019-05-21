<template>
  <div class="mother-div">
    <div class="blank" />
    <div class="sns">
      <div class="sns_kansai">
        <img src="../img/index/Twitter_Social_Icon_Rounded_Square_Color.png" @click="jumpOtherPage('https://twitter.com/telstar_west')">
        <img src="../img/index/insta.jpg" @click="jumpOtherPage('https://www.instagram.com/telstar_west/')">
      </div>
      <div class="sns_kanto">
        <img src="../img/index/Twitter_Social_Icon_Rounded_Square_Color.png" @click="jumpOtherPage('https://twitter.com/telstar_freemgz')">
        <img src="../img/index/insta.jpg" @click="jumpOtherPage('https://www.instagram.com/telstar_freemgz_/')">
      </div>
    </div>
    <div class="briefing">
      <div class="kansai_briefing">
        <h4>WEST</h4>
        <p class="title">第一回</p>
        <p class="date">2019/4/7(日)</p>
        <p class="date">14:00 - 16:00</p>
        <p class="place">@コワーキングスペース天満</p>
        <p class="title">第二回</p>
        <p class="date">2019/5/6(月)</p>
        <p class="date">14:00 - 16:00</p>
        <p class="place">@梅田周辺</p>
        <!-- <p class="place">&nbsp;</p> -->
        <!-- <p class="blank">&nbsp;</p> -->
        <a>説明会の申し込みはこちら！※当日参加OK !<br></a>
        <img class="questionnaire" src="../img/index/application.jpg" @click="jumpOtherPage('https://docs.google.com/forms/d/e/1FAIpQLSdFmaKkV02z9WriXEy4ooaN_Q55JC5Qi93p9Ns-RcEhyuo0sg/viewform')">
        <!-- <img src="@/assets/questionnaire.jpg" class="questionnaire"> -->
      </div>
      <div class="kanto_briefing">
        <h4>EAST</h4>
        <p class="title">第一回</p>
        <p class="date">2019/4/6(土)</p>
        <p class="date">13:00  -  15:00</p>
        <p class="place">@渋谷駅周辺</p>
        <p class="title">第二回</p>
        <p class="date">2019/4/13(土)</p>
        <p class="date">13:00  -  15:00</p>
        <p class="place">@代々木駅周辺</p>
        <p class="title">第三回</p>
        <p class="date">2019/4/21(日)</p>
        <p class="date">13:00  -  15:00</p>
        <p class="place">@渋谷駅周辺</p>
        <a>説明会の申し込みはこちら！※当日参加OK !<br></a>
        <img class="questionnaire" src="../img/index/application.jpg" @click="jumpOtherPage('https://goo.gl/forms/ZciRzCoUeu1bbQpg1')">
        <!-- <img src="@/assets/questionnaire.jpg" class="questionnaire"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JoinUs',
  methods: {
    jumpOtherPage: url => window.open(url)
  }
}
</script>

<style scoped>
div.mother-div {
  width: 90%;
  height: 700px;
  margin-left:auto;
  margin-right: auto;
  margin-top: 80px;
  background-color: rgba(250, 239, 84, 0.356);
  border-radius: 30px;
}
div.mother-div::before {
  position: absolute;
  content: 'Join Us !';
  margin-left: calc(-15px * 7);
  margin-top: -15px;
  width: 200px;
  height: 30px;
  font-size: 30px;
  font-weight: bold;
}
div.sns {
  width: 90%;
  height: 150px;
  background: white;
  border-radius: 30px;
  margin: auto;
  display: flex;
}
div.sns::before {
  content: '質問はこちら！';
  position: absolute;
  text-align: center;
  left: calc(50% - (10px * 7));
  margin-top: -10px;
  width: 150px;
  height: 20px;
  font-size: 20px;
  font-weight: bold;
}
div.blank {
  width: 100%;
  height: 50px;
}
div.sns_kansai, div.sns_kanto {
  width: 50%;
  height: 100%;
}
div.sns_kansai::before {
  content: 'West';
  position: absolute;
  /* margin-left: calc(25% - 10px); */
  margin-left: 12px;
  margin-top: 30px;
  margin-right: auto;
  width: 100px;
  height: 20px;
  font-size: 20px;
  font-weight: bold;
}
div.sns_kanto::before {
  content: 'East';
  position: absolute;
  /* margin-left: calc(25% - 10px); */
  margin-left: 12px;
  margin-top: 30px;
  margin-right: auto;
  width: 100px;
  height: 20px;
  font-size: 20px;
  font-weight: bold;
}
div.sns img {
  height: 60px;
  margin-top: 70px;
}
div.briefing {
  width: 90%;
  height: 450px;
  margin: auto;
  margin-top: 40px;
  /* background-color: white; */
  border-radius: 30px;
  display: flex;
}
div.briefing::before {
  content: '2019年度 TELSTAR説明会';
  position: absolute;
  text-align: center;
  left: calc(50% - 150px);
  margin-top: -10px;
  width: 300px;
  height: 20px;
  font-size: 20px;
  font-weight: bold;
}
div.kanto_briefing p,div.kansai_briefing p {
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 3px;
}
div.kanto_briefing {
  width: 45%;
  height: 100%;
  margin: auto;
  background-color: white;
  border-radius: 30px;
}
div.kansai_briefing {
  width: 45%;
  height: 100%;
  margin: auto;
  background-color: white;
  border-radius: 30px;
}
h4 {
  margin-top: 35px;
}
p {
  font-size: 13px;
  text-align: center;
}
p.title {
  font-size: 20px;
  font-weight: bold;
  /* text-align: center; */
}
a {
  font-size: 13px;
  text-align: left;
}
img.questionnaire {
  width: 110px;
  height: 30px;
  /* margin-top: 0; */
}
</style>
