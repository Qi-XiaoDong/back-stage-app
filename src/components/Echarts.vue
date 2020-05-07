<template>
  <!-- 存放图表的容器 -->
  <div style="height: 100%" ref="echart">
    echart
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    // 图表要渲染的信息
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: []
        };
      }
    },
    // 是否带坐标轴
    isAxisChart: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption;
    },
    // 获取侧边栏是否展开
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    }
  },
  watch: {
    //深度监听数据变化
    chartData: {
      handler: function() {
        this.initChart();
      },
      deep: true
    },
    // 侧边栏变化，执行resizeChart
    isCollapse() {
      setTimeout(() => {
        this.resizeChart();
      }, 300);
    }
  },
  data() {
    return {
      echart: null,
      //关于坐标轴的配置
      axisOption: {
        legend: {
          textStyle: {
            color: "#333"
          }
        },
        grid: {
          left: "20%"
        },
        tooltip: {
          trigger: "axis"
        },
        //x轴
        xAxis: {
          type: "category",
          data: [],
          axisLine: {
            lineStyle: {
              color: "#17b3a3"
            }
          },
          axisLabel: {
            color: "#333"
          }
        },
        // y轴
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3"
              }
            }
          }
        ],
        color: [
          "#2ec7c9",
          "#b6a2de",
          "#5ab1ef",
          "#ffb980",
          "#d87a80",
          "#8d98b3",
          "#e5cf0d",
          "#97b552",
          "#95706d",
          "#dc69aa",
          "#07a2a4",
          "#9a7fd1",
          "#588dd5",
          "#f5994e",
          "#c05050",
          "#59678c",
          "#c9ab00",
          "#7eb00a",
          "#6f5553",
          "#c14089"
        ],
        series: []
      },
      normalOption: {
        tooltip: {
          trigger: "item"
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf"
        ],
        series: []
      }
    };
  },
  methods: {
    initChart() {
      this.initChartData();
      // 检查是否有存放的容器
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    //初始化数据
    initChartData() {
      // 有坐标轴
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
      } else {
        // 无坐标轴
        this.normalOption.series = this.chartData.series;
      }
    },
    // 图表自适应屏幕
    resizeChart() {
      this.echart ? this.echart.resize() : "";
    }
  },
  // 监听屏幕大小变化
  mounted() {
    window.addEventListener("resize", this.resizeChart);
  },
  // 解除监听屏幕大小变化
  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  }
};
</script>
