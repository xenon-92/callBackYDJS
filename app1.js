/** @format */
//YDJS page no-36

function f() {
  console.log('f....');
  var i=9000;
  while(i-->0){
      var p = document.createElement('p');
      p.innerHTML = i;
      document.body.appendChild(p);
  }
}
function b() {
  console.log('b.....');
}
function d() {
  console.log('d.....');
}
function e() {
  console.log('e......');
}

var btn = document.querySelector('.btn');
btn.addEventListener('click',function(){
    outer();
});
function outer(){
setTimeout(function () {
  b();
  setTimeout(function () {
    d();
  }, 500);
  e();
}, 1000);
f();
}

