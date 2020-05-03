import Mock from "mockjs";
import homeApi from "./home";
import userApi from "./user";
import permissionApi from "./permission";
// 请求延时,模拟请求耗时
Mock.setup({
  timeout: "200-600"
});

// home页拦截
Mock.mock(/\/home\/getStatisticalData/, "get", homeApi.getStatisticalData);

// 用户相关
Mock.mock(/\/user\/getUser/, "get", userApi.getUserList);
Mock.mock(/\/user\/del/, "get", userApi.deleteUser);
Mock.mock(/\/user\/batchremove/, "get", userApi.batchremove);
Mock.mock(/\/user\/add/, "post", userApi.createUser);
Mock.mock(/\/user\/edit/, "post", userApi.updateUser);
Mock.mock(/\/home\/getData/, "get", homeApi.getStatisticalData);

// 权限相关
Mock.mock(/\/permission\/getMenu/, "post", permissionApi.getMenu);