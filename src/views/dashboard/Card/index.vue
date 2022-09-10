<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <Detail title="总销售额" count="￥ 126560">
              <template slot="charts">
                  <span>周同比&nbsp;&nbsp;56.67%<svg t="1662536716847" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2520" width="16" height="16"><path d="M960 704L512 256l-448 448z" fill="#1afa29" p-id="2521"></path></svg></span>
                  &nbsp;&nbsp;
                  <span>日同比&nbsp;&nbsp;19.96%<svg t="1662536809401" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3520" width="16" height="16"><path d="M64 320l448 448 448-448z" fill="#d81e06" p-id="3521"></path></svg></span>
              </template>
              <template slot="footer">
                  <span>日销售额￥ 12423</span>
              </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="访问量" count="88460">
              <template slot="charts">
                  <LineChart></LineChart>
              </template>
            <template slot="footer">
                  <span>日访问量  1234</span>
              </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="支付笔数" count="88460">
              <template slot="charts">
                  <BarCharts></BarCharts>
              </template>
            <template slot="footer">
                  <span>转化率64%</span>
              </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="运营活动效果" count="78%">
            <template slot="charts">
                <ProgressCharts></ProgressCharts>
            </template>
            <template slot="footer">
                  <span>周同比&nbsp;&nbsp;56.67%<svg t="1662536716847" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2520" width="16" height="16"><path d="M960 704L512 256l-448 448z" fill="#1afa29" p-id="2521"></path></svg></span>
                  &nbsp;&nbsp;
                  <span>日同比&nbsp;&nbsp;19.96%<svg t="1662536809401" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3520" width="16" height="16"><path d="M64 320l448 448 448-448z" fill="#d81e06" p-id="3521"></path></svg></span>
              </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import Detail from "./Detail";
import LineChart from "./lineChart/index.vue";
import BarCharts from "./barCharts/index.vue";
import ProgressCharts from "./progressCharts/index.vue";
export default {
  components: {
    Detail,
    LineChart,
    BarCharts,
    ProgressCharts
},
};
</script>

<style lang="scss" scoped>
</style>