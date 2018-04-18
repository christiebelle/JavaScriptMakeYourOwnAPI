const app = function(){
  makeRequest("/players", playersRequestComplete)
};

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const playersRequestComplete = function(){
  console.log("Request complete! 🏒");
  debugger;
};

document.addEventListener("DOMContentLoaded", function(){
  app();
});
