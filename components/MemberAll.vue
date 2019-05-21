<template>
  <div class="mother-div">
    <div  class="member-list">
      <img v-for="(item, index) in img_src" :key="(item, index)" :src="imagePath(item)" @click="changeArticle(index)" :class="{ active: (isActive === index) }">
    </div>   
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isActive: 0,
      img_src: 
      ['hirai_seito','kakurai_hatune', 'miyamoto_kanta','hirosaki', 'yasui_asuka',
       'yagi', 'fukuyama_hiroki', 'moriyama_kai', 'shintomi_ayaka', 'nishikawa_shungo', 'taneda_kyoko', 'shoji_kosuke', 'chigusa', 'kamimura_arata',
       'nishida_nao']
    }
  },
  mounted: function () {
    var min = 0;
    var max = this.img_src.length - 1
    var a = Math.floor( Math.random() * (max + 1 - min) ) + min
    this.changeArticle(a)
  },
  methods: {
    changeArticle: function (index) {
      this.$emit('EVENT_CHANGE_ARTICLE', index)
      this.isActive = index
    },
    imagePath: function (path) {
      return require("../img/member/" + path + ".jpg")
    }
  }
}
</script>

<style scoped>
img {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 0;
  -webkit-filter: grayscale(80%);
     -moz-filter: grayscale(80%);
      -ms-filter: grayscale(80%);
       -o-filter: grayscale(80%);
          filter: grayscale(80%);
}
img.active {
  -webkit-filter: grayscale(0);
     -moz-filter: grayscale(0);
      -ms-filter: grayscale(0);
       -o-filter: grayscale(0);
          filter: grayscale(0);
          transform: scale(1.2);
          box-shadow: 0 0 8px gray;
}
div.mother-div {
  width: 100%;
  height: 150px;
  /* position: absolute; */
  overflow: scroll;
}
div.member-list {
  width: 150%;
  height: 150px;
}
</style>
