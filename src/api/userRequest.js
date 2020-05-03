/**
 * 用户数据请求
 *****************************/
import axios from "./cinfig";
export default {
  /**
   * 查询用户
   */
  getUser(params) {
    return axios.get("/api/user/getUser", {
      params: {
        ...params
      }
    });
  }
};
