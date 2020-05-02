<template>
  <div class="aside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#66bcff"
      text-color="#000"
      active-text-color="#fff"
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
        @click="clickMenu(noChildItem.label)"
      >
        <i :class="'el-icon-' + noChildItem.icon"></i>
        <span slot="title">{{ noChildItem.label }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      asideMenu: [
        {
          path: "/",
          label: "首页",
          icon: "s-home"
        },
        {
          path: "/video",
          label: "视频管理",
          icon: "video-camera"
        },
        {
          path: "/user",
          label: "用户管理",
          icon: "user"
        },
        {
          label: "其他",
          children: [
            {
              path: "/page1",
              label: "页面一",
              icon: "video-camera"
            },
            {
              path: "/page2",
              label: "页面二",
              icon: "user"
            }
          ]
        }
      ]
    };
  },
  methods: {
    clickMenu(item) {
      console.log(this.$store);
      this.$store.commit('selectMemu', item);
    }
  },
  computed: {
    noChild() {
      return this.asideMenu.filter(ele => !ele.children);
    },
    hasChild() {
      return this.asideMenu.filter(ele => ele.children);
    }
  }
};
</script>

<style lang="less" scoped>
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
