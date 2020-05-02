<template>
  <div class="layout">
    <el-container class="layout_warp">
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <my-aside></my-aside>
      </el-aside>
      <el-container class="mine_worp">
        <!-- 头部 -->
        <el-header>
          <my-header></my-header>
        </el-header>
        <!-- 内容区域 -->
        <el-main>
          <!-- <router-view></router-view> -->
          mine
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "@/components/Header.vue";
import MyAside from "@/components/Aside.vue";
export default {
  components: {
    MyHeader,
    MyAside
  }
};
</script>
<style lang="less" scoped>
.layout {
  position: fixed;
  height: 100%;
  width: 100%;
  overflow: auto;
}
.layout_warp {
  height: 100%;
  width: 100%;
}
.mine_worp {
  min-width: 1000px;
}
.el-header {
  background-color: #000;
  color: #fff;
}
.el-aside {
  overflow-y: auto;
  overflow-x: hidden;
}
.el-main {
  overflow: auto;
}
</style>
