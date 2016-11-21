DLR = document.getElementById("DLR");
LDR = document.getElementById("LDR");
LRD = document.getElementById("LRD");
var grandpa = document.getElementsByClassName('grandpa')[0];
var father = document.getElementsByClassName('father');
var son = document.getElementsByClassName('son');
DLR.addEventListener('click',function () {
  var time =0;
  var order = new Array();
  function left(node) {
    if(!(node==null)){
      order.push(node);
      left(node.firstElementChild);
      left(node.lastElementChild);
    }
  }
  left(grandpa);

  for (var i =0;i<=order.length ;i++){
    time+=500;
    (function (time,i) {
      setTimeout(function () {

        try{
          order[i].style.backgroundColor='blue';
        }
        catch (e){
          order[i-1].style.backgroundColor='white';
        }
        try{
          order[i-1].style.backgroundColor='white';
        }
        catch(e) {
          console.log(e);
        }
      },time);
    })(time,i);
  }

},false);


LDR.addEventListener('click',function () {
  var time =0;
  var order = new Array();
  function left(node) {
    if(!(node==null)){
      left(node.firstElementChild);
      order.push(node);
      left(node.lastElementChild);
    }
  }
  left(grandpa);

  for (var i =0;i<=order.length ;i++){
    time+=500;
    (function (time,i) {
      setTimeout(function () {

        try{
          order[i].style.backgroundColor='blue';
        }
        catch (e){
          order[i-1].style.backgroundColor='white';
        }
        try{
          order[i-1].style.backgroundColor='white';
        }
        catch(e) {
          console.log(e);
        }
      },time);
    })(time,i);
  }

},false);


LRD.addEventListener('click',function () {
  var time =0;
  var order = new Array();
  function left(node) {
    if(!(node==null)){
      left(node.firstElementChild);
      left(node.lastElementChild);
      order.push(node);
    }
  }
  left(grandpa);

  for (var i =0;i<=order.length ;i++){
    time+=500;
    (function (time,i) {
      setTimeout(function () {

        try{
          order[i].style.backgroundColor='blue';
        }
        catch (e){
          order[i-1].style.backgroundColor='white';
        }
        try{
          order[i-1].style.backgroundColor='white';
        }
        catch(e) {
          console.log(e);
        }
      },time);
    })(time,i);
  }

},false);


