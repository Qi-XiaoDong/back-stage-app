<template>
  <div class="tag_warp">
    <el-tag
      v-for="tag in tags"
      :key="tag.label"
      :closable="tag.label === '首页' ? false : true"
      @close="closeTag(tag)"
      @click="routerChange(tag)"
      :effect="tag.label === menuCurrent.label ? 'dark' : 'plain'"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapState("tab", {
      tags: state => state.tagsArr,
      menuCurrent: state => state.menuCurrent
    })
  },
  methods: {
    /**
     * 关闭标签
     */
    closeTag(tag) {
      // 关闭标签
      this.$store.commit("tab/deleteTag", tag);
      // 展示标签页最后一个路由
      let endTag = this.tags[this.tags.length - 1];
      this.$store.commit("tab/selectMemuAndAddTag", endTag);
      this.$router.push(endTag.path);
    },
    /**
     * 点击标签，跳转路由
     */
    routerChange(tag) {
      this.$router.push(tag.path);
    }
  }
};
</script>

<style lang="less" scoped>
.tag_warp {
  margin-bottom: 10px;
  .el-tag {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
