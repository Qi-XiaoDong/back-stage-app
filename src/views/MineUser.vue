<template>
  <div class="manage">
    <!-- 表单 -->
    <div class="manage_form">
      <el-button type="primary">+ 新增</el-button>
      <mine-user-form inline :form="searchForm" :formLabel="formLabel">
        <el-button type="primary">查询</el-button>
      </mine-user-form>
    </div>
    <!-- 表格 -->
    <div class="mange_table">
      <mine-user-table
        :tableLabel="tableLabel"
        :tableData="tableData"
        :config="config"
      ></mine-user-table>
    </div>
  </div>
</template>
<script>
import MineUserForm from "@/components/MineUserForm.vue";
import MineUserTable from "@/components/MineUserTable.vue";
import axios from "@/api/userRequest";
export default {
  data() {
    return {
      // 表单对象
      searchForm: {
        keyword: ""
      },
      // 表单项
      formLabel: [
        {
          mode: "keyword", // 绑定的数据
          label: ""
        }
      ],
      operateType: "add",
      operateForm: {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: ""
      },
      // 表格数据
      tableData: [],
      // 用来控制表格的列数
      tableLabel: [
        {
          prop: "name",
          label: "姓名"
        },
        {
          prop: "age",
          label: "年龄"
        },
        {
          prop: "sexLabel",
          label: "性别"
        },
        {
          prop: "birth",
          label: "出生日期",
          width: 200
        },
        {
          prop: "addr",
          label: "地址",
          width: 320
        }
      ],
      // 表格的其他配置
      config: {
        page: 1,
        total: 30,
        loading: false
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /**
     * 获取用户列表
     * name 有值代表时按关键字查询
     */
    getList(name = "") {
      // 正在加载
      this.config.loading = true;
      // 按关键字搜索时，页码需要设置为1，才能正确返回数据，因为数据是从第一页开始返回的
      name ? (this.config.page = 1) : "";
      axios.getUser({ page: this.config.page, name }).then(res => {
        this.tableData = res.data.list.map(item => {
          item.sexLabel = item.sex === 0 ? "女" : "男";
          return item;
        });
        console.log(res);
        // 获得的总条数,方便设置页码
        this.config.total = res.data.count;
        // this.config.loading = false;
      });
    },
    /**
     * 添加用户
     */
    addUser() {
      this.operateForm = {};
      this.operateType = "add";
      this.isShow = true;
    },
    /**
     * 编辑用户
     */
    editUser(row) {
      this.operateType = "edit";
      this.isShow = true;
      this.operateForm = row;
    }
  },
  components: {
    MineUserForm,
    MineUserTable
  }
};
</script>

<style lang="less" scoped>
@import "../assets/less/mineUser.less";
</style>
