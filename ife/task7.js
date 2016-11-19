var add = document.getElementById("add");
var sortN = document.getElementById("sort");
var inputNum = new Array();
var container = document.getElementById("contain");
inputNum = [3,5,1,2,5,2,3];
var draw = function (array) {
  var inputNum = array;
  container.innerHTML = "";
  for(var i = 0; i<inputNum.length;i++)
  {
    container.innerHTML +="<div class = \"son\" style=\"background-color: red \;height:"+ inputNum[i]*4.3+"px;\"><\/div>"
  }
  console.log(inputNum);
};

add.addEventListener('click',function () {
  var getNum = document.getElementById("inputNum").value;
  getNum = Number(getNum);
  if(getNum>100){
    console.log("check num!")
  }
  else{
    inputNum.push(getNum);
    draw(inputNum);
  }
},false);

sortN.addEventListener('click',function () {
  var time =500;
  for(var i = 0;i<inputNum.length;i++){
    for(var j = i+1;j<inputNum.length;j++){
      if(inputNum[i]>inputNum[j])
      {
        inputNum[i] = inputNum[i]+inputNum[j];
        inputNum[j] = inputNum[i]-inputNum[j];
        inputNum[i] = inputNum[i]-inputNum[j];
        (function (array) {
          var newArray = array.concat("");
          return setTimeout(function(){draw(newArray)},time);

        })(inputNum);
        time+=500;
      }
    }
    console.log(time);
  }

//   解决方法 法1 在定时器 中加入if（） 当 i > length 后 结束定时器 。
  // k =0,l=1;
  //
  //   var time1 = setInterval(function () {
  //     if (k<inputNum.length) {
  //       var time2 = setInterval(function () {
  //         if(l<inputNum.length){
  //           if (inputNum[k] > inputNum[l]) {
  //             inputNum[k] = inputNum[k] + inputNum[l];
  //             inputNum[l] = inputNum[k] - inputNum[l];
  //             inputNum[k] = inputNum[k] - inputNum[l];
  //             draw(inputNum);
  //           }
  //           l++;
  //         }
  //         else {
  //           k++;l=k;
  //           clearInterval(time2);
  //         }
  //       }, 200);
  //     }
  //     else {
  //       clearInterval(time1);
  //     }
  //   },200)
  //

},false);




// setTimeout(draw,1000);
//   运行机制 是主线程空闲的时候 任务队列中的结果才能进入，所以 for 跑完后 setTimeout()的回调结果才 跑到主线程 导致 直接显示排序后结果

//           法2 让for 先去执行完 但是 我要记录下每次for 循环中的数字（其实就是 用匿名函数生成好多好多个作用域，等到for完后 这一个一个函数慢慢加入主线程
//              来执行）。