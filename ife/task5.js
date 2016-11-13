/* 数据格式演示
 var aqiSourceData = {
 "北京": {
 "2016-01-01": 10,
 "2016-01-02": 10,
 "2016-01-03": 10,
 "2016-01-04": 10
 }
 };
 */
var ctSelect = document.getElementById("city-select");
var tmSelect= document.getElementById("form-gra-time");
var chart=document.getElementsByClassName("aqi-chart-wrap")[0];
// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = '';
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: "北京",
  nowGraTime: "day"
};

/**
 * 渲染图表
 */
function renderChart() {
  var text = "";
  var max = 0;
  for (var data2 in chartData)
  {

    if(chartData[data2]>max){max = chartData[data2];}
  }
  for( var date in chartData)
  {
    var title = date;
    var number = chartData[date];
    var color = '#' + ('000000' + Math.floor(Math.random() * (0xFFFFFF - 1 + 1) + 1).toString(16)).slice(-6);
    text+="<div title=\""+title+"\"style=\"height:"+ 600*number/max+"px; background-color: "+color+"\" ><\/div>";
    chart.innerHTML = text;

  }


}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(event) {
  // 确定是否选项发生了变化
  event.stopPropagation();
  if(
    pageState.nowGraTime != this.value) {
    pageState.nowGraTime = this.value;
    console.log(this.value);
    initAqiChartData();
    // 设置对应数据
    renderChart();
    // 调用图表渲染函数
  }
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange(event) {
  // 确定是否选项发生了变化
  event.stopPropagation();
  if(pageState.nowSelectCity!=ctSelect.value)
  {
    pageState.nowSelectCity=ctSelect.value;
    initAqiChartData();
    // 设置对应数据
    renderChart();
    // 调用图表渲染函数
  }

}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {

  var time = tmSelect.getElementsByTagName("input");
  for (var i = 0;i<3;i++)
  {
    time[i].addEventListener('click',graTimeChange);
  }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  for ( var city in aqiSourceData)
  {
    var op=document.createElement("option");
    op.innerHTML=city;
    ctSelect.appendChild(op)
  }
  // 给select设置事件，当选项发生变化时调用函数citySelectChange

  ctSelect.addEventListener('change',citySelectChange);


}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
  var chooseCity= pageState.nowSelectCity;
  var chooseTime= pageState.nowGraTime;
  if (chooseTime == 'day')
  { chartData= {};chartData= aqiSourceData[chooseCity];}
  if (chooseTime == 'week')
  {
    chartData ={};
    var weekData = aqiSourceData[chooseCity];
    var weekFlag = 1;
    var week = 0;
    for (var key in weekData)
    {
      if(weekFlag%7==1)
      {
        week++;
        chartData[week] =weekData[key];
      }
      else{
        chartData[week] +=weekData[key];
      }
      weekFlag++;

    }
    console.log(chartData)
  }
  if (chooseTime == 'month')
  {
    chartData={};
    var monthData = aqiSourceData[chooseCity];
    var monthFlag;
    for (var  key in monthData)
    {
      if(monthFlag != key.slice(0,7))
      {
        monthFlag = key.slice(0,7);
        chartData[monthFlag]= monthData[key];
      }
      else{
        chartData[monthFlag] +=monthData[key];
      }
    }
    console.log(chartData)
  }


}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm();
  initCitySelector();
  initAqiChartData();
}

init();
