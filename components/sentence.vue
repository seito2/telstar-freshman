<template>
  <div class="main-content">
    <h2>{{ h2 }}</h2>
    <p>{{ p }}</p>
  </div>
</template>

<script>
export default {
  props: ["h2", "p"]
}
</script>

<style scoped>
div.main-content p {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 13px;
}
</style>
