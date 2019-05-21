<template>
  <div>
    <div>
      <h2>{{ h2 }}</h2>
      <p>{{ p }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["h2", "p"]
}
</script>

<style scoped>
div {
  width: 90%;
  margin: auto;
  /* margin-bottom: 20px; */
  height: 130px;
}
h2, p {
  text-align: left;
  word-wrap: break-word;
  margin-bottom: 10px;
}
h2 {
  font-size: 24px;
}
h2::before {
  position: absolute;
  content: "";
  background: #c9c9c9;
  width: 80%;
  height: 4px;
  margin-top: 34px;
  border-radius: 8px;
}
p {
  margin-top: 10px;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
}
</style>
