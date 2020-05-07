/**
 *登录数据请求
 *****************************/
import axios from "./cinfig";
export default {
  login(data) {
    return axios.post("/login", {
      data: {
        ...data
      }
    });
  }
};
