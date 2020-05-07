<template>
  <div class="aside">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#66bcff"
      text-color="#000"
      active-text-color="#fff"
      :collapse="collapse"
    >
      <router-link to="/home" tag="h3" class="systemtitle" v-show="collapse"
        >后台</router-link
      >
      <router-link to="/home" tag="h3" class="systemtitle" v-show="!collapse"
        >后台管理系统</router-link
      >
      <!-- 没有子项 -->
      <el-menu-item
        v-for="noChildItem in noChild"
        :key="noChildItem.path"
        :index="noChildItem.path"
        @click="clickMenu(noChildItem)"
      >
        <i :class="'el-icon-' + noChildItem.icon"></i>
        <span slot="title">{{ noChildItem.label }}</span>
      </el-menu-item>
      <!-- 有子项 -->
      <el-submenu
        v-for="hasChildItem in hasChild"
        :key="hasChildItem.label"
        :index="hasChildItem.label"
      >
        <template slot="title">
          <i :class="'el-icon-' + hasChildItem.icon"></i>
          <span>{{ hasChildItem.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="item in hasChildItem.children"
            :key="item.path"
            :index="item.path"
            @click="clickMenu(item)"
          >
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{ item.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    /**
     * 点击侧边栏目录
     */
    clickMenu(item) {
      this.$store.commit("tab/selectMemuAndAddTag", item);
      // 跳转到相关路由
      this.$router.push(item.path);
    }
  },
  computed: {
    noChild() {
      return this.asideMenu.filter(ele => !ele.children);
    },
    hasChild() {
      return this.asideMenu.filter(ele => ele.children);
    },
    /**
     * 得到要侧边栏信息
     */
    asideMenu() {
      console.log(this.$store.state.tab.menuAll);
      return this.$store.state.tab.menuAll;
    },
    /**
     * 侧边栏是否展开
     */
    ...mapState("tab", {
      collapse: state => state.isCollapse
    })
  }
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.aside {
  height: 100%;
  ul {
    border: none;
  }
}
.el-menu-vertical-demo {
  height: 100%;
}
.systemtitle {
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}
</style>
