<template>
  <div>
    <div class="one" />
    <div class="two" />
    <div class="three" />
  </div>
</template>

<script>
export default {
  name: 'BackgroundA'
}
</script>

<style scoped>
div.one {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 225px 0 225px 300px;
  border-color: transparent transparent transparent #c9c9c9;
  position: absolute;
  top: calc(100% + 100px);
  z-index: -1;
}
div.two {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 150px 0 150px 200px;
  border-color: transparent transparent transparent #c9c9c9;
  position: absolute;
  top: calc(250% - 50px);
  z-index: -1;
}
div.three {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 200px 250px 200px 0;
  border-color: transparent #c9c9c9 transparent transparent;
  position: absolute;
  top: calc(200% - 150px);
  right: 0;
  z-index: -1;
}
</style>
