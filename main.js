
//
//
//
init() 

document.getElementById("newGame").onclick= init; 
document.getElementById("roll").onclick= roll;
document.getElementById("hold").onclick= hold; 
document.getElementById("volumes").onclick= onoff; 


//Initialise le jeu
function init() { 
  
  globalFirstPlayer = 0;
  roundFirstPlayer = 0;
  globalSecondPlayer= 0;
  roundSecondPlayer= 0;
  score=0;
  activePlayer=1;
  Player2.style.opacity = "0";
  Player1.style.opacity = "1";
  soundDice = 1;
  FirstPlayerWin=0;
  SecondPlayerWin=0;
  onoffinit()

document.querySelector('#globalFirstPlayer').textContent= globalFirstPlayer ;  
document.querySelector('#globalSecondPlayer').textContent= globalSecondPlayer;
document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
document.querySelector('#roundSecondPlayer').textContent=  roundSecondPlayer;

}

//Détermine le score et passe au joueurs suivant

function roll(){
  sounddice()
  let randomnumber = Math.floor(Math.random() * 6) + 1; 
  let dice = document.querySelector('#dice');
  dice.style.display = 'block';
  dice.src ="./image/" + randomnumber+'.png';
  

  if ((activePlayer==1)&&(randomnumber>1)) { 
    roundFirstPlayer=roundFirstPlayer + randomnumber;
    document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer; 
    Player1.style.opacity = "1";
    Player2.style.opacity = "0";

   }else if ((activePlayer==1)&&(randomnumber==1)){
    loosersound()
    roundFirstPlayer=0; 
    activePlayer=activePlayer+1; 
    document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
    Player1.style.opacity = "0";
    Player2.style.opacity = "1";

   }else if ((activePlayer==2)&&(randomnumber>1)){
    roundSecondPlayer=roundSecondPlayer + randomnumber;
    document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;
    Player2.style.opacity = "1";
    Player1.style.opacity = "0";
  }else { 
    loosersound()
    roundSecondPlayer=0;
    activePlayer=activePlayer-1;
    document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;

    Player1.style.opacity = "1";
    Player2.style.opacity = "0";

}
}

//Ajoute le score global et passe au joueurs suivant

function hold(){
  soundhold()
 if ((activePlayer==1)&&(globalFirstPlayer+roundFirstPlayer<100)){ 
  globalFirstPlayer=roundFirstPlayer + globalFirstPlayer;
  roundFirstPlayer=0;
  document.querySelector('#globalFirstPlayer').textContent= globalFirstPlayer;
  document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
  Player1.style.opacity = "1";
  Player2.style.opacity = "0";
  activePlayer= 2
  nextround()
} else if ((activePlayer==1)&&(globalFirstPlayer+roundFirstPlayer>=100)){
  activePlayer=1
  alert('Le joueur 1 à gagné cette manche');
  nextgame()
 } else if ((activePlayer==2)&&(globalSecondPlayer+roundSecondPlayer < 100)){
  globalSecondPlayer=roundSecondPlayer + globalSecondPlayer;
  roundSecondPlayer=0;
  document.querySelector('#globalSecondPlayer').textContent= globalSecondPlayer;
  document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;
  activePlayer=1
  nextround()
} else if ((activePlayer==2)&&(globalSecondPlayer+roundSecondPlayer>= 100)) {
  activePlayer=2
  alert('Le joueur 2 à gagné cette manche');
  nextgame()

}
}
//Changement de joueur

function nextround(){
  if (activePlayer==1) {
    Player1.style.opacity = "1";
    Player2.style.opacity = "0";
  } else {
    Player1.style.opacity = "0";
    Player2.style.opacity = "1";
}
}
//jeu suivant aprés victoires

function nextgame(){
  onoffinit()
  globalFirstPlayer = 0;
  roundFirstPlayer = 0;
  globalSecondPlayer= 0;
  roundSecondPlayer= 0;
  score=0;
  document.querySelector('#globalFirstPlayer').textContent= globalFirstPlayer ;
  document.querySelector('#globalSecondPlayer').textContent= globalSecondPlayer;
  document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
  document.querySelector('#roundSecondPlayer').textContent=  roundSecondPlayer;
  document.querySelector('#score').textContent= score;
}
//son 

function onoffinit(){
  if (soundDice == 1) {
  son.src ="./image/son.png";
  }else if (soundDice==0) {
  son.src ="./image/sonoff.png";
}
}

//son on/off

function onoff(){
  if (soundDice == 1) {
  soundDice = soundDice-1 ;
  son.src ="./image/sonoff.png";
  }else if (soundDice==0) {
  soundDice = soundDice+1;
  son.src ="./image/son.png";
}
}
//Fonction pour activer les differents son

function sounddice(){
if (soundDice==1) {
const audio = new Audio('./Sound/Dice sound.mp3');
audio.play()
}
}

function soundhold(){
  if (soundDice==1) {
  const audiohold = new Audio('./Sound/holdsong.mp3');
  audiohold.play()
  }
  }
function loosersound(){
  if (soundDice==1) {
  const audiolooser = new Audio('./Sound/loosersound.mp3');
  audiolooser.play()
  }
  }
//Modal règles

let rulesModal = document.getElementById("rulesModal");
let Rules = document.getElementById("Rules");
let closeRules = document.getElementsByClassName("closeRules")[0];

// Ouverture de la fenetre des règles
Rules.onclick = function(e) {
  e.preventDefault();
  rulesModal.style.display = "block";
}
// Fermeture de la fenetre des règles
closeRules.onclick = function() {
  rulesModal.style.display = "none";
}
// Fermeture de la fenetre règles clic en-dehors
window.onclick = function(event) {
  if (event.target == rulesModal) {
      rulesModal.style.display = "none";
  }
}



