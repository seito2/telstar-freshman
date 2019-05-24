<template>
  <div class="number-box">
    <p class="number">{{ number }}</p>
    <p class="title">{{ title_one }}<br>{{ title_two }}</p>
  </div>
</template>

<script>
export default {
  props: ["title_one", "number", "title_two"],
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');

div.number-box {
  height: 60px;
  margin-left: 20px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-template-rows: 60px;
}
p {
  display: block;
  text-align: left;
  font-family: 'Noto Sans JP', sans-serif;
}
p.number {
  position: relative;
  margin: 0;
  font-size: 50px;
  color: #faef54;
  line-height: 60px;
}
p.number::before {
  position: absolute;
  content: "";
  background: rgb(250, 239, 84);
  width: 4px;
  height: 100%;
  left: 70px;
}
p {
  text-align: left;
}
p.title {
  margin-left: 20px;
  margin-right: 0;
  margin-bottom: 0;
  margin-top: 0px;
  font-size: 22px;
  color: rgb(250, 239, 84);
}
</style>
