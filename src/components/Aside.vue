<template>
  <div class="aside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#66bcff"
      text-color="#000"
      active-text-color="#fff"
      :collapse="collapse"
    >
      <!-- 有子项 -->
      <el-submenu
        v-for="hasChildItem in hasChild"
        :key="hasChildItem.label"
        :index="hasChildItem.label"
      >
        <template slot="title">
          <i class="el-icon-"></i>
          <span>{{ hasChildItem.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="item in hasChildItem.children"
            :key="item.path"
            :index="item.path"
          >
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{ item.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
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
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      asideMenu: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: "s-home"
        },
        {
          path: "/video",
          name: "video",
          label: "视频管理",
          icon: "video-camera"
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user"
        },
        {
          label: "其他",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面一",
              icon: "video-camera"
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面二",
              icon: "user"
            }
          ]
        }
      ]
    };
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
</style>
