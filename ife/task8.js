/**
 * Created by huangpeisong on 2016/11/19.
 */
input = document.getElementById('firstInput');
container = document.getElementById("contain");

input.addEventListener("keypress",function (event) {
  var language = document.getElementsByClassName("langType");
  var inputlanguage=input.value.trim();
  if( event.keyCode == 13 || event.keyCode == 65 ||event.keyCode ==32  ){
   for(var i = 0 ;i<language.length;i++)
   {
     if(language[i].innerHTML==inputlanguage)
      {
        break;
      }
   }
    if(i==language.length){
      container.innerHTML +="<div class =\"langType\" onmouseover=\"over(this)\" onmouseout=\"out(this)\" onclick=\"del(this)\">"+inputlanguage+"<\/div>"+" ";
    }
    input.value='';
  }
},false);

//对象是引用传递 所以下面的方法不行；
// for(var i=0;i<language.length;i++)
// {
//   (function ( num ) {
//     return (function () {
//       language[num].addEventListener('mouseover',function () {
//         console.log(language[num]);
//         language[num].style.backgroundColor='red';
//         language[num].innerHTML = "点击删除"+language[num].innerHTML;
//       },false);
//       language[num].addEventListener('mouseleave',function () {
//         language[num].style.backgroundColor='cornflowerblue';
//         language[num].innerHTML = language[num].innerHTML.slice(4);
//       },false);
//       language[num].addEventListener('click',function () {
//         language[num].remove();
//       },false)
//     })();
//   })(i)
//
// }

function over(_this) {
  var that  = _this;
  that.style.backgroundColor='red';
  that.innerHTML = "点击删除"+that.innerHTML;
}
function out(_this) {
  var that = _this;
  that.style.backgroundColor='cornflowerblue';
  that.innerHTML =that.innerHTML.slice(4);
}
function del(_this) {
  var that = _this;
  that.remove();
}

var btn = document.getElementById('btn');
btn.addEventListener('click',function () {
  var hobbyInput = document.getElementById("hobbyInput");
  var hobby = hobbyInput.value.match(/[\u4e00-\u9fa5]+/g);
  var hobbdyHad = document.getElementsByClassName("hobbyType");
  for(var i =0;i<hobby.length;i++){
    for(var j =0;j<hobbdyHad.length;j++){
      if(hobby[i].trim()==hobbdyHad[j].innerHTML)
      {
        break;
      }
    }
    if(j==hobbdyHad.length){
      hobbyContain.innerHTML += "<div class =\"hobbyType\">"+hobby[i].trim()+"<\/div>"+" ";
    }
  }
  while(document.getElementsByClassName("hobbyType").length>=10){
    document.getElementsByClassName("hobbyType")[0].remove();
  }
},false);

// mouseover