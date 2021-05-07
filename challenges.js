init()
document.getElementById("Nouvelle Partie").onclick= init;
document.getElementById("Lance DéDé").onclick= Lance;
document.getElementById("Garder").onclick= Garder;

function init() {
    globalFirstPlayer = 0;
    roundFirstPlayer = 0;
  globalSecondPlayer= 0;
  roundSecondPlayer= 0;
  score=0;
  gameOn=true;
  activePlayer=1;
document.querySelector('#dice').style.display = 'none';
document.querySelector('#globalFirstPlayer').textContent= globalFirstPlayer ;  
document.querySelector('#globalSecondPlayer').textContent= globalSecondPlayer;
document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
document.querySelector('#roundSecondPlayer').textContent=  roundSecondPlayer;
document.querySelector('#score').textContent= score;
document.querySelector('#firstPlayer').textContent= "joueur 1 à toi de jouer!";
}
