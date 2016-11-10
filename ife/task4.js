/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */

var aqiData = {};
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
  var city = document.getElementById("aqi-city-input").value.trim();
  var aqi = document.getElementById("aqi-value-input").value.trim();
  aqiData["\""+city+"\""]= aqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

  var content;
  content = "<tr><td>城市</td><td>空气质量</td><td>操作</td>";
  for(var city in aqiData)
  {
    if(city.substr(1,city.length-2))
    content += "<tr><td>"+city.substr(1,city.length-2)+"</td>"+"<td>"+aqiData[city]+"</td>"+"<td><button data-delcity = \""+city.substr(1,city.length-2)+"\">删除</button></td>";
  }
  try{
    document.getElementById ("aqi-table").innerHTML =city.substr(1,city.length-2) ?   content: "";
  }
  catch (e){
    document.getElementById ("aqi-table").innerHTML="";
  }


}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  var city2 = "\""+city+"\"";
  delete aqiData[city2];
  console.log(city2);
  renderAqiList();
}

function init() {

  document.getElementById("add-btn").addEventListener("click", addBtnHandle)
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  document.getElementById("aqi-table").addEventListener("click", function(event){
    if(event.target.nodeName.toLowerCase() === 'button')
    {
      delBtnHandle.call(null, event.target.dataset.delcity);
    }
  })

}

init();


