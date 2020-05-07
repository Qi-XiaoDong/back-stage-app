import Mock from "mockjs";
export default {
  login: config => {
    // 得到账号密码
    const { username, password } = JSON.parse(config.body).data;
    console.log(JSON.parse(config.body).data);
    // 先判断用户是否存在
    if (username === "admin" || username === "wp") {
      // 判断账号和密码是否对应
      if (username === "admin" && password === "123456") {
        return {
          code: 20000,
          data: {
            asideMenu: [
              {
                path: "home",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "MineHome"
              },
              {
                path: "video",
                name: "video",
                label: "视频管理",
                icon: "video-camera",
                url: "MineVideo"
              },
              {
                path: "user",
                name: "user",
                label: "用户管理",
                icon: "user",
                url: "MineUser"
              },
              {
                label: "其他",
                icon: "video-camera",
                children: [
                  {
                    path: "page1",
                    name: "page1",
                    label: "页面一",
                    icon: "video-camera",
                    url: "MineOtherPageOne"
                  },
                  {
                    path: "page2",
                    name: "page2",
                    label: "页面二",
                    icon: "user",
                    url: "MineOtherPageTwo"
                  }
                ]
              }
            ],
            token: Mock.Random.guid(),
            message: "获取成功",
            name: "超级管理员"
          }
        };
      } else if (username === "wp" && password === "123456") {
        return {
          code: 20000,
          data: {
            asideMenu: [
              {
                path: "home",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "MineHome"
              },
              {
                path: "video",
                name: "video",
                label: "视频管理",
                icon: "video-camera",
                url: "MineVideo"
              }
            ],
            token: Mock.Random.guid(),
            message: "获取成功",
            name: "普通用户"
          }
        };
      } else {
        return {
          code: -999,
          data: {
            message: "密码错误"
          }
        };
      }
    } else {
      return {
        code: -999,
        data: {
          message: "用户不存在"
        }
      };
    }
  }
};
