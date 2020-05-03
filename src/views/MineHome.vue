<template>
  <div class="minehome">
    <el-row :gutter="20">
      <!-- 左侧 -->
      <el-col :span="9" class="minehome_user">
        <!-- 上边 -->
        <el-card shadow="hover" class="top">
          <!-- 用户信息 -->
          <div class="user">
            <img :src="userImg" alt="" />
            <div class="user-info">
              <p class="user-name">Nick</p>
              <p class="user-acces">超级管理员</p>
            </div>
          </div>
          <!-- 登录信息 -->
          <div class="login-info">
            <p>上次登录时间<span>2020-01-24</span></p>
            <p>上次登录地点<span>陕西-宝鸡</span></p>
          </div>
        </el-card>
        <!-- 下边 -->
        <el-card shadow="hover" class="bottom">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column
              show-overflow-tooltip
              v-for="(tableItem, key) in tableLabel"
              :prop="key"
              :key="tableItem"
              :label="tableItem"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="15" class="minehome_detail">
        <!-- 数字区域 -->
        <div class="num">
          <el-card
            shadow="hover"
            v-for="item in countData"
            :key="item.name"
            class="num-item"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              class="icon"
              :class="`el-icon-${item.icon}`"
              :style="{ backgroundColor: item.color }"
            ></i>
            <div class="detail">
              <div class="detail_num">￥{{ item.value }}</div>
              <div class="detail_text">{{ item.name }}</div>
            </div>
          </el-card>
        </div>
        <!-- 折线图 -->
        <div>
          <el-card shadow="hover" class="line-chart">
            折线图
          </el-card>
        </div>
        <!-- 图表 -->
        <div class="chart">
          <el-card shadow="hover" class="chart-item">
            柱形图
          </el-card>
          <el-card shadow="hover" class="chart-item">
            图表
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "@/api/homeRequest";
export default {
  data() {
    return {
      userImg: require("../assets/images/user.png"),
      countData: [
        {
          name: "今日支付",
          value: 12346,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "今日未支付订单",
          value: 14,
          icon: "s-goods",
          color: "#7dfcd5"
        },
        {
          name: "本月支付订单",
          value: 123446,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "本月收藏订单",
          value: 2110,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "本月未支付订单",
          value: 123,
          icon: "s-goods",
          color: "#7dfcd5"
        }
      ],
      tableData: [],
      tableLabel: {
        name: "品类",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买"
      }
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    /**请求home数据 */
    getTableData() {
      axios.getHomeData().then(res => {
        this.tableData = res.data.data.tableData;
        console.log(this.tableData);
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/less/mineHome.less";
</style>
