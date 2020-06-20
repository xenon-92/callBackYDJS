/** @format */
//error handling using split callback

var btn = document.querySelector('.btn');

function success(data) {
  console.log(data);
}
function failure(err) {
  console.log(err);
}

function getData(url, cbS, cbE) {
  var xhr = new XMLHttpRequest();
  xhr.open('Get', url, true);
  xhr.send();
  xhr.onload = function () {
    cbS(xhr.response);
  };
  xhr.onerror = function (err) {
    cbE(new Error('failed retriving the data...'));
  };
}

var url2 = 'https://jsonplaceholder.typicode.com/posts/1';
// var url2 = 'https://jsonplaceholder.typicode.com/posts/101'; --error response--
btn.addEventListener('click',function(){
    getData(url2, success, failure);
});
