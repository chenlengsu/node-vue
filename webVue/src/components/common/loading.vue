<template>
  <div class="loading">
    <img src="../../assets/loading.gif" alt="" />
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style scoped>
.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.loading img {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
}
</style>
