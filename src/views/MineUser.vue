<template>
  <div class="manage">
    <!-- 弹出框 -->
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <mine-user-form
        :form="operateForm"
        :formLabel="operateFormLabel"
        ref="form"
      ></mine-user-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 弹出框结束 -->

    <!-- 顶部表单 -->
    <div class="manage_form">
      <el-button type="primary" @click="addUser">+ 新增</el-button>
      <mine-user-form inline :form="searchForm" :formLabel="formLabel">
        <el-button type="primary" @click="searchUser">查询</el-button>
      </mine-user-form>
    </div>

    <!-- 表格 -->
    <div class="mange_table">
      <mine-user-table
        :tableLabel="tableLabel"
        :tableData="tableData"
        :config="config"
        @changePage="changePage"
        @edit="editUser"
        @del="delUser"
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
          model: "keyword", // 绑定的数据
          label: ""
        }
      ],
      // 弹出框是否显示
      isShow: false,
      // 操作类型
      operateType: "add",
      operateForm: {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: ""
      },
      operateFormLabel: [
        {
          model: "name",
          label: "姓名"
        },
        {
          model: "age",
          label: "年龄"
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            {
              label: "男",
              value: 1
            },
            {
              label: "女",
              value: 0
            }
          ]
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date"
        },
        {
          model: "addr",
          label: "地址"
        }
      ],
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
        page: 1, // 当前页
        total: 30,
        loading: false // 表格加载状态
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
        // 获得的总条数,方便设置页码
        this.config.total = res.data.count;
        this.config.loading = false;
      });
    },
    /**
     *查询用户 name
     */
    searchUser() {
      this.getList(this.searchForm.keyword);
    },
    /**
     * 点击添加用户按钮
     */
    addUser() {
      this.operateForm = {};
      this.operateType = "add";
      this.isShow = true;
    },
    /**
     * 点击编辑用户按钮
     */
    editUser(row) {
      this.operateType = "edit";
      this.isShow = true;
      this.operateForm = row;
    },
    /**
     * 编辑或者添加用户
     */
    confirm() {
      //  编辑
      if (this.operateType === "edit") {
        axios.updateUser(this.operateForm).then(() => {
          this.isShow = false;
          this.getList();
        });
      }
      // 添加
      else {
        axios.addUser(this.operateForm).then(() => {
          this.isShow = false;
          this.getList();
        });
      }
    },
    /**
     * 删除用户
     */
    delUser(row) {
      this.$confirm("此操作将该用户删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const id = row.id;
          axios.deleteUser({ id }).then(() => {
            this.$message({
              type: "success",
              message: "删除成功"
            });
            this.getList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    /**
     *页码改变
     */
    changePage() {
      this.getList();
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
