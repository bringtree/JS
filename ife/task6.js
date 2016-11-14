/**
 * Created by huangpeisong on 2016/11/14.
 */

var getNum = document.getElementById('inputNum');
var rightAdd = document.getElementById('rightAddBtn');
var leftAdd = document.getElementById('leftAddBtn');
var rightOut = document.getElementById('rightOutBtn');
var leftOut = document.getElementById('leftOutBtn');
var contain = document.getElementById('cube');

rightAdd.addEventListener('click',function addnumR() {
  var num = getNum.value;
  contain.innerHTML ="<div class=\"cubeSon\"onclick=\"remove(this)\">"+num+"<\/div>"+contain.innerHTML;
});
leftAdd.addEventListener('click',function addnumL() {
  var num = getNum.value;
  contain.innerHTML =contain.innerHTML+ "<div class=\"cubeSon\"onclick=\"remove(this)\">"+num+"<\/div>";
});
rightOut.addEventListener('click',function removeR() {
  contain.removeChild(contain.lastChild);
});
leftOut.addEventListener('click',function removeL() {
  contain.removeChild(contain.firstChild);
});

function remove( _this ) {
  alert(_this.innerHTML);
  _this.remove();
}