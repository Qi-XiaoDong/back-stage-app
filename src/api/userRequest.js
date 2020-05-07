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
  },
  /**
   * 增加用户
   * type : post
   */
  addUser(data) {
    return axios.post("/api/user/addUser", {
      data: {
        ...data
      }
    });
  },
  /**
   * 删除用户
   */
  deleteUser(params) {
    console.log(params);
    return axios.get("/api/user/delUser", {
      params: {
        ...params
      }
    });
  },
  /**
   * 批量删除
   */
  batchremove(params) {
    return axios.get("/api/user/batchremoveUser", {
      params: {
        ...params
      }
    });
  },
  /**
   * 修改
   * type: post
   */
  updateUser(data) {
    return axios.post("/api/user/updateUser", {
      data: {
        ...data
      }
    });
  }
};
