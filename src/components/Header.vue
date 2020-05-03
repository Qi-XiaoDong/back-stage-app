<template>
  <header class="header">
    <!-- 面包屑导航 -->
    <div class="nav">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-button
          type="primary"
          icon="el-icon-menu"
          size="mini"
          @click="showMenu"
        >
        </el-button>
      </el-radio-group>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 用户登录 -->
    <div class="header_login">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img :src="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      userImg: require("@/assets/images/user.png"),
      showLabel: true,
      isCollapse: true
    };
  },
  methods: {
    /**
     * 切换目录展开收起
     */
    showMenu() {
      this.$store.commit("tab/isCollapseChange");
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  .nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
  .header_login {
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}
</style>

<style lang="less">
.el-breadcrumb__inner.is-link {
  color: #fff;
  font-size: 16px;
}
</style>
