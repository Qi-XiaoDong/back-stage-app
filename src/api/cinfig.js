import axios from "axios";

// 创建axios实例

const instance = axios.create({});

// 请求拦截
instance.interceptors.request.use(
  config => {
    //拦截
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  reponse => {
    // 拦截
    return reponse;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
