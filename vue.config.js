const path = require("path");
module.exports = {
  // 配置项⽬启动端⼝及⾃动打开浏览器
  devServer: {
    port: 3333,
    open: true
  },
  // 全局注入less样式
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/less/_themeStyle.less")]
    }
  }
};
