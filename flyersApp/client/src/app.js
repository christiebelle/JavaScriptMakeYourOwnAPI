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
  const responseText = this.responseText;
  const playerRoster = JSON.parse(responseText);
  populateList(playerRoster);
};

const populateList = function(playerRoster){
  for(let player of playerRoster){
    const p = document.createElement("p");
    p.innerText = `Player: ${player.name}, Position: ${player.position}, wearing Jersey Number: ${player.jerseyNo}`;

    document.body.appendChild(p);
  }
}

document.addEventListener("DOMContentLoaded", function(){
  app();
});
