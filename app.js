/** @format */

//YDJS page no-35

var btn = document.querySelector('.btn');
btn.addEventListener('click', function (event) {
  console.log(event.target);
  setTimeout(function () {
    var url = 'https://jsonplaceholders.typicode.com/todos/1';
    var xhr = new XMLHttpRequest();
    xhr.open('Get',url,true);
    xhr.send();
    xhr.onload = function(){
        var p = document.createElement('p');
        p.innerHTML = xhr.response;
        document.body.appendChild(p);
    }
    xhr.onerror = function(err){
        var p = document.createElement('p');
        p.innerHTML = err;
        document.body.appendChild(p);
    }
  }, 1000);
});
