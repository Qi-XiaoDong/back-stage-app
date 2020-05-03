/**
 * 主页数据请求
 *****************************/
import axios from "./cinfig";
export default {
  getHomeData() {
    return axios.get("/home/getStatisticalData");
  }
};
