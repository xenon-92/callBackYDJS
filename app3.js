/** @format */

//Error handling using Node style
//error style

function callback(err, success) {
  if (err) {
    console.log(err);
  }
  console.log(success);
}

function getData(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('Get', url, true);
  xhr.send();
  xhr.onload = function () {
    cb(null, xhr.response);
  };
  xhr.onerror = function () {
    return cb(new Error('error reading the file....'));
  };
}

var url1 = 'https://jsonplaceholder.typicode.com/posts';
var url2 = 'https://jsonplaceholder.typicode.com/posts/1';

getData(url1, callback);


//callback within callback style
getData(url1, function (er, sc) {
  if (er) {
    console.log(er);
  }
  console.log(sc);
  getData(url2, callback);
});
