<template>
  <div id="app">
    <!-- 视图显示 -->
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less" scoped>
#app {
  min-width: 1190px;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.view {
  height: 100%;
}
</style>
