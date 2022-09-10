<template>
  <div class="echarts" ref="charts"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    let lineCharts = echarts.init(this.$refs.charts);
    lineCharts.setOption({
      xAxis: {
        // 隐藏x轴
        show: false,
        min: 0,
        max: 100
      },
      yAxis: {
        // 隐藏y轴
        show: false,
        type: "category",

      },
      series: [
        {
          type: "bar",
          data: [78],
          color: 'cyan',
          // 柱状图的宽度
          barWidth: 10,
          color: 'yellowgreen',
          // 背景颜色的设置
          showBackground: true,
          // 设置背景颜色
          backgroundStyle: {
            color: '#eee'
          },
          // 文本标签
          label: {
            show: true,
            // 改变文本内容
            formatter: '|',
            // 文本标签位置调试
            position: 'right'
          }
        },
      ],
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },

    });
  },
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>