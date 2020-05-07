<template>
  <header class="header">
    <!-- 点击展开收缩菜单栏 -->
    <div class="nav">
      <el-radio-group v-model="isCollapse">
        <el-button
          type="primary"
          icon="el-icon-menu"
          size="mini"
          @click="showMenu"
        >
        </el-button>
      </el-radio-group>
    </div>
    <!-- 点击展开收缩菜单栏结束 -->
    <!-- 用户登录 -->
    <div class="header_login">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img :src="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <template v-if="token">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="logOut">退出登录</el-dropdown-item>
          </template>
          <!-- <el-dropdown-item v-else>登录</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 用户登录 -->
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      userImg: require("@/assets/images/user.png"),
      showLabel: true,
      isCollapse: true // 侧边栏是否显示
    };
  },
  methods: {
    /**
     * 切换目录展开收起
     */
    showMenu() {
      this.$store.commit("tab/isCollapseChange");
    },
    logOut() {
      this.$store.commit("user/clearToken");
      this.$store.commit("user/clearAccess");
      this.$store.commit("tab/clearMenu");
      this.$store.commit("tab/clearTag");

      location.reload();
    }
  },
  computed: {
    token() {
      // console.log(this.$store.state.user)
      return this.$store.state.user.token;
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
    align-items: center;
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
.el-dropdown-menu__item {
  text-align: center;
}
</style>
