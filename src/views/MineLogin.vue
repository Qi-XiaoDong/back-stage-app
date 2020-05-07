<template>
  <div class="login_worp">
    <div class="login">
      <mine-user-form :form="searchForm" :formLabel="formLabel">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="warning" @click="cancelLogin">取消登录</el-button>
      </mine-user-form>
    </div>
  </div>
</template>
<script>
import MineUserForm from "@/components/MineUserForm";
import axios from "@/api/loginRequest";
export default {
  data() {
    return {
      searchForm: {
        account: "",
        pwd: ""
      },
      // 表单项
      formLabel: [
        {
          model: "account", // 绑定的数据
          label: "账号"
        },
        {
          model: "pwd", // 绑定的数据
          label: "密码",
          inputType: "password"
        }
      ]
    };
  },
  methods: {
    login() {
      // 登录
      console.log("登录");
      axios
        .login({
          username: this.searchForm.account,
          password: this.searchForm.pwd
        })
        .then(res => {
          res = res.data;
          if (res.code === 20000) {
            /**
             * 清除所有路由(并且在cookie删除)
             * 在退出登录时执行
             */
            this.$store.commit("tab/clearMenu");
            /**
             * 设置所有路由(并且添加在cookie中)
             * 在登录时执行
             */
            this.$store.commit("tab/setMenu", res.data.asideMenu);
            /**
             * 设置token
             */
            this.$store.commit("user/setToken", res.data.token);
            /**
             * 设置用户权限
             */
            console.log(res.data.name);
            this.$store.commit("user/setAccess", res.data.name);
            /**
             * 从cookie中读取路由添加在 menuAll
             */
            this.$store.commit("tab/addMenu", this.$router);
            /**
             * 跳转到首页
             */
            this.$router.push({ name: "home" });
          } else {
            this.$message.warning(res.data.message);
          }
        });
    },
    cancelLogin() {
      // 取消登录
      console.log("取消登录");
    }
  },
  components: {
    MineUserForm
  }
};
</script>

<style lang="less">
.login_worp {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login {
    height: 50%;
  }
}
</style>
