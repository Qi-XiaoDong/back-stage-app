# vue 管理后台

## 清除原始项目结构

>删除views components app.vue router 中的原有代码结构

## 注入less全局样式

>vue add style-resources-loader

```js
 pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "src/assets/less/_themeStyle.less")
      ]
    }
  }
```

### 遇到的问题

- 在less文件中变量声明结束后使用时表示为undefined

  - 导致原因: 变量后没有加分号``` ; ```

## 引入elementui库

> 按需引入

- 顶部导航菜单和左侧导航联动

- 使用vuex 记录

  - isCollapse: 左侧菜单是否展开，默认展开
  - tagsArr: 记录要展示的tag标签
  - menuCurrent: 当前所展示的页面路由

- 构建页面组件,联通公共组件

